import React from 'react'
import "./login.module.css"
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function Login() {
	const [email, setemail] = useState("")
	const [userPassword, setuserPassword] = useState("")
	const route = useNavigate()
	let host = window.location.hostname;
	let protocol = window.location.protocol
	let url = null

	if (host === "localhost") {
		url = protocol + "//" + host + ":8000"
	} else {
		url = protocol + "//" + host
	}
	const handlerLogin = (e) => {
		e.preventDefault()
        axios.get(`${url}/User/credentials`, { headers: { 'Content-Type': 'application/json' } })
		 .then(res => {
			// console.log(res.data)
			validation(res.data)
		})
	}

	const dataHandler = (e,setter) => {
		console.log(e.target.value);
		setter(e.target.value)
	}
	
	const validation = (data) => {
		// console.log(data.adminName);
		// console.log({username: userName, userPassword: userPassword});
		
		for (let index = 0; index < data.length; index++) {
			//  console.log(data[index]);
			if (data[index].userEmail ==  email && data[index].userPassword ==  userPassword) {
				console.log(data[index]);
				localStorage.setItem("token", data[index].userId)
				route("/admin", {state: { 
					  data : data[index]
				}})
			}
		}
	}

		return (
			<div>
				<div className="container">
					<div className="screen">
						<div className="screen__content">
							<form className="login login_">
								<div className="login__field">
									<i className="login__icon fas fa-user"></i>
									<input type="text" className="login__input" placeholder="Email" onChange={(e) => dataHandler(e,setemail)} />
								</div>
								<div className="login__field">
									<i className="login__icon fas fa-lock"></i>
									<input type="password" className="login__input" placeholder="Password" onChange={(e) => dataHandler(e,setuserPassword)} />
								</div>
								<button className="button login__submit" onClick={(e) =>  handlerLogin(e)}>
									<span className="button__text" >Log In Now</span>
									<i className="button__icon fas fa  -chevron-right"></i>
								</button>
								<div className="">
									<Link to={"/signup"}>
										<span className="button__text">Rigester</span>
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
