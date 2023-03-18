import { BASE_PATH } from "@/lib/constants";
import { Card, Col } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArticlePreview } from "./types";

interface Props {
    articlePreview: ArticlePreview;
}

export default function ArticlePrevewCard({ articlePreview }: Props) {
    const router = useRouter();
    const basePath = router.pathname.startsWith(BASE_PATH) ? BASE_PATH : '';

    return (
        <Link key={articlePreview.id} href={`${basePath}/post/${articlePreview.id}`}>
            <Col key={articlePreview.id}>
            <Card hoverable style={{ width: 300 }} cover={<img alt={articlePreview.title} src={articlePreview.image_preview} />}>
                <Card.Meta title={articlePreview.title} description={articlePreview.summary}/>
            </Card>
            </Col>
        </Link>
    )
}