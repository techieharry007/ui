import React from 'react'
import im from "./img/favicon.ico"
import p1 from "./img/pump1.webp"
import p2 from "./img/pump2.jpg"
import p3 from "./img/pump3.jpg"
import p4 from "./img/pump4.png"
import p5 from "./img/pump5.png"
import "./home.css"

import {useNavigate} from "react-router-dom"
export default function Home() {
    const navigate=useNavigate()
  return (
    <>
    {/* <div id="login" onClick={()=>navigate("/login")}>Login</div> */}
        <div className="container">
        <div className="carousel">
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
            <div className="image"><img id="mg" src={im}/></div>
        </div>
    </div>
       </>
       )
}
