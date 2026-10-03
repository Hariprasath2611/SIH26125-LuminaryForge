import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';

interface ChunkMeta {
  chunkId: string;
  sourceFile: string;
  title: string;
  section: string;
  content: string;
  category: string;
  keywords: string[];
}

function extractKeywords(text: string): string[] {
  const clean = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const words = clean.split(/\s+/).filter((w) => w.length > 2);
  const stopWords = new Set([
    'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'are', 'was', 'were',
    'can', 'not', 'you', 'your', 'which', 'will', 'all', 'any', 'but', 'out', 'use',
    'when', 'into', 'who', 'how', 'what', 'why', 'where', 'their', 'there'
  ]);
  const freq: Record<string, number> = {};
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

function chunkMarkdown(filePath: string): ChunkMeta[] {
  const fileName = path.basename(filePath);
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const lines = rawContent.split('\n');

  let docTitle = fileName.replace(/\.md$/, '').replace(/^\d+_/, '').replace(/_/g, ' ');
  const chunks: ChunkMeta[] = [];
  let currentSection = 'Overview';
  let buffer: string[] = [];
  let chunkIdx = 0;

  for (const line of lines) {
    if (line.startsWith('# ')) {
      docTitle = line.replace(/^#\s+/, '').trim();
    } else if (line.startsWith('## ') || line.startsWith('### ')) {
      if (buffer.length > 0) {
        const text = buffer.join('\n').trim();
        if (text.length > 20) {
          chunks.push({
            chunkId: `${path.basename(filePath, '.md')}_chunk_${chunkIdx++}`,
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
    } else {
      buffer.push(line);
    }
  }

  if (buffer.length > 0) {
    const text = buffer.join('\n').trim();
    if (text.length > 20) {
      chunks.push({
        chunkId: `${path.basename(filePath, '.md')}_chunk_${chunkIdx++}`,
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

export async function indexKnowledgeBase(): Promise<{ totalChunks: number; filesProcessed: number }> {
  const kbDir = path.resolve(__dirname, '../../../docs/copilot-kb');
  if (!fs.existsSync(kbDir)) {
    console.warn(`[Copilot Indexer] KB directory not found at: ${kbDir}`);
    return { totalChunks: 0, filesProcessed: 0 };
  }

  const files = fs.readdirSync(kbDir).filter((f) => f.endsWith('.md'));
  console.log(`[Copilot Indexer] Found ${files.length} knowledge base documents in ${kbDir}`);

  let totalChunks = 0;
  for (const file of files) {
    const fullPath = path.join(kbDir, file);
    const chunks = chunkMarkdown(fullPath);

    for (const chunk of chunks) {
      await prisma.kbChunk.upsert({
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
