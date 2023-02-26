import React, { useState } from "react";
import Logo from "../../Assets/logo.png"
import "./Login.scss"
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const SingUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((user) => {
      console.log(user)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
        <div className="Login_top">
            <div className="first_child">
                <img src={Logo} alt="" />
                <h3>Magedeal</h3>
            </div>

            <div className="second_child">
                <div>
                    <h3>Login/Singup</h3>
                    <p>Manage Orders I Access Wishlist I Unlock Offers</p>
                </div>
                <div>
                    <img src="https://n1.sdlcdn.com/imgs/h/0/k/coupon_icon-3ce40.png" alt="" />
                </div>
            </div>
        </div>


      <form className="container" onSubmit={SingUp}>
        <h1>Create a account</h1>
    
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
         SingUp
        </button>
      </form>
    </div>
  );
}

export default Signup;