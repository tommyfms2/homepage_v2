
export interface PostData {
    title: string;
    contentHtml: string;
    descriptions?: {
        texts?: { name: string; text: string}[];
        links?: { name: string; url: string}[];
    };
    headings: {depth: number; heading: string }[];
}