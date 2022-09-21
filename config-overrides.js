/*
 * @Author: WeiShan
 * @Date: 2022-09-21 14:35:58
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-21 14:37:16
 * @FilePath: \react-learn\config-overrides.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
const { override , addDecoratorsLegacy} = require('customize-cra');
module.exports = override(
    addDecoratorsLegacy()
)