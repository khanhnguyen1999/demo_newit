import React from 'react'

// import layout ant design 
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link,Route} from 'react-router-dom'



const LayoutComponent = ({children})=>{
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    return (
        <Layout>
            <Header className="header">
            <div className="logo" />
            </Header>
            <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Admin">
                    <Menu.Item key="1">
                        <Link to="/">
                            Create User
                        </Link>    
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/createquestion">
                            Create Question
                        </Link>  
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/createtag">
                            Create Tag
                        </Link>  
                    </Menu.Item>
                </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                {children}
                </Content>
            </Layout>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent