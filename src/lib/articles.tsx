import { ArticlePreview } from '@/components/article-preview/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';
import remarkParse from 'remark-parse';

const articlesDirectory = path.join(process.cwd(), 'contents/articles');

export function getArticlePreviewsSorted(): ArticlePreview[] {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData: ArticlePreview[] = fileNames.map((fileName) => {
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

    return allArticlesData.sort((a: ArticlePreview, b: ArticlePreview) => {
        return b.date.localeCompare(a.date);
    });
}

export function getAllArticleIds() {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames.map((filename) => {
        return {
            params: {
                id: filename.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getArticleData(id: string) {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = process.env.NEXT_PUBLIC_BASE_PATH===undefined ? processedContent.toString() :
        processedContent.toString().replace(
            /\/assets\//g,
            process.env.NEXT_PUBLIC_BASE_PATH + "/assets/"
        );

    const ast = remark()
        .use(remarkParse)
        .parse(matterResult.content);

    let headings: any = [];
    ast.children.forEach((node) => {
        if (node.type === "heading") {
            const depth = node.depth;
            const title = (node.children[0] as any).value;
            headings.push({"depth": depth, "heading": title});
        }
    })

    return {
        id,
        ast,
        headings,
        contentHtml,
        ...matterResult.data,
    };
}