import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/Firebaseconfig';
Link 
import { useState } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyAUfgZnBTDjGPFGiOa9a5urHfOzRwr9xgI",
  authDomain: "ecommerce-1e312.firebaseapp.com",
  projectId: "ecommerce-1e312",
  storageBucket: "ecommerce-1e312.firebasestorage.app",
  messagingSenderId: "736433314189",
  appId: "1:736433314189:web:27670f53a251dfbfd285c4",
  measurementId: "G-HDPLJX1RKK"
};

















function Login() {

     const [email, setEmail] = useState('');
      const [password, setPassword] = useState(''); 

    //   after the successfull login navigate the home page 
    
    const navigate=useNavigate()
    











      // const signin = async (e) => {
      //   e.preventDefault();
      //   if(email ==="" || password===""){
      //       return alert("Please fill all fields")
      //   }
     
      //   try {
      //  const user=  await signInWithEmailAndPassword(auth, email, password); 
        
      //  // add user detials in localstorage for user identfication   

      //  const users =localStorage.setItem('user',JSON.stringify(user))
      //     alert("SignUp Successful");
      //     setEmail("")
      //     setPassword('')
      //     navigate('/home')
      //   } catch (error) {
      //     console.error("Error signing up:", error);
      //   }
      // };




      const signin = async (e) => {
        e.preventDefault();
      
        // Check if email and password fields are empty
        if (email === "" || password === "") {
          alert("Please fill all fields");
          return;
        }
      
        try {
          // Firebase sign-in with email and password
          const user = await signInWithEmailAndPassword(auth,email,password);
          const users =localStorage.setItem('user',JSON.stringify(user))
      
          // Store user details in localStorage
          localStorage.setItem("user", JSON.stringify(user));
      
          alert("Login Successful");
          setEmail("");
          setPassword("");
      
          // Redirect to home page
          navigate("/");
      
        } catch (error) {
          console.error("Error signing in:", error);
      
          // Handle specific Firebase errors
          if (error.code === "auth/user-not-found") {
            alert("No user found with this email. Please sign up.");
          } else if (error.code === "auth/wrong-password") {
            alert("Incorrect password. Please try again.");
          } else if (error.code === "auth/invalid-email") {
            alert("Invalid email format.");
          } else {
            alert("Login failed. Please check your credentials and try again.");
          }
        }
      };
      

  return (
    <div>
         <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow" style={{ width: "350px" }}>
                    <h3 className="text-center mb-3">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Enter your email" required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter your password"


                                required
                            />
                        </div>
                        <button onClick={signin} type="submit" className="btn btn-success w-100">Login</button>

                           <h5 className='mt-3 text-center '>Have an account <Link to='/register'>Signup</Link> </h5>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login