import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '@/components/layout'
import { getArticlePreviewsSorted } from '../lib/articles'
import { Card, Col, Row } from 'antd'

const inter = Inter({ subsets: ['latin'] })
const { Meta } = Card;

export async function getStaticProps() {
  console.log("----");
  const allArticlesData = getArticlePreviewsSorted();
  return {
    props: {
      allArticlesData,
    },
  };
}

export default function Home({ allArticlesData }: any ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Row gutter={[16, 16]}>
        {allArticlesData.map(({ id, date, title, image_preview, summary } : {id:string, date:string, title:string, image_preview:string, summary:string}) => (
          <Col key={id}>
            <Card hoverable style={{ width: 300 }} cover={<img alt={title} src={image_preview} />}>
              <Meta title={title} description={summary}/>
              {/* <Meta title={title} description={image_preview}/> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
