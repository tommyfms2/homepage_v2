import { GithubOutlined, TagFilled, TwitterOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaTag } from "react-icons/fa";
import { Avatar, Col, Row, Space, Typography } from "antd";
import Head from "next/head";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/layout.module.css'

const name = "Xaver Tomihiro Toyozaki";
export const siteTitle = "Homepage";

const { Text } = Typography

export default function Layout({ children, home }: {children: any, home: boolean}) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}` : '';
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Space size={25} direction="vertical" align="center">
                            <Avatar size={192} src={`${basePath}/images/global/profile.jpg`} />
                            <Space direction="vertical" size={0} align='center'>
                                <Text className={utilStyles.headingXl}>{name}</Text>
                                <Text className={utilStyles.headingMd} type="secondary">softwear engineer</Text>
                            </Space>
                            <Space size={20}>
                                <a href="https://twitter.com/xaver_tommy" target="_blank">
                                    <TwitterOutlined className={utilStyles.iconLink} />
                                </a>
                                <a href="https://github.com/tommyfms2" target="_blank" rel="noopener noreferrer">
                                    <GithubOutlined className={utilStyles.iconLink} />
                                </a>
                            </Space>
                            <Row>
                                <Col span={8}>
                                    <Space direction="vertical" className={utilStyles.myList}>
                                        <FaTag className={utilStyles.normalIcon}/>
                                        <Text>Interaction Design</Text>
                                        <Text>UI/UX Design</Text>
                                        <Text>Machine Learning</Text>
                                        <Text>Clean Archetecture</Text>
                                        <Text>Spring Boot</Text>
                                    </Space>
                                </Col>
                                <Col span={8} offset={8}>
                                    <Space direction="vertical" className={utilStyles.myList}>
                                        <FaGraduationCap className={utilStyles.normalIcon}/>
                                        <Text>Bachelor(Science) ,2017</Text>
                                        <Text>Meiji University</Text>
                                        <Text>Master of Science ,2017</Text>
                                        <Text>Meiji University</Text>
                                    </Space>
                                </Col>
                            </Row>
                        </Space>

                    </>
                ) : (
                    <>
                        <Space size={25} direction="vertical" align="center">
                            <Link href="/"><Avatar size={128} src={`${basePath}/images/global/profile.jpg`} /></Link>
                        </Space>
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    );
}