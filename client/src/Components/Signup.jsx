import React from 'react'
import { useState } from 'react';
import { Outlet,Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'



export default function Signup() {
  const [first, setfirst] = useState("")
  const [secondName, setsecondName] = useState("")
  const [location, setlocation] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [role, setrole] = useState("")
  const route = useNavigate()
   
  let host = window.location.hostname;
  let protocol = window.location.protocol
  let url = null

  if(host === "localhost"){
      url = protocol + "//" + host + ":8000"
    }else{
      url = protocol + "//" + host
    }
  
    const dataHandler = (e,setter) => {
     console.log(e.target.value);
     setter(e.target.value)
    }

  const submitHandler = (e) => {
     e.preventDefault()
    fetch(`${url}/user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "userFirstName": first,
          "userSecondName": secondName,
          "userEmail": email,
          "userPassword": password,
          "userLocation": location,
          "userRole":role,
          "userId": uuidv4(),
          
      })
    }).then(res => res.json())
    route("/login")
  }  

  return (
    <div>
      <div className="container">
        <div className="screen_1">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="First Name" onChange={(e) => dataHandler(e,setfirst)}/>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="Second Name" onChange={(e) => dataHandler(e,setsecondName)}/>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="Email" onChange={(e) => dataHandler(e,setemail)}/>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="Role" onChange={(e) => dataHandler(e,setrole)}/>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="Location" onChange={(e) => dataHandler(e,setlocation)} />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input type="password" className="login__input" placeholder="Password" onChange={(e) => dataHandler(e,setpassword)} />
              </div>
              <button className="button login__submit" onClick={(e) => submitHandler(e )}>
                <span className="button__text">Sign Up</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <div className="login_btn_alt">
                <Link to={"/login"}>
                  <span className="button__text">Login</span>
                </Link>
                <i className="button__icon fas fa-chevron-right"></i>
              </div>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
