/*
 * @Author: WeiShan
 * @Date: 2022-09-21 14:35:58
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-27 13:53:30
 * @FilePath: \react-learn\config-overrides.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
const path = require('path') 
const { override, addDecoratorsLegacy } = require('customize-cra')
function resolve(dir) { 
    return path.join(__dirname, dir) 
}
const customize = () => (config, env) => {
    config.resolve.alias['@'] = resolve('src')
    if (env === 'production') {
        config.externals = {
            'react': 'React',
            'react-dom': 'ReactDOM' 
        } 
    }
    return config 
};
module.exports = override(addDecoratorsLegacy(), customize())