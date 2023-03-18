import Head from 'next/head'
import Layout, { siteTitle } from '@/components/layout'
import { getArticlePreviewsSorted } from '../lib/articles'
import { Row } from 'antd'
import ArticlePrevewCard from '@/components/article-preview'
import { ArticlePreview } from '@/components/article-preview/types'

export async function getStaticProps() {
  const allArticlePreviews = getArticlePreviewsSorted();
  return {
    props: {
      allArticlePreviews,
    },
  };
}

export default function Home({ allArticlePreviews }: {allArticlePreviews: ArticlePreview[]} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Row gutter={[16, 16]} justify="center" >
        {allArticlePreviews.map( (articlePreview : ArticlePreview ) => (
          <ArticlePrevewCard key={articlePreview.id} articlePreview={articlePreview}/>
        )) }
      </Row>
    </Layout>
  );
}
