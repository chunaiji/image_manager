
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload, Flex, Image, Typography, Card, List, Layout } from 'antd';
import { createStyles } from 'antd-style';
import { InboxOutlined } from '@ant-design/icons';
import HeaderSettings from './header'


const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
};

const AppContainer: React.FC = () => (

    <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>

)

export default AppContainer;