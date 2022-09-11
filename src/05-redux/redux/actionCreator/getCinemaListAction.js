import axios from "axios"

// function getCinemaListAction(){

//     // return (dispatch)=>{
//     //     axios({
//     //         url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
//     //         method:"get",
//     //         headers:{
//     //           'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660142019135536282959873","bc":"110100"}',
//     //           'X-Host': 'mall.film-ticket.cinema.list'
//     //         }
//     //       }).then(res=>{
//     //         // console.log(res.data.data.cinemas)
//     //         dispatch({
//     //             type:"change-list",
//     //             payload:res.data.data.cinemas
//     //         })
//     //       }).catch(err=>{
//     //         console.log(err);
//     //       })
//     // }
//     // return (dispatch)=>{
      
//     //return 一个promise对象
//       return axios({
//           url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
//           method:"get",
//           headers:{
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660142019135536282959873","bc":"110100"}',
//             'X-Host': 'mall.film-ticket.cinema.list'
//           }
//         }).then(res=>{
//           // console.log(res.data.data.cinemas)
//           return({
//               type:"change-list",
//               payload:res.data.data.cinemas
//           })
//         }).catch(err=>{
//           console.log(err);
//         })
//   // }
// }

//es7写法 异步写法
async function getCinemaListAction(){
    var list = await axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
        method:"get",
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660142019135536282959873","bc":"110100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res=>{
        // console.log(res.data.data.cinemas)
        return({
            type:"change-list",
            payload:res.data.data.cinemas
        })
      }).catch(err=>{
        console.log(err);
      })
    return list
// }
}


export default getCinemaListAction