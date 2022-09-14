/*
 * @Author: WeiShan
 * @Date: 2022-09-14 15:25:21
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-14 16:30:12
 * @FilePath: \react-learn\src\07-antd\06-轮播.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu ,Carousel} from 'antd';
  import React, { useState } from 'react';
//   import { Component } from 'react';

import './css/03-layout.css'
  
  const { Header, Sider, Content } = Layout;
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Carousel autoplay={true}>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default App;