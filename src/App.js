import { useState, createContext, useContext, useEffect } from "react";
import Home from "./cmp/home";
import Login from "./cmp/login";
import Dashboard from "./cmp/dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Purchaseform from './cmp/purchase/purchaseform'

export const Mycontext = createContext();
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (flag === false) navigate("/");
  }, []);

  const [user, setUser] = useState({ username: "harish", password: "123" });
  const [flag, setFlag] = useState(false);
  // let { username, password } = user;
  const validateUser = () => {
    fetch("http://localhost:8000/api/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        
        setFlag(res.ok)
        console.log(res.ok,"response ###########")
        
    
       
      })
      .catch((err) => {
        console.log(err, "some error found");
      });

   
      navigate('/dashboard')
    
  };

  return (
    <>
   
      <Mycontext.Provider value={{ flag: flag }}>
        <Routes>
    
          {/* <Route path="/" element={<Login validateUser={validateUser} />} /> */}
          <Route path="/" element={<Purchaseform/>} />
          {/* <Route
            path="/dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          /> */}
        </Routes>
      </Mycontext.Provider>
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

export const Auth = ({ children }) => {
  const context = useContext(Mycontext);
  console.log(context.flag,"###############context value")
  if (!context.flag) {
    <Navigate to={<Login />} />;
  }
  console.log(context.flag)
  return children;
};
export default App;
