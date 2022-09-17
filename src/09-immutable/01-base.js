import React, { useEffect } from 'react'

//引用复制,浅复制
var obj = {
    name:"WweiShan"
}
var obj2 = obj
obj2.name = "WeiShanCopy"
console.log(obj,obj2)

//比深复制多复制了一层，不是严格意义的深复制
var myobj = {
    name:"WeiShan",
    arr:[1,2,3]
}
var myobj2 = {...myobj} //slice等方法
myobj2.name = "WeiShanCoppy"
myobj2.arr.splice(1,1)
console.log(myobj,myobj2)

//json-parse json-stringify -深复制- 致命缺点，对象中不能有undefine(会删掉)
var jsonobj = {
    name:"WeiShan",
    arr:[1,2,3]
}
var jsonobj2 = JSON.parse(JSON.stringify(jsonobj))
jsonobj2.name = "WeiShanCoppy"
jsonobj2.arr.splice(1,1)
console.log(jsonobj,jsonobj2)

//deepcopy 递归深复制 - 一层一层复制，性能不好，占用内存




export default function App() {
    useEffect(()=>{
        
    },[])
    
  return (
    <div>1</div>
  )
} 
