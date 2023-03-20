import { Button, Col, Descriptions, Row, Timeline } from "antd";
import { PostData } from "./types";
import postStyles from '../../styles/posts.module.css';
import SideBar from "./sidebar";


interface Props {
    postData: PostData;
}

export default function Post( { postData } : Props ) {
    let sideBarSize = 7;
    let offset = 2;
    if (postData.descriptions === undefined) {
        sideBarSize = 0;
        offset = 0;
    }
    return (
        <Row>
            <Col span={24-sideBarSize-offset}>
                <h1 style={{marginTop: 2}}>{postData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
            </Col>
            <Col span={sideBarSize} offset={offset}>
                <SideBar postData={postData}/>
            </Col>
        </Row>
    );
}