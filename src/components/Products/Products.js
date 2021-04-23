import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/plastile.jpg'
const Products = () => {
    return (
        <div>
    <div className="header  py-2 sticky-top" style={{backgroundColor:"#483F3A"}}>
  <div className="d-md-flex px-10 pt-1 text-center  align-items-center">
    <img className="h-28 px-md-1" src={Logo} alt="Vaiio Naiga" />
  <p className="text-white d-none d-sm-block
  pt-0 pt-sm-1">A faithfully certified company
  </p>
  
  </div>


  <header class="text-gray-700 body-font py-md-2 px-5">
  <nav class="navbar navbar-expand-lg navbar-light  ">
  {/* <a class="navbar-brand" href="#">
      <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-9/117231889_3184136298301729_4114266108029891020_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=IBfJ56fdZSYAX_SvfEp&_nc_ht=scontent.fdac24-1.fna&oh=8f5e48e023dfa8fab8497664f0e0eb35&oe=5FE7D67F" alt="not loading" className="img-fluid " style={{width:'90px'}}/>
  </a> */}
  <button class="navbar-toggler  align-items-right justify-content-right text-right align-self-end   mt-3 justify-content-center align-items-center bg-light text-danger font-weight-bold" type="button" data-toggle="collapse" data-target="#navbarNav"  >
    <span class="navbar-toggler-icon text-light"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto  align-items-md-center">
      <li class="nav-item  active font-weight-bold py-2">
      <Link to="/Home"><a  class="mr-4 text-gray-50 hover:text-white">Home</a>
      </Link>       </li>
      <li class="nav-item  active font-weight-bold py-2">
      <Link to="/About"><a  class="mr-4 text-gray-200 hover:text-white">About Us</a></Link>  
</li>
      <li class="nav-item active font-weight-bold py-2">

      <Link to="/Products"><a href="" class="mr-4 text-gray-200 hover:text-white">Products</a>
      </Link>        </li>
      <li class="nav-item active font-weight-bold py-2">
      <Link to="/meadia">   <a  class="mr-4 text-gray-200 hover:text-white">Meadia Coverage</a></Link>
      </li>      <li class="nav-item active font-weight-bold py-2 ">
      <Link to="/Projects"><a  class="mr-4 text-gray-200 hover:text-white">Our Projects</a></Link> 

      </li>
      <li class="nav-item active font-weight-bold py-2">
      <Link to="/Clients"><a  class="mr-4 text-gray-200 hover:text-white">Our Clients</a></Link> 
</li>

<li class="nav-item active font-weight-bold py-2">
            <Link to="/Contactus"><a href="" class="mr-4 text-gray-200 hover:text-white">Contact US</a></Link> 
 
      </li>
      <li class="nav-item active  py-3   text-decoration-none">
      <Link to="/Enquirey">
      <button className="rounded-full py-2 px-3  font-weight-bold enwuirey " style={{textDecoration:"no-decoration"}}>Trade Enquirey</button>
         </Link>
      </li>
    </ul>
  </div>
</nav>
  </header>
  
  </div>
  
  
  


  
  


  <div className="py-5 px-md-5" style={{backgroundColor:"#FFEBDF"}}>
            <h1  className="text-center font-wight-light BrandHeaderr"  style={{color:"#444444"}}>Our Services</h1>
            <div className="row py-5">
  <div className="col-md-3 py-sm-3">
  <div class="card" width= "18rem">
    <img class="card-img-top p-2 h-48" src="https://www.shaynaecounified.com/images/powerblock6.jpg" alt="Card image cap"/>
    <div class="card-body text-center">
      <h4 class="card-title">HDTP Paver Tiles</h4>
      <p class="card-text">
      Interlocking tiles are extensively demanded for their wide spectrum of applications in offices, residences and other various commercial establishments.

</p>
      {/* <button href="#" class="enwuireyy p-2 border-sm font-weight-bold">Go somewhere</button> */}
    </div>
  </div>
  </div>
  <div className="col-md-3 py-sm-3" >
  <div class="card" width= "18rem">
    <img class="card-img-top p-2 h-48" src="https://www.shaynaecounified.com/images/floortiles.jpg" alt="Card image cap"/>
    <div class="card-body text-center">
      <h4 class="card-title">Wall and floor vector</h4>
      <p class="card-text">The wall and floor tiles crafted out of waste plastic bags come in 3 square sizes, 1ftx1ft, 13inches x13 inches and 1.5ft x1.5 ft. They are lightweight & compact, and comes with an interlocking feature.

</p>
      {/* <button href="#" class="enwuireyy p-2 border-md font-weight-bold">Go somewhere</button> */}
    </div>
  </div>
  
  
  
  </div><div className="col-md-3 py-sm-3">
  <div class="card" width= "18rem">
    <img class="card-img-top p-2 h-48" src="https://www.shaynaecounified.com/images/designertiles1.jpg" alt="Card image cap"/>
    <div class="card-body text-center">
      <h4 class="card-title">Designed HDTP tiles</h4>
      <p class="card-text">Our specially crafted designer HDCP tiles come in exclusive prints, patterns, colours and textures, which are enough to be a part of any interior design of the house.</p>
      {/* <button href="#" class="enwuireyy p-2 border-md font-weight-bold">Go somewhere</button> */}
    </div>
  </div>
  
  
  
  </div><div className="col-md-3 py-sm-3">
  <div class="card" width= "18rem">
    <img class="card-img-top p-2 h-48" src="https://www.shaynaecounified.com/images/valueadded1.jpg" alt="Card image cap"/>
    <div class="card-body text-center">
      <h4 class="card-title">Valueabe Stuffs</h4>
      <p class="card-text">
      Our Eecounified smart structures are fully customisable interns of dimensions and sizes. We currently offer waste bins made out of HDCP tile sad Smart Toilet structures made using HDCP tiles.

</p>
      {/* <button href="#" class="enwuireyy p-2 border-md font-weight-bold">Go somewhere</button> */}
    </div>
  </div>
  
  
  
  </div>    </div>
      
            </div>
  



            <footer class="text-gray-600 body-font  justify-center" style={{backgroundColor:"#483F3A"}}>
            <div></div>
    <div class=" text-gray-50 py-5 mx-auto flex   md:flex-row row md:flex-nowrap flex-wrap flex-col">
      <div class=" w-full px-5 col-md-3 d-flex d-none d-sm-block align-items-center justify-content-center ">
         
      <div class="d-none d-sm-block">
                       <iframe className=" justify-content-center text-sm-center " src="https://www.facebook.beshi/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshaynaecounified%2F&amp;tabs=timeline&amp;width=250&amp;height=280&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="250" height="280" style={{border:"none",overflow:"hidden", allow:"encrypted-media"}}></iframe>
            
                      </div>
      </div>
      {/* <div class=" "> */}
        <div class="md:text-center d-none d-sm-block text-center w-full px-4 col-md-3">
        <div class="col-md-3 md:text-center text-center d-sm-block col-sm-3 col-xs-12 hidden-xs">
                       <iframe src="https://www.facebook.beshi/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshaynaecounified%2F&amp;tabs=timeline&amp;width=250&amp;height=280&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="250" height="280" style={{border:"none",overflow:"hidden", allow:"encrypted-media"}}></iframe>
            
                      </div>
        </div>
        <div class=" py-3 w-full px-5 col-md-3 d-none d-sm-block">
          <h1 class="title-font font-weight-bold text-gray-50 font-weight-bold tracking-widest text-sm mb-3 " style={{fontSize:"20px"}} >More About Us</h1>
          <ul type="square " class=" mb-10 ">
            <li>
              <h6 class="text-gray-300 hover:text-gray-800 ">First Link</h6>
            </li>
            <li>
              <h6 class="text-gray-300 hover:text-gray-800 py-2">Second Link</h6>
            </li>
            <li>
              <h6 class="text-gray-300 hover:text-gray-800 ">Third Link</h6>
            </li>
            <li>
              <h6 class="text-gray-300 hover:text-gray-800 py-2">Fourth Link</h6>
            </li>
            <li>
              <h6 class="text-gray-300 hover:text-gray-800 ">Fourth Link</h6>
            </li><li>
              <h6 class="text-gray-300 hover:text-gray-800 py-2">Fourth Link</h6>
            </li><li>
              <h6 class="text-gray-300 hover:text-gray-800 ">Fourth Link</h6>
            </li>
          </ul>
        </div>
       <div class=" py-3 pt-5 w-full px-5 col-md-3 d-flex align-items-center justify-content-center">
         <div>
          <h1 class="title-font font-weight-bold text-gray-50 font-weight-bold tracking-widest text-sm " style={{fontSize:"20px"}} >Contact Us</h1>
          <ul type="square " class=" mb-10 ">
            <li>
              <h6 class="text-gray-300 hover:text-gray-800 ">	
  Plastile Pvt. Ltd. Bashundhara R/A ,G Block,Road1,house 70 1x,Dhaka 1200</h6>
            </li>
            <li>
              <h6 class="text-gray-300 hover:text-gray-800 py-1">info@plastile.com, mostakin_rabbi@yahoo.com</h6>
            </li>
            <li>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-center">
          <a class="text-gray-50">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
        </li>
        <div>
            <a href="images/Shayna_Ecounified_India_Pvt_Ltd_Brochure.pdf" download=""> <img src="https://i2.wp.com/www.gcit.edu.bt/wp-content/uploads/2019/06/download-brochure-icom.png?ssl=1" width="150"/></a>
            </div>
            </ul>
        </div>
        </div>      </div>
    {/* </div> */}
  
  
    <div class="text-gray-400" style={{backgroundColor:"#D9CA6D"}}>
      <div class="container mx-auto  px-5 text-center flex flex-wrap  align-self-center justify-content-center">
        <h5 class="text-gray-900 text-sm text-center ">Plastile Pvt. Ltd © All Rights Reserved | Design & Developed by:
          <a href="https://www.facebook.com/Skywalker2219/" rel="noopener noreferrer" class="text-gray-600 ml-1 text-center" target="_blank"> Shuvo Koiri
  
  @2021</a>
        </h5>
       
      </div>
    </div>
  </footer>  </div>
    );
};

export default Products;