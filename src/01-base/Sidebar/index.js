/*
 * @Author: WeiShan
 * @Date: 2022-08-18 23:02:24
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-18 23:25:24
 * @FilePath: \react-learn\src\01-base\Sidebar\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
function Sidebar(props){ //函数式组件接受属性

    let {bg,position} = props

    let obj1 = {
        left:0
    }

    let obj2 = {
        right:0
    }

    let obj = {
        background:bg,
        width:"200px",
        position:"fixed"
    }

    let styleObj = position==="left"?{...obj,...obj1}:{...obj,...obj2}

    return(
        <div style={styleObj}>
            <ul>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
            </ul>
        </div>
    )

}

//属性验证
Sidebar.defaultProps(
    {}
)

Sidebar.prototype(
    {

    }
)

export default Sidebar;