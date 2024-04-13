
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload, Flex, Image, Typography, Card, List } from 'antd';
import { createStyles } from 'antd-style';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const useStyles = createStyles(({ token }) => {
    return {
        action: {
            marginLeft: '8px',
            // height: '80%',
            magin: '0 auto',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            // backgroundColor: 'yellow',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive,
            },
        },
        lang: {
            width: 42,
            height: 42,
            lineHeight: '42px',
            position: 'fixed',
            right: 16,
            borderRadius: token.borderRadius,
            ':hover': {
                backgroundColor: token.colorBgTextHover,
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage:
                "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%',
        },
    }

});


const data1 = [
    {
        title: "户外风景1",
        data: [{
            title: 'Title 1',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 2',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 3',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 4',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 5',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 2',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 3',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 4',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 5',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }]
    }, {
        title: "户外风景2",
        data: [{
            title: 'Title 1',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 2',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 3',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 4',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 5',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 2',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 3',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 4',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            title: 'Title 5',
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }]
    }
];

const containerStyle: React.CSSProperties = {
    // width: '100%',
    // borderRadius: 6,
    // paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};


const boxStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 6,
    paddingTop: '20px'
};

const cardStyle: React.CSSProperties = {
    width: '98%',
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 273,
};

const imgStyle1: React.CSSProperties = {
    display: 'block',
    width: 150,
};

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const Home: React.FC = () => {
    const { styles } = useStyles();

    return (
        <Flex style={containerStyle} >

            <Card hoverable style={cardStyle} styles={{ body: { padding: 10, overflow: 'hidden' } }}>
                <Flex justify="center" style={{ paddingBottom: '20px' }}>
                    <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                    />
                    <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>

                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Dragger>
                    </Flex>
                </Flex>
                <Flex justify="center" style={{ display: 'flex', flexDirection: 'column' }}>


                    {data1.map((response_item, index) => (
                        <div style={{ margin: '0 0 10px;' }} >
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "baseline", width: '97%' }}>
                                <div style={{ fontSize: '20px' }}>{response_item.title}</div>
                                <a style={{ right: '20px' }}  >查看全部</a>
                            </div>
                            <List
                                grid={{
                                    gutter: [16, 24],
                                    xs: 2,
                                    sm: 2,
                                    md: 2,
                                }}
                                dataSource={response_item.data}
                                renderItem={(item) => (
                                    <List.Item>
                                        <img
                                            alt="avatar"
                                            src={item.src}
                                            style={imgStyle1}
                                        />

                                    </List.Item>

                                )}
                            />
                        </div>
                    ))};
                </Flex>
            </Card>


        </Flex>

    )
};

export default Home;