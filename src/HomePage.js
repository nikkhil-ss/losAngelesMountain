import React from 'react'
import { Link } from 'react-router-dom'
import "./HomePage.css";
// import { History } from './History';
const HomePage = () => {
  return (
    <div className='HomePage' style={{ backgroundImage: 'url("https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg")', backgroundRepeat: "no-repeat", backgroundSize: "100%", height: "100vh" }}>
      
        <div className='header'  >
          <div style={{width:"50%", height:"100px", display:"flex", alignItems:"center"}}>

          <Link className='link' to="/History" style={{ marginLeft:"40%", color: "white",fontFamily: "'Urbanist', sans-serif",
 fontWeight: "bolder", marginRight: "50px" }} >01.History</Link>
          <Link className='link' to="/Team" style={{ marginLeft:"10px",  color: "white", fontFamily:"'Urbanist', sans-serif" , fontWeight: "bolder" }}>02.Team</Link>
        </div>
 </div>

        <div  style={{display:"flex",justifyContent:"center", marginTop:"10px"}}>
          <h1 id='title' style={{fontSize:"100px",maxWidth:"550px", fontFamily: "'Belanosima', sans-serif"}}>
          
            LosAngeles
             Mountains
          </h1>
          
        </div>

        
    </div>
  )
}

export default HomePage