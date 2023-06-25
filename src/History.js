import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./History.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



export const History = () => {

  return (
    <div className='container'>
      <div className='header' style={{ backgroundColor: "#1a3048", display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
          <img src="https://www.thediaryofanomad.com/wp-content/uploads/2021/04/mountain-quotes-mountain-captions-for-instagram-21.jpg" alt="oops!" style={{ borderRadius: "65%", width: "60px", height: "60px" }}></img>
          <Link id="titleLink" to="/"><h2 id="title">LosAngeles Mountains</h2></Link>
        </div>
        <div style={{ width: "50%", height: "100px", display: "flex", alignItems: "center", justifyContent:"center" }}>

          <Link className='link' to="/History" style={{
            marginLeft: "40px", color: "white", fontFamily: "'Urbanist', sans-serif",
            fontWeight: "bolder", marginRight: "50px"
          }} >01.History</Link>
          <Link className='link' to="/Team" style={{ marginLeft: "10px", color: "white", fontFamily: "'Urbanist', sans-serif", fontWeight: "bolder" }}>02.Team</Link>
        </div>
      </div>
      <div className='container2'>
        <div id="content">
          <h1 style={{ color: "white" }}>01.</h1><h1 style={{ fontSize: "70px" }}>HISTORY </h1>
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolorum dignissimos soluta in autem molestias ipsam temporibus. Commodi rem aperiam ipsam voluptas illo iusto, illum debitis perspiciatis odio, dolor qui.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolorum dignissimos soluta in autem molestias ipsam temporibus. Commodi rem aperiam ipsam voluptas illo iusto, illum debitis perspiciatis odio, dolor qui.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolorum dignissimos soluta in autem molestias ipsam temporibus. Commodi rem aperiam ipsam voluptas illo iusto, illum debitis perspiciatis odio, dolor qui.
          </h3>
        </div>

        <div className='gallery'>
          <Carousel responsive={responsive}

            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}

            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"

          >
            <div className='imgc'  >
              <img className='images' alt="oops!" src="https://media.cnn.com/api/v1/images/stellar/prod/220203135111-mount-everest-2020-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill"></img>
            </div>
            <div className='imgc'>
              <img className='images' alt="oops!" src='https://www.crystal-lodge.com/wp-content/uploads/2020/05/Peak2Peak2-MikeCrane.jpg'></img>
            </div>
            <div className='imgc'>
              <img className='images' alt="oops!" src='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/11/24/Pictures/_63c49884-2e5e-11eb-8f16-7e4c5fb0d4fd.jpg'></img>
            </div>
            <div className='imgc'>
              <img className='images' alt="oops!" src='https://www.crystal-lodge.com/wp-content/uploads/2020/05/Peak2Peak2-MikeCrane.jpg'></img>
            </div>
            <div className='imgc'>
              <img className='images' alt="oops!" src='https://www.crystal-lodge.com/wp-content/uploads/2020/05/Peak2Peak2-MikeCrane.jpg'></img>
            </div>
          </Carousel>
        </div>
      </div>
      <div id="content2" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "170px", backgroundColor: "#f4f7e3" }}>
        <h1 style={{ color: "#32495b" }}>02.</h1><h1 style={{ color: "#32495b", fontSize: "70px" }}>CLIMB </h1>
        <h3 style={{ color: "#32495b" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolorum dignissimos soluta in autem molestias ipsam temporibus. Commodi rem aperiam ipsam voluptas illo iusto, illum debitis perspiciatis odio, dolor qui.

        </h3>
      </div>

      <div className='container3'>
        <div className='bar' style={{ height: "38px", backgroundColor: "#1a3048", }}>
            <button></button>

        </div>

      </div>

      <div style={{ backgroundColor: "#1a3048", height: "80px", display:"flex", alignItems:"center" }}>
        <div style={{ marginLeft: "20px",width:"100%" ,display: "flex", alignItems: "center"}}>
          <img src="https://www.thediaryofanomad.com/wp-content/uploads/2021/04/mountain-quotes-mountain-captions-for-instagram-21.jpg" alt="oops!" style={{ borderRadius: "65%", width: "55px", height: "55px", marginTop: "10px", alignSelf: "center" }}></img>
          <Link id="titleLink" to="/"><h2 id="title" style={{ fontSize: "22px", marginTop: "10px" }}>LosAngeles Mountains</h2></Link>

        </div>
          <p style={{ color: "white", alignSelf: "flex-end", justifySelf: "flex-end" }}>COPYRIGHT 2016. ALL RIGHTS RESERERVED</p>
      </div>
    </div>

  )
        }