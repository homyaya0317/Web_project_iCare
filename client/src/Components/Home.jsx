import React from 'react'
import { Link } from 'react-router-dom'

import "./Home.css"


export default function Home() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <Link to={"/"} >
          <a className='active'>Home</a>
        </Link>
        <Link to={"/login"}>
          <a >Login</a>
        </Link>
        <Link to={"/signup"}>
          <a >Register</a>
        </Link>
        <a className="icon" onClick={() => 0}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div class="container-fluid bg-primary py-5 mb-5 hero-header">
        <div class="container py-5">
          <div class="row justify-content-start">
            <div class="col-lg-8 text-center text-lg-start">
              <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5" >Welcome To HealtSolution</h5>
              <h1 class="display-1 text-white mb-md-4">Best Healthcare Solution In Your City</h1>
              <div class="pt-2">
                <a href="" class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Doctor</a>
                <a href="" class="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}
