import Layout from "@/components/layout";
import Post from "@/components/post";
import { getAllArticleIds, getArticleData } from "@/lib/articles";
import Head from "next/head";

export async function getStaticPaths() {
    const paths = getAllArticleIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const articleData = await getArticleData(params.id);
    return {
        props: {
            articleData,
        },
    };
}

export default function PostPage({ articleData }: any) {
    return (
        <Layout home={false}>
            <Head>
                <title>{articleData.title}</title>
            </Head>

            <Post postData={articleData}/>
        </Layout>
    )
}