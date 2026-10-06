"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexKnowledgeBase = indexKnowledgeBase;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prisma_1 = require("../lib/prisma");
function extractKeywords(text) {
    const clean = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const words = clean.split(/\s+/).filter((w) => w.length > 2);
    const stopWords = new Set([
        'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'are', 'was', 'were',
        'can', 'not', 'you', 'your', 'which', 'will', 'all', 'any', 'but', 'out', 'use',
        'when', 'into', 'who', 'how', 'what', 'why', 'where', 'their', 'there'
    ]);
    const freq = {};
    for (const w of words) {
        if (!stopWords.has(w)) {
            freq[w] = (freq[w] || 0) + 1;
        }
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15)
        .map(([w]) => w);
}
function chunkMarkdown(filePath) {
    const fileName = path_1.default.basename(filePath);
    const rawContent = fs_1.default.readFileSync(filePath, 'utf-8');
    const lines = rawContent.split('\n');
    let docTitle = fileName.replace(/\.md$/, '').replace(/^\d+_/, '').replace(/_/g, ' ');
    const chunks = [];
    let currentSection = 'Overview';
    let buffer = [];
    let chunkIdx = 0;
    for (const line of lines) {
        if (line.startsWith('# ')) {
            docTitle = line.replace(/^#\s+/, '').trim();
        }
        else if (line.startsWith('## ') || line.startsWith('### ')) {
            if (buffer.length > 0) {
                const text = buffer.join('\n').trim();
                if (text.length > 20) {
                    chunks.push({
                        chunkId: `${path_1.default.basename(filePath, '.md')}_chunk_${chunkIdx++}`,
                        sourceFile: fileName,
                        title: docTitle,
                        section: currentSection,
                        content: text,
                        category: fileName.split('_')[1] || 'general',
                        keywords: extractKeywords(text),
                    });
                }
                buffer = [];
            }
            currentSection = line.replace(/^#+\s+/, '').trim();
        }
        else {
            buffer.push(line);
        }
    }
    if (buffer.length > 0) {
        const text = buffer.join('\n').trim();
        if (text.length > 20) {
            chunks.push({
                chunkId: `${path_1.default.basename(filePath, '.md')}_chunk_${chunkIdx++}`,
                sourceFile: fileName,
                title: docTitle,
                section: currentSection,
                content: text,
                category: fileName.split('_')[1] || 'general',
                keywords: extractKeywords(text),
            });
        }
    }
    return chunks;
}
async function indexKnowledgeBase() {
    const kbDir = path_1.default.resolve(__dirname, '../../../docs/copilot-kb');
    if (!fs_1.default.existsSync(kbDir)) {
        console.warn(`[Copilot Indexer] KB directory not found at: ${kbDir}`);
        return { totalChunks: 0, filesProcessed: 0 };
    }
    const files = fs_1.default.readdirSync(kbDir).filter((f) => f.endsWith('.md'));
    console.log(`[Copilot Indexer] Found ${files.length} knowledge base documents in ${kbDir}`);
    let totalChunks = 0;
    for (const file of files) {
        const fullPath = path_1.default.join(kbDir, file);
        const chunks = chunkMarkdown(fullPath);
        for (const chunk of chunks) {
            await prisma_1.prisma.kbChunk.upsert({
                where: { chunkId: chunk.chunkId },
                update: {
                    title: chunk.title,
                    section: chunk.section,
                    content: chunk.content,
                    category: chunk.category,
                    keywords: chunk.keywords,
                    sourceFile: chunk.sourceFile,
                },
                create: {
                    chunkId: chunk.chunkId,
                    sourceFile: chunk.sourceFile,
                    title: chunk.title,
                    section: chunk.section,
                    content: chunk.content,
                    category: chunk.category,
                    keywords: chunk.keywords,
                },
            });
            totalChunks++;
        }
        console.log(`✓ Indexed ${chunks.length} chunks from ${file}`);
    }
    console.log(`[Copilot Indexer] Successfully indexed ${totalChunks} total chunks.`);
    return { totalChunks, filesProcessed: files.length };
}
if (require.main === module) {
    indexKnowledgeBase()
        .then(() => process.exit(0))
        .catch((err) => {
        console.error('[Copilot Indexer Error]', err);
        process.exit(1);
    });
}
