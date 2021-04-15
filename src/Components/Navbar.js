import React from 'react'
import logo from '../logo.svg';

function Navbar() {
    return (
      
     
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          
          <a className="navbar-brand ml-5 text-white 3rem" href="#">
            <img src="logo.png" alt="logo " style= {{height:90}}/>
            
              </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active text-white ml-5" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active text-white ml-5" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active text-white ml-5 " aria-current="page" href="#">Services</a>
              </li>
              
           
            </ul>
           
            
          </div>
        </div> 
        


      </nav> 



    )
}
export default Navbar;
