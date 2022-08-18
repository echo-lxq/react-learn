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
    node_modules -- 所有的依赖安装的目录
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

## 1.状态 ##
状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)

### 1.初识状态 ###

> 定义为全局对象，名字固定位state
> 
> 使用this.state调用

	import React, { Component } from 'react'
	
	export default class App extends Component {
	
	    //变量名字固定
	    state = {
	        myText:"收藏", //未用
	        myShow:true
	    }
	
	  render() {
	    return (
	      <div>
	        <h1>React开发</h1>
	        <button onClick={()=>{
	            this.setState(
	                {
	                    myShow:!this.state.myShow
	                }
	            )
	            
	            if(this.state.myShow){
	                console.log("执行收藏的逻辑")
	            }else{
	                console.log("取消收藏的逻辑")
	            }
	
	        }}>{this.state.myShow?'收藏':"取消收藏"}</button>
	      </div>
	    )
	  }
	}

**另外：**

可以在构造函数中定义状态，但是注意继承构造函数中应有super()*

	//第二种定义状态的方法
    constructor(){

      super()

      this.state = {
        myShow:true
      }

    }

ES6中的派生类，就是extend的class。派生出的构造函数不会创造新的this对象(或者说this指向的对象(这里可以回顾一下new关键字做的事情)，就是所说的"子类没有自己的this"。只有通过super()把基类创建好的this对象接下来，派生类才能像基类一样使用this来生成对象的属性。

JavaScript 强制要求在 constructor 中使用 this 之前，必须先调用 super（继承）。

**且**

可以一下修改**多个**状态值


      this.state = {
        myShow:true,
        myText:"未命名",
		myName:"微山"
      }


      this.setState(
	      {
	         myShow:!this.state.myShow,
	         myText:"已命名"
	      }
      )

### 2.循环渲染 ###

**JS中${}使用!!**

et age = prompt('How old are you',100);

alert('You are ${age} years old') //You are 100 years old!

**JS中map()方法！！**

map定义和方法 map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值。

map()方法按照原始数组元素顺序依次处理元素。

    map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
    var array1 = [1,4,9,16];
    const map1 = array1.map(x => x *2);
    console.log(map1);

**--循环渲染部分--**

	import React, { Component } from 'react'

	export default class App extends Component {
	
	    state = {
	        list:[
	          {id:1,text:"1"},{id:2,text:"2"},{id:3,text:"3"}
	        ]
	    }
	
	  render() {
	
	    var newList = this.state.list.map(item=><li key={item.id}>{item.text}</li>)
	
	    return (
	      <div>
	        <ul>
	            {/* 第一种 */}
	            {/* {this.state.list.map(item=><li>{item}</li>)} */}
	
	            {/* 第二种 */}
	            {newList}
	        </ul>
	      </div>
	    )
	  }
	}

### 3.key值 ###

> 为了列表的复用和重排，设置key值，提高性能
> 
> 理想key值是 item.id
>
>不涉及到列表的增加删除，重排，设置成索引没有问题
>
>key值为每个元素的唯一标识

循环渲染不适用key，虚拟dom发生变化时候，会比较新的虚拟dom与原来的比较(diff)，例如删除原来中的一个，需要对比前后虚拟dom来确定哪个发生变化而重新渲染，加上key可以快速定位到哪个被改变；

![](./src/images/dom_diff.png)

> 状态使用key值

	state = {
        list:[
          {id:1,text:"1"},{id:2,text:"2"},{id:3,text:"3"}
        ]
    }
	var newList = this.state.list.map(item=><li key={item.id}>{item.text}</li>)

> map可以传递两个参数

	var newList = this.state.list.map((item,index)=><li key={index}>{item.text}</li>)

### 4.todolist ###

> 涉及深拷贝浅拷贝
> 
> react不建议直接修改状态-可能造成不可预期的错误

	import React, { Component } from 'react'
	
	export default class App extends Component {
	    myRef = React.createRef()
	
	    constructor(){
	        super()
	        this.state = {
	            state: true,
	            list:[
	                {id:1,text:"111"},
	                {id:2,text:"222"},
	                {id:3,text:"333"}
	            ],
	        }
	    }
	
	    render() {
	        
	        return (
	            <div>
	                <input type="text" ref={this.myRef} />
	                <button onClick={()=>{
	                    this.myRefClick();
	                }}>添加</button>
	
	                <ul>
	                    {this.state.list.map(item=><li key={item.id}>{item.text}</li>)}
	                </ul>
	
	                <button onClick={()=>{this.setState({state:!this.state.state})}}>
	                    {this.state.state?"收藏":"取消收藏"}
	                </button>
	
	            </div>
	        )
	    }
	
	    myRefClick = ()=>{
	        console.log("点击",this.myRef.current.value)
	
	        //不推荐 更新数组 不要直接修改状态 - 可能造成不可预期的状态
	        // this.state.list.push({
	        //     id:this.myRef.current.value,
	        //     text:this.myRef.current.value
	        // })
	
	        //js处理复杂数据类型赋值方式为引用赋值(多一把钥匙) 
	        //不推荐  ！！注意 此下为引用赋值 也属于上面那种直接修改的
	        // let newList = this.state.list
	        // newList.push(this.myRef.current.value)
	
	        //深复制(深拷贝) slice()方法、[...arr]方法
	
	        let newList_ = [...this.state.list]
	        newList_.push({
	            id:Math.random()*100, //生成不同id的函数
	            text:this.myRef.current.value
	        })
	
	        //重新渲染
	        this.setState(
	            {
	                list:newList_
	            }
	        )
	
	    }
	
	}
<br>
> todolist删除部分

方法一：通过map方法循环渲染的时候可以通过**(item,index)**=>想要映射的内容中index值
通过**函数参数传递**的方法获取到是删除了哪个节点

	<ul>
		{this.state.list.map((item,index)=>
        	<li key={item.id}>
            	{item.text}
            	<button onClick={()=>{
                	this.handleDelClick(index);
                }}>删除</button>
            </li>)}
     </ul>

	handleDelClick = (index) => {
        console.log("点击删除",index)
    }

方法二：**bind(this,"111")**后中"111"也可以进行参数传递

	<button onClick={
    	this.handleDelClick.bind(this,index);
    }>删除</button>


### 执行删除方法 ###

 	handleDelClick = (index) => {

        console.log("点击删除",index)

        //不要直接修改原状态，造成不可预期问题

        let newList = this.state.list.slice(); //slice

        newList.splice(index,1); //splice

        console.log(newList)

        this.setState(
            {
                list:newList
            }
        )

    }

### 条件渲染部分 ###

	{/* 条件渲染部分 */}
    {/* 方案一 */}
    {this.state.list.length === 0 ?<div>条件渲染一</div>:null}

    {/* 方案二 利用 && 前面为真后面才有机会执行 */}
    {this.state.list.length ===0 && <div>条件渲染二</div>}

    {/* 方案三 已经创建好 动态控制class来控制显示与隐藏 */}
    <div className={this.state.list.length ===0?'':'hidden'}>条件渲染三</div>

### 5.dangerouslySetInnerHTML ###

	import React, { Component } from 'react'
	
	export default class App extends Component {
	
	    constructor(){
	        super()
	        this.state = {
	            myhtml:"<div><b>解析</b><br/><h1>标签</h1></div>"
	        }
	    }
	
	  render() {
	    return (
	      <div>
	        
	        {/* 可以用到那时很危险，足够信任代码片段，后端返回接口数据 */}
	
	        <div dangerouslySetInnerHTML={
	            {
	                __html:this.state.myhtml
	            }
	        }>
	
	        </div>
	
	      </div>
	    )
	  }
	}


### 6.数据请求 - axios ###

> 安装 axios
    
    npm i axios

> 数据请求部分代码

	import React, { Component } from 'react'

	import axios from 'axios';
	
	export default class Cinema extends Component {
	
	    // 请求数据部分，暂时放到构造函数里面  后面的生命周期函数更适合发送ajax
	    constructor(){
	        super()
	        //axios 第三方的库，专门用于请求数据 axios封装给予es6的promise
	        // axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})
	
	        //简写方式
	        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159").then(res=>{
	        //   console.log(res)
	        // }).catch(err=>{
	        //   console.log(err)
	        // })
	      axios({
	        url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
	        method:"get",
	        headers:{
	          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660142019135536282959873","bc":"110100"}',
	          'X-Host': 'mall.film-ticket.cinema.list'
	        }
	      }).then(res=>{
	        console.log(res.data.data.cinemas)
	      })
	      console.log("qwe")
	
	
	
	    }
	
	
	  render() {
	    return (
	      <div>Cinema</div>
	    )
	    
	  }
	}

### ！！！严格模式下 -- <React.StrictMode><App/></React.StrictMode> StrticMode默认会执行两次render，来检测你的render函数有没有副作用。 ###


### 7.setState同步异步 ###
> setState()更新状态的2种写法

1). **setState(updater, [callback])**,<br>
   updater为返回stateChange对象的函数: (state, props) => stateChange<br>
   接收的state和props被保证为最新的

2). **setState(stateChange, [callback])**<br>
    stateChange为对象,<br>
    callback是可选的回调函数, 在状态更新且界面更新后才执行

**总结**
    
对象方式是函数方式的简写方式<br>
如果需要在setState()后获取最新的状态数据, 在第二个callback函数中读取


> 连续多次调用setState页面怎么执行

**①setState()更新状态是异步还是同步的?**

1). 执行setState()的位置?

  -  在react控制的回调函数中: 生命周期勾子 / react事件监听回调  => 异步
-    非react控制的异步回调函数中: 定时器回调 / 原生事件监听回调 / promise回调 /... => 同步

**②.关于异步的setState()**

1. 多次调用, 如何处理?<br>
setState({}): 合并更新一次状态, 只调用一次render()更新界面 ---状态更新和界面更新都合并了<br>
setState(fn): 更新多次状态, 但只调用一次render()更新界面  ---状态更新没有合并, 但界面更新合并了

1. 如何得到异步更新后的状态数据?<br>
在setState()的callback回调函数中

2. 为什么在react相关调用中是异步，其它是同步？<br>
在react中用到了【事务】，它存在就是异步，而react之外未用到【事务】所以就是同步。

### react18版本之后的变化 ###

> React18新特性：Automatic batching 自动批处理

- 什么是批处理(batchedUpdates)：React会尝试将同一上下文中触发的更新合并为一个更新

> 关于批处理部分内容

**批处理的好处**

合并不必要的更新，减少更新流程调用次数<br>
状态按顺序保存下来，更新时不会出现「竞争问题」<br>
最终触发的更新是异步流程，减少浏览器掉帧可能性

**批处理的几种类型**

v18的「批处理」是自动的<br>
v18之前的 React 使用半自动的「批处理」.<br>
React同时提供了一个API 手动 「批处理」unstable_batchedupdates .

- 关于手动批处理
	onClick() {
	  setTimeout(() => {
	    ReactDOM.unstable_batchedUpdates(() => {
	      this.setState({a: 3});
	      this.setState({a: 4});
	    })
	  })
	}

> v18的自动批处理

**实现：**<br>
增加调度的流程<br>
不以全局变量executionContext为批处理依据，而是以更新的「优先级」为依据

**什么是优先级?**

调用this.setState后源码内部会依次执行：

1. 根据当前环境选择一个「优先级」lane
1. 创造一个代表本次更新的update对象，赋予他步骤1的优先级
1. 将update挂载在当前组件对应fiber（虚拟DOM）上
1. 进入调度流程

<i>每次调用this.setState会产生update对象，根据调用的场景他会拥有不同的lane（优先级）</i>

**调度流程**

在组件对应fiber挂载update后，就会进入「调度流程」。<br>
试想，一个大型应用，在某一时刻，应用的不同组件都触发了更新。<br>
那么在不同组件对应的fiber中会存在不同优先级的update。选出这些update中优先级最高的那个，以该优先级进入更新流程。<br>

-整个过程**:**

1. 获取当前所有优先级中最高的优先级
1. 将步骤1的优先级作为本次调度的优先级
1. 看是否已经存在一个调度
1. 如果已经存在调度，且和当前要调度的优先级一致，则return
1. 不一致的话就进入调度流程

**自动批处理流程**

	onClick() {
	  this.setState({a: 3});
	  this.setState({a: 4});
	  this.setState({a: 5});
	  this.setState({a: 6});
	}

只有第一次调用会执行调度，后面几次执行由于优先级和第一次一致会return。

当一定时间过后，第一次调度的回调函数performConcurrentWorkOnRoot会执行，进入更新流程。

由于每次执行this.setState都会创建update并挂载在fiber上。

<a style="color:blue;">所以即使只执行一次更新流程，还是能将状态更新到最新。</a>

调度的最终目的是在一定时间后执行performConcurrentWorkOnRoot，正式进入更新流程。

### 8.BetterScroll ###
BetterScroll是一款重点解决移动端(已支持PC)各种滚动场景需求的插件，使用纯JavaScript实现的，这意味着它是无依赖的。

> 使用条件 父盒子高度一定 子盒子被撑开 overflow：hidden
> 
> 需要注意再react中使用需要dom渲染完成之后再new

	import React, { Component } from 'react'
	
	import BetterScroll from 'better-scroll'
	
	export default class App extends Component {
	  state = {
	    list:[]
	  }
	  render() {
	    return (
	      <div>
	        <button onClick={()=>{this.getData()}}>click</button>
	        <div className="wrapper" style={{height:'200px',border:'1px solid red',overflow:'hidden'}}>
	            <ul className="content">
	                {this.state.list.map(item=><li key={item}>{item}</li>)}
	            </ul>
	        </div>
	      </div>
	    )
	  }
	  //点击按钮赋值
	  getData(){
	    var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	    this.setState({
	        list:list
	    },()=>{
	        //放在setState回调函数中，等dom渲染完成之后再调用
	        new BetterScroll(".wrapper")
	    })
	
	  }
	}

## 2.属性(props) ##
### 1.初识属性 ###




















# 学成之后关于vite #
