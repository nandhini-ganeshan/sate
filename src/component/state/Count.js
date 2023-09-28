import React, { useState } from 'react'

export default function Count() {
//   let[count,setCount]  =useState(0);
// let [color,setColor]=useState('blue')
const [userinfo,setUserinfo]=useState({
   username:"",
   email:"",
   password:"", 
});

function onChangeHandler(e){
  // console.log(e.target.name)
  // console.log(userinfo);
  const name=e.target.name;
  setUserinfo({...userinfo,[name]:e.target.value})
// switch (e.target.type) {
//   case "text":
//     setUserinfo({...userinfo,username:e.target.value})
//     break;

//     case "password":
//       setUserinfo({...userinfo,password:e.target.value})
//       break;

//       case "email":
//         setUserinfo({...userinfo,email:e.target.value})
//         break;

//   default:
//     break;
// }
}

function onSubmit(){
console.log(userinfo)
}

  return (
<div>

    {/* <div className='simple addtion'>
        <button onClick={()=>{
setCount(count++)
        }}>+</button>

        <h1>{count}</h1>

        <button onClick={()=>{
setCount(count--)
        }}>-</button>
    </div> */}


{/* <div class="color-change">
     <input type="text" onChange={(e)=>{
setColor(e.target.value)
     }}/>
    <div style={{height:100,width:100,background:color}}></div>

    </div> */}



<div className="user-details">
    <input type="text" placeholder='name' name="username" value={userinfo.username} onChange={onChangeHandler} />
    <input type="email" placeholder='email' name='email'  value={userinfo.email} onChange={onChangeHandler}  />
    <input type="password" placeholder='password' name="password" value={userinfo.password} onChange={onChangeHandler}  />
    <button onClick={onSubmit}>submit</button>
</div>


    </div>
  )
}
