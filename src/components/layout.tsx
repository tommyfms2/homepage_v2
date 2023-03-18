import { GithubOutlined, TagFilled, TwitterOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaTag } from "react-icons/fa";
import { Avatar, Col, Row, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Head from "next/head";
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/layout.module.css'

const name = "Xaver Tomihiro Toyozaki";
export const siteTitle = "Homepage";

const { Text, Link } = Typography

export default function Layout({ children, home }: {children: any, home: boolean}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Space size={25} direction="vertical" align="center">
                            <Avatar size={192} src="./images/global/profile.jpg" />
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
                        <Avatar size={128} src="./images/global/profile.jpg" />
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    );
}