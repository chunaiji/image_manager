
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload, Flex, Image, Typography, Card } from 'antd';
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

const boxStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 6,
    paddingTop: '20px'
};

const cardStyle: React.CSSProperties = {
    width: 920,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 273,
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
        <Flex style={boxStyle} justify={'center'} align={'center'}>
            <Card hoverable style={cardStyle} styles={{ body: { padding: 10, overflow: 'hidden' } }}>
                <Flex justify="space-between">
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
            </Card>
        </Flex>
    )
};

export default Home;