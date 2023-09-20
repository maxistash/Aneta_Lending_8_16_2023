import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';   


function Footer() {
  
    return (
      <footer className="page-footer font-small blue pt-4">
        <div  className="header">
      <div className="container-fluid text-center text-md-left">
          <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Footer Content</h5>
                  
              </div>
  
              <hr className="clearfix w-100 d-md-none pb-0"/>
  
              <div className="col-md-3 mb-md-0 mb-3">
                 
                  <ul className="list-unstyled">
                      <li><a href="#!">Link 1</a></li>
                      
                  </ul>
              </div>
  
              <div className="col-md-3 mb-md-0 mb-3">
                 
                  <ul className="list-unstyled">
                      <li><a href="#!">Link 1</a></li>
                     
                  </ul>
              </div>
          </div>
      </div>
  
      <div className="footer-copyright text-center">© 2023 Copyright:
          <a> Aneta Landing</a>
      </div>
      <div className="text-center">
        <a>All Right Reserved</a>
      </div>
      </div>
  
  </footer>
        );
    }

export default Footer;

