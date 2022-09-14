/*
 * @Author: WeiShan
 * @Date: 2022-09-14 15:51:18
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-14 16:05:33
 * @FilePath: \react-learn\src\07-antd\04-下拉菜单.js
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
    SmileOutlined,
    DownOutlined
  } from '@ant-design/icons';
  import { Layout, Menu , Dropdown ,Space } from 'antd';
  import React, { useState } from 'react';
//   import { Component } from 'react';

import './css/03-layout.css'
  
  const { Header, Sider, Content } = Layout;

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ]}
      onClick = {(key)=>{console.log(key)}}
    />
  );
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
  
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
            <Dropdown overlay={menu} trigger={['click']}>
                <div>
                <Space>
                    Hover me
                    <DownOutlined />
                </Space>
                </div>
                {/* <div>Hower me</div> */}
            </Dropdown>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default App;