import React from 'react'
import homeimage1 from '../images/istockphoto-1546442230-612x612.webp'
import homeimage2 from '../images/istockphoto-1217805751-612x612.jpg'
import homeimage3 from '../images/istockphoto-597245404-612x612.webp'



const Homepage = () => {
  return (
     <div calssname="container w-100 mt-4 p-1" >
      <div id="carouselExampleFade" className="carousel slide carousel-fade  mt-2 p-4 ">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={homeimage1} className="d-block w-100" alt="..."  style={{height:"600px"}} />
      </div>
      <div className="carousel-item">
        <img src={homeimage2} className="d-block w-100" alt="..."  style={{height:"600px"}} />
      </div>
      <div className="carousel-item">
        <img src={homeimage3} className="d-block w-100" alt="..." style={{height:"600px"}} />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
     </div>
  )
}

export default Homepage
