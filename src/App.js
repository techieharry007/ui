import {useState} from "react"
import Home from "./cmp/home"
import Login from "./cmp/login"
import Dashboard from "./cmp/dashboard"
import {Routes,Route} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function App() {
  const navigate=useNavigate()
  const[user,setUser]=useState({username:"123",password:"123"})
  let {username,password}=user
const validateUser=()=>{
fetch("http://localhost:8000/api/login",{
  method:"POST",
  headers:{
    "Content-Type":"Application/json"
  },
  body:JSON.stringify(user)
}).then((res)=>{
  return res
}).then((res)=>{
  console.log(res)
})

  // if(user===username && pass===password)
  // {
  //     navigate('/dashboard')
  // }
  // else{
  //   navigate('/')
  // }

}
  
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Login validateUser={validateUser}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
      {/* <input placeholder="first name" value={fname} onChange={(e)=>{
        setUser({...user,fname:e.target.value})
      }}/>
      <input  placeholder="last name" value={lname} onChange={(e)=>{
         setUser({...user,lname:e.target.value})
      }}/>
      <button onClick={()=>callApi()}>Submit</button> */}

      

    </>
  );
}

export default App;
