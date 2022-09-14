/*
 * @Author: WeiShan
 * @Date: 2022-09-14 15:18:30
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-14 15:21:20
 * @FilePath: \react-learn\src\07-antd\02-栅格系统.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { Row } from 'antd'
import { Col } from 'antd'

export default function App() {
  return (
    <div>
        <Row>
            <Col span={24}>col</Col>
        </Row>
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
        <Row>
            <Col span={8}>col-8</Col>
            {/* <Col span={8}>col-8</Col> */}
            <Col span={8} offset={8}>col-8</Col>
        </Row>
    </div>
  )
}
