import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (




        < FooterContainer className="main-footer "> 
       <div className= " footer-middle">

         <div className="container "> 
         <div className="row">  
         <div className="col-md-3 col-sm-6 ">
           
                    <h4>Information</h4>
                    <ul className="list-unstyle">
                    <li> About Us </li>
                    <li> Privacy Policy</li>
                    <li>Gallery images</li>
                    </ul>         
                   </div>

                  
        <div className="col-md-3 col-sm-6">
             <h4>Contact Us</h4>
            <ul className="list-unstyle">
            <li> Address </li>
            <li> Contact Number</li>
            <li>Location</li>
            </ul>
             </div>
        
             
        <div className="col-md-3 col-sm-6">
                <h4>Social Media</h4>

            <ul className="list-unstyle">
            <li> Facebook </li>
            <li> Instragram</li>
            <li>Twitter</li>
            </ul>
        </div>
        <div className="footer-bottom">
             <p className= "text-xs-center">
                &copy;{new Date().getFullYear()} City Guide App - All Rights
                 Reserved
            </p>

            
        </div>
        </div>
        </div>

        </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer =styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 1rem;
    color: var(--mainWhite);


            }

`;