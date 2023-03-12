import fs from 'fs';
import matter from 'gray-matter';
import path from "path";

const articlesDirectory = path.join(process.cwd(), 'contents/articles');

interface PreviewData {
    id: string;
    title: string;
    date: string;
    image_preview: string;
    summary: string;
}

export function getArticlePreviewsSorted(): PreviewData[] {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData: PreviewData[] = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            image_preview: matterResult.data.image_preview,
            summary: matterResult.data.summary
        };
    });
    
    return allArticlesData.sort((a: PreviewData, b: PreviewData) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}