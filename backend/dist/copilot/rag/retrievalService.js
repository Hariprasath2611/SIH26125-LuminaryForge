"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchKnowledgeBase = searchKnowledgeBase;
const prisma_1 = require("../../lib/prisma");
async function searchKnowledgeBase(query, topK = 4) {
    if (!query || query.trim().length === 0)
        return [];
    const rawTerms = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(t => t.length > 2);
    const stopWords = new Set(['what', 'when', 'where', 'which', 'who', 'whom', 'this', 'that', 'with', 'from', 'have', 'does', 'tell', 'show', 'please', 'help', 'bharosa']);
    const terms = rawTerms.filter(t => !stopWords.has(t));
    if (terms.length === 0) {
        terms.push(...rawTerms.slice(0, 3));
    }
    // Retrieve all chunks from database
    const allChunks = await prisma_1.prisma.kbChunk.findMany({
        select: {
            id: true,
            title: true,
            section: true,
            sourceFile: true,
            content: true,
            keywords: true,
        },
    });
    const scored = allChunks.map(chunk => {
        let score = 0;
        const lowerContent = chunk.content.toLowerCase();
        const lowerTitle = chunk.title.toLowerCase();
        const lowerSection = chunk.section.toLowerCase();
        for (const term of terms) {
            if (lowerTitle.includes(term))
                score += 5;
            if (lowerSection.includes(term))
                score += 4;
            if (chunk.keywords.includes(term))
                score += 3;
            const count = (lowerContent.match(new RegExp(`\\b${term}`, 'g')) || []).length;
            score += Math.min(count, 5);
        }
        return {
            id: chunk.id,
            title: chunk.title,
            section: chunk.section,
            sourceFile: chunk.sourceFile,
            content: chunk.content,
            score,
        };
    });
    // Filter with minimum relevance threshold, sort desc, pick topK
    const results = scored
        .filter(p => p.score >= 2)
        .sort((a, b) => b.score - a.score)
        .slice(0, topK);
    return results;
}
