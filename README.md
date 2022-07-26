# 一、react基本介绍 #
## 1.优点 ##

① **声明式设计** - 轻松描述应用

② **高效**- react通过对dom的模拟(虚拟dom)，最大限度地减少与DOM的交互 

&emsp;**灵活**- react可以与已知库或者框架很好地配合。

③ **组件化** - 通过React构建组件，使得代码更容易得到**复用**，能够很好的应用在大项目中。

④**单项数据流** - React实现了单项响应的数据流从而简化扫了重复代码，这也是它为什么比传统数据绑定更简单；

⑤**虚拟dom** - 前端开发中 性能消耗最大的就是DOM操作。React把真是的DOM树转换成**JavaScript对象树**，也就是 **Virtual DOM** 。

&emsp;**JSX** - 是JavaScript语法的扩展。<br>

XML可扩展标记语言 跟 html超文本标记语言 区别  --  都是标记语言 ， html预定义 xml 自定义的...

## 2.介绍 ##

源于Facebook的内部项目，用来架设Instagram的网站；2013年5月开源。

react将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套、就形成我们的页面。

### 关于react全家桶 ###
**1、react**

react的核心。

**2、redux**

redux相当于一个数据库，可以当成一个本地的数据库使用，react-redux可以完成数据订阅，redux-thunk可以实现异步的action，redux-logger是redux的日志中间件。

**3、react-router**

React Router 是专为 React 设计的路由解决方案。它利用HTML5 的history API，来操作浏览器的 session history (会话历史)。

React Router被拆分成四个包：react-router，react-router-dom，react-router-native和react-router-config。react-router提供核心的路由组件与函数。react-router-config用来配置静态路由（还在开发中），其余两个则提供了运行环境（浏览器与react-native）所需的特定组件。

进行网站（将会运行在浏览器环境中）构建，我们应当安装react-router-dom。因为react-router-dom已经暴露出react-router中暴露的对象与方法，因此你只需要安装并引用react-router-dom即可。

**4、axios**

axios是基于Promise的用于浏览器和Node.js的http客户端。可以发送get、post等http请求，用来和服务器进行交互的。

**5、antd**

Ant Degisn是个很好的React UI库，看起来跟我们熟知的bootstrap有点类似，从页面布局到按钮到文字提示泡应有尽有。

# 二、react安装 #

1.全局安装 create-react-app

	npm install -g create-react-app

2.创建一个项目

	create-react-app your-app

3.不想全局安装可以使用npx

	npx create-react-app your-app 也可以实现相同效果
    npx - 临时安装

</br>
安装之后这需要等待一段时间，这个过程实际上**安装三个东西**

- react:react的顶级库
-     react-dom:因为react有很多的运行环境，比如app端的react-native,我们要在web端运行就使用react-dom
- 	react-scripts:包含运行和打包react应用程序的所有脚本及配置

**PS.** npm切换为淘宝镜像 或者 yarn切换到淘宝镜像

## 三、目录介绍 ##
    README.md -- 使用方法的文档
    node_modules -- 所有的以来安装的目录
    package-lock.json -- 锁定安装的包的版本号保证团队的依赖能保证一致
    package.json 
    public -- 静态公共目录
    src -- 开发用的源代码目录

**PS.**关于package.json与package-lock.json的区别<br/>
1.**package-lock.json** <br/>
存储node_modules下包的信息，包括版本号、下载地址等<br>
作用：锁定安装时的包版本号，需要上传到git上，以保证其他人在install时候，大家的依赖版本相同。<br>
2.**package.json**<br>
包描述文件<br>
作用：其实最有用的是dependencies选项，包含第三方包依赖信息<br>
package-lock.json跟package.json的区别在于：<br>

    "dependencies": {
     "@types/node": "^8.0.33",
    }

这里的^向上尖号是定义向后（新）兼容依赖，如果types/node版本是超过8.0.33，并且是在大版本（8）上相同，就允许下载最新的types/node包。同一个大版本不同版本号之间存在差异，导致依赖库包行为特征有时候不兼容。<br>
而package-lock.json就只会下载8.0.33版本的。<br>

**npm5以前**<br>
&nbsp;&nbsp;&nbsp;&nbsp;npm5以前，没有package-lock.json这个文件。package.json文件会记录你项目中所需要的所有模块。当你执行npm install的时候，node会先从package.json文件中读取所有dependencies信息，然后根据dependencies中的信息与node_modules中的模块进行对比，没有的直接下载，已有的检查更新。<br>
&nbsp;&nbsp;&nbsp;&nbsp;因为package.json只能锁定模块的大版本号（版本号的第一位），不能锁定后面的小版本，所以你每次重新npm install时候拉取的都是该大版本下面最新的版本。一般我们为了稳定性考虑我们不能随意升级依赖包，因为如果换包导致兼容性bug出现很难排查，这样很容易出现问题，所以package-lock.json就是来解决包锁定不升级问题的。另外，package.json文件只记录你通过npm install方式安装的模块信息，而这些模块所依赖的其他子模块的信息不会记录。
        
**npm5以后**<br>
&nbsp;&nbsp;&nbsp;&nbsp;package-lock.json文件锁定所有模块的版本号，包括主模块和所有依赖子模块。当你执行npm install的时候，node从package.json文件读取模块名称，从package-lock.json文件中获取版本号，然后进行下载或者更新。<br>
&nbsp;&nbsp;&nbsp;&nbsp;因此，正因为有了package-lock.json文件锁定版本号，所以当你执行npm install的时候，node不会自动更新package.json文件中的模块，必须用npm install packagename@x.x.x（指定版本号）来进行安装才会更新，package-lock.json文件中的版本号也会随着更新。

## 四、vscode 快速添加头注释 ##

- 安装 koroFileHeader
- 配置 setting.json
- 在VS Code中，依次打开 “文件(File) → 首选项(Preferences) → 设置(Settings)”,然后搜索fileheader以打开setting.json文件
- 最后在setting.json中添加如下配置命令：（配置命令可自定义修改哈，详细配置见GitHub：koroFileHeader）

    	// 头部注释
	    "fileheader.customMade": {  //快捷键 ctrl+win+i
	    "Author": "Xminyang", // 创建文件的作者
	    "Date": "Do not edit", // 文件创建时间(不变)
	    "LastEditors": "Xminyang", // 文件最后编辑者
	    // 由于编辑文件就会变更最后编辑时间，多人协作中合并的时候会导致merge
	    // 可以将时间颗粒度改为周、或者月，这样冲突就减少很多。搜索变更时间格式: dateFormat
	    "LastEditTime": "Do not edit", // 文件最后编辑时间
	    // 输出相对路径，类似: /文件夹名称/src/index.js
	    "FilePath": "Do not edit", // 文件在项目中的相对路径 自动更新
	    // 插件会自动将光标移动到Description选项中 方便输入 Description字段可以在specialOptions更改
	    "Description": "", // 介绍文件的作用、文件的入参、出参。
	    // custom_string_obkoro1~custom_string_obkoro100都可以输出自定义信息
	    // 可以设置多条自定义信息 设置个性签名、留下QQ、微信联系方式、输入空行等
	    "custom_string_obkoro1": "",
	    // 版权声明 保留文件所有权利 自动替换年份
	    "custom_string_obkoro1_copyright": "Copyright (c) ${now_year} by 用户/公司名, All Rights Reserved. "
	    },
	    // 函数注释
	    "fileheader.cursorMode": {//快捷键 ctrl+win+t
	    "description": "", // 函数注释生成之后，光标移动到这里
	    "param": "", // param 开启函数参数自动提取 需要将光标放在函数行或者函数上方的空白行
	    "return": "",
	    }

2、快捷键<br>
添加文件头部注释：Ctrl+Win+i<br>
添加函数注释：Ctrl+Win+t

## 五、开始第一个react应用 ##
react开发需要引入多个依赖文件：react.js、react-dom.js，分别又有**开发版本和生产版本**，create-react-app里已经安装好。把通过CRA创建的工程目录清空，然后里面重新创建一个index.js写入以下代码：

**知识：**<br>
es6中引用模块import后面加上花括号{}和不加花括号的区别<br>

1. import不使用花括号<br>

不使用{}来引用模块的情况下，**import模块时的命名是随意的**，即如

下是那种引用命名都是正确的；<br>

它总是会解析到A.js中默认的export default。
    
    //A.js
    export default 42
.

    export const A = 52
.

	//B.js,B.js引用A.js
	import A from './A'
	import MyA from './A'
	import Something from './A'

2.import使用花括号{}<br>

下面代码生效的前提是，只有在A.js中命名导出为A的export name 的代码

    //B.js
    import { A } from './A'   //正确，因为A.js中有命名为A的export
    import { myA } from './A'   //错误！因为A.js中没有命名为myA的export
    import { Something } from './A'  //错误！因为A.js中没有命名为Something的export

.开始第一个react应用

    //这部分在react17.x的版本适用
    // //引入react 核心模块
    // //从react的包当中引入了React，只要你要写React.js组件就必须引入React，
    // //因为react里有一种语法叫JSX,要写JSX就必须引入React
    // import React from "react";
    // //ReactDom 可以帮助我们把React组件渲染到页面上去，没有其他作用了。它
    // //是从react-dom中引入的
    // // import ReactDOM from "react-dom";
    
    //18.x版本更新页面渲染方式
    import React from "react";
    
    import ReactDOM from "react-dom/client";
    
    const container = document.getElementById('root');
    
    const root = ReactDOM.createRoot(container);
    
    //ReactDom里有一个render方法，功能就是把组件渲染并且构造DOM树，然后插入到页面上某个特定的元素上
    root.render(
    //这里比较奇怪了，它并不是一个字符串，看起来像是纯HTML代码写在JavaScript代码里面。
    //"在JavaScript写的标签的"语法叫JSX-JavaScript XML
    <div>
    <h1>欢迎使用react的世界</h1>
    <h2>文件</h2>
    </div>
    
    )

## 六、JSX语法与组件 ##
### 1.JSX语法 ###
JSX将html语法直接加入到JavaScript代码中，再通过翻译器转换到纯JavaScript后由游览器执行。在实际开发中，JSX在产品打包阶段都已经编译成纯JavaScript，编译过程由Babel的JSX编译器实现。

JSX原理<br>
JSX-使用react构造组件，bable进行编译->JavaScript对象->ReactDOM.render()->DOM元素->插入页面

### 2.class组件 ###
ES6的加入让JavaScript直接支持使用class来定义一个类，react创建组件的方式就是使用的类的继承，ES6 class是目前官方推荐的使用方式，它使用了ES6标准语法来构建

**react中创建组件**
组件-JS+HTML+CSS绑定到一个文件内，方便复用；

es6 类

    class Test {
    	constructor(){
    		this.a = 23;
    	}
    	testA(){
    		console.log(this.a)
    	}
    }
    
    class ChildTest extends Test{
    	testB(){
    		console.log(this.a)
    	}
    }
    
    var obj = new ChildTest();
    obj.testB();

### 3.React类组件 ###

定义组件 - return中保证最外层只有一个标签

    import React from "react";
    
    //只有继承React.Component才为定义一个组件，否则为定义一个类
    class WeiShanApp extends React.Component{
    
    render(){
    	return <div>    //js return 后面加回车 返回undefined
    	Hello React Component
    	<ul>
    		<li>1</li>
    		<li>2</li>
    	</ul>
    	</div> //为jsx语法
    }
    
    }
    
    export default WeiShanApp;

使用组件 - import的时候需要使用首字母大写，否则会当游览器默认标签

	import React from "react";
	
	import ReactDOM from "react-dom/client";
	
	import App from "./01-base/01-class组件"; //使用组件部分
	
	const container = document.getElementById('root');
	
	const root = ReactDOM.createRoot(container);
	
	root.render(
	    // React.createElement("div",{
	    //     id:"aaa",
	    //     className:"bbb"
	    // },"123")
	    
	    <App/>  //使用组件部分
	);

### 4.函数组件 ###

> 16.8之前无状态组件
> 
> 16.8之后 react hooks

定义组件

	function App(){
	    return(
	        <div>
	            function Component
	        </div>
	    )   
	}
	
	export default App;
	

使用与类组件相同

### 5.组件间嵌套 ###

**重要** - vscode安扩展可以用快捷键自动生成类组件必要代码
> 
> 组件名 - VS Code ES7 React/Redux/React-Native/JS snippets
> 
> 快捷键 - 输入rcc + 回车  =  生成类组件必要代码

. 组件嵌套

    import React, {Component} from 'react'
    
    class Navbar extends Component{
    	render(){
	    	return(
	    		<div>Navbar</div>
	    	)
    	}
    }
    
    function Swiper(){
	    return (
	    	<div>Swiper</div>
	    )
    }
    
    //es6 箭头函数 箭头函数后面为该函数返回值
    const Tabbar =()=><div>Tabbar</div>
    
    class App extends Component{
      render() {
	    return (
	      <div>
		    <Navbar></Navbar>
		    <Swiper></Swiper>
		    <Tabbar></Tabbar>
	      </div>
	    )
      }
    }
    
    export default App;

### 6.组件的样式 ###

react推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体

    import React, { Component } from 'react'
    import './css/01-index.css' //导入css模块  webpack的支持！
    
    export default class App extends Component {
      render() {
    	let myName = "WeiShan"
    	var obj = {
    		backgroundColor:"yellow", //单一属性去掉 - 驼峰写法
    		fontSize:"30px"
    	}
    	//jsx标签中 使用 {} 内判断为js
    	return (
      	<div>
    		{10+20}{myName} 
    		{10>20?"aaa":"bbb"} 
    
	    	<div style={obj}>
	    		1234
	    	</div>
	    
	    	<div style={{background:"red"}}>
	    		1234
	    	</div>
	    
	    	<div className="active">
	    		1234
	    	</div>
	    
	    	<div id="myapp">
	    		1234
	    	</div>
	    
	    	<label htmlFor="username">用户名</label>
	    	<input type="text" id="username" />
    
      	</div>
    	)
      }
    }

### 7.事件绑定 ###

> ①几种事件绑定的方法

    import React, { Component } from 'react'
    
    export default class App extends Component {
    
      render() {
    	return (
	      	<div>
	    		<input type="text" />
	    		{/* 方法一 如果处理逻辑过多，不推荐这种 */}
	    		<button onClick={()=>{
	    			console.log("click1");
	    		}}>add1</button>
	    
	    		{/* 方法二 */}
	    		<button onClick={this.handleClick2}>add2</button>
	    
	    		{/* 方法三 */}
	    		<button onClick={this.handleClick3}>add3</button>
	    
	    		{/* 方法四  比较推荐 */}
	    		<button onClick={()=>{
	    			this.handleClick4()
	    		}}>add4</button>
	      </div>
    	)
      }
    
      handleClick2 = ()=>{
    	  console.log("click2");
      }
    
      handleClick3(){
    	  console.log("click3");
      }
    
      handleClick4(){
    	  console.log("click4");
      }
    
    }

> ②几种事件绑定中this的指针域

**js中改变this指向**

    /**
      * 改变this指向的方法
      * 
      * call 改变了this指向，并自动执行函数
      * apply 改变了this指向，并自动执行函数
      * bind 改变了this指向，手动加 () 执行函数
      */
    var obj1 = {
	    name:"obj1",
	    getName(){
	    	console.log(this.name)
	    }
      }
    
    var obj2 = {
       name:"obj2",
       getName(){
       	console.log(this.name)
       }
    }
    
    obj1.getName.call(obj2) // 修改this指向 调用 call
    obj1.getName.apply(obj2) // 修改this指向 调用 apply
    obj1.getName.bind(obj2) // 修改this指向 不调用 bind
    obj1.getName.bind(obj2)() // 函数调用使用 () 执行函数
    obj2.getName()

**优化方法四说明this指针域**

	import React, { Component } from 'react'
	
	export default class App extends Component {
	
	    a = 100
	    
	  render() {
	    return (
	      <div>
	            <input type="text" />
	            {/* 方法一 可以调用 this.a 箭头函数里面 this与外面render指针域一样 */}
	            <button onClick={()=>{
	                console.log("click1",this.a);
	            }}>add1</button>
	
	            {/* 方法二 可以调用 this.a 箭头函数里面 this与外面render指针域一样*/}
	            <button onClick={this.handleClick2}>add2</button>
	
	            {/* 方法三 不可调用 this.a 被reatc事件系统调用，this指向react事件系统不是app实例*/}
	            <button onClick={this.handleClick3.bind(this)}>add3</button> {/* bind 可以绑定来修正 */}
	
	            {/* 方法四  比较推荐 传参的时候方便 */}
	            <button onClick={()=>this.handleClick4()}>add4</button>
	      </div>
	    )
	  }
	
	  handleClick2 = ()=>{
	        console.log("click2",this.a);
	  }
	
	  handleClick3(){
	        //这函数谁调用this指向谁
	        console.log("click3",this.a);
	  }
	
	  handleClick4(){
	    console.log("click4",this.a);
	  }
	
	}

> ③.事件绑定注意事项与面试

**--react事件绑定与普通事件绑定的区别**<br>
&nbsp;&nbsp;
react并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式；占用内存小；

点击按钮有捕获与冒泡的过程，react模拟：从事件源一直找到根节点，有对应事件就执行；

react把时间绑定到代理身上(根节点，移除根节点上事件绑定就失效)

     handleClick2 = (ref)=>{
    	console.log("click2",this.a,ref.target);
    	//输出为 click2 100 <button>add2</button>
      }

### 复习 ###

    import React,{Component} from "react";
    
    import "./css/01-index.css";
    
    /**
     * 练习三种组件 - 出错 注意首字母大写 
     * - 组件写行内样式时候，样式单独定义为object，使用{}给style引入样式变量
     */
    
    class Navigator extends Component{
    
	    render(){
	    	var styleNav = {backgroundColor:"red"}
	    
	    	return <div style={styleNav}>navigator</div>
	    }
	    
	}
	    
	function Content(){
	    return <div className="active">content</div>
	}
	    
	    
	var Bottom = () =>{
	    return (<div>bottom</div>)
	}
	    
	var Other = () => <div id="myapp">other</div>
	    
	class App extends Component{
	    
	    cha = 'this pointer'
	    
	    render(){
	    
		    var click1 = {
		    	userSelect:"none"
	    	}
	    
	    	return (<div>
	    
	    		<Navigator></Navigator>
	    		<Content></Content>
	    		<Bottom></Bottom>
	   			<Other></Other>
	    
			    {/* 事件绑定 */}
			    <label style={click1} htmlFor="click1">用户名</label>
			    
			    <button id="click1" onClick={()=>{console.log("click1",this.cha)}}>按钮1</button>
			    
			    <button onClick={this.click2.bind(this)}>按钮2</button>
			    
			    <button onClick={this.click3}>按钮3</button>
			    
			    <button onClick={()=>{this.click4()}}>按钮4</button>
	    
	    
	    	</div>)
	    }
	    
	    click2(){
	    	console.log("click2",this.cha)
	    }
	    
	    click3 = ()=>{
	    	console.log("click3",this.cha)
	    }
	    
	    click4 = () =>{
	    	console.log("click4",this.cha)
	    }
    
    }
    
    export default App

### 8.ref的应用 ###

ref 引用

> myref = React.createRef()
> 
> 可以绑定在标签或者组件上
> 
> ref={this.myref}
>
>通过下面方法访问到
> 
> this.myref.current


	import React, { Component } from 'react'
	
	export default class App extends Component {
	
	    a = 100
	
	    myref = React.createRef()
	    
	  render() {
	
	    return (
	      <div>
	            <input type="text" ref={this.myref} />
	            <button onClick={()=>this.handleClick()}>add</button>
	      </div>
	    )
	  }
	
	  handleClick(){
	    console.log("click",this.myref.current.value); //添加current属性才可以拿到dom
	  }
	
	}

## 七、组件的数据挂载方式 ##

### 1.状态 ###
