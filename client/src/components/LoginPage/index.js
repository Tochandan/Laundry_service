import LoginHeader from "../Header";
import LoginFooter from "../Footer";
import { setToken } from "../utils/authOperations"
import './index.css';
import {Link} from "react-router-dom";
import { useState } from "react";


function HomePage(){

   const login = async (e) => {
    try {
        e.preventDefault();
        const response = await fetch("/signin", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        });
            const { token} = await response.json();
            setToken(token);
            window.location.href = "/orders";
    } catch(e) {
        alert("Login Failed Try Again with valid credentials");
    }
}
    
    return(
        <div>
            <LoginHeader/>
            <div className="signin-1">
                <div className="signin-left">
                    <div className="left-one">
                        <h1 className="left-h1">Laundry</h1>
                        <h1 className="left-h1">Service</h1>
                        <h3 className="left-h3">Doorstep Wash & Dryclean Service</h3>
                        <h3 className="left-h2">Don't Have An Account</h3>
                        <div className="registerbuttonn">
                            <Link to="/register"><button type="button" className="registerbuttonn_button">Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className="signin-right">
                    <h1>SIGN IN</h1>
                    <form className="form-main" onSubmit={(e)=>{login(e)}}>
                        <div className="form-group">
                            <input name="email" type="text" className="reg-email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile / Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="reg-email" name="password" placeholder="Password" />
                        </div>
                        <div>
                            <p className="pass">Forget Password ?</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
            <LoginFooter/>
        </div>
    );
}

export default HomePage;