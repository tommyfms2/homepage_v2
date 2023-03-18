import { Button, Descriptions, Timeline } from "antd";
import { PostData } from "../types";
import postStyles from '../../../styles/posts.module.css';

interface Props {
    postData: PostData;
}

export default function SideBar( { postData } : Props ) {
    return (
        <>
            <Descriptions column={1} layout="vertical">
                {postData.descriptions?.texts?.map(({name, text}) => (
                    <Descriptions.Item key={name} label={name} style={{ paddingBottom: 0 }}><div className={postStyles.paddingBottom20}>{text}</div></Descriptions.Item>
                ))}
                {postData.descriptions?.links && (
                    <Descriptions.Item label="Links" style={{ paddingBottom: 0 }}>
                        {postData.descriptions?.links.map(({name, url}) => (
                            <Button key={name} type="link" target="_blank" size="small" href={url}>{name}</Button>
                        ))}
                    </Descriptions.Item>
                )}
            </Descriptions>
            <Timeline style={{margin: 10, marginTop: 80}}
                items={postData.headings
                    .filter((data) => data.depth <= 2)
                    .map((data) => ({
                    children: <div className={data.depth === 2 ? postStyles.subIndex : undefined}>{data.heading}</div>,
                    color: data.depth === 2 ? "gray": undefined
                }))}
            />
        </>
    )
}