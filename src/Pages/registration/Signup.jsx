// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// Link 
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// function Signup() {

//     // store input data in hook 
    
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     // to get all data make one funtion 

//     const signup =async(e)=>{
//         e.preventDefault()
//        try{

//         const user =await createUserWithEmailAndPassword('EcommerceAuth',email,password);
//         alert("SignUp Successfull")
//        }catch(error){
//         console.log(error)
//        }
//     }


//     return (
//         <div>
//             <div className="container d-flex justify-content-center align-items-center vh-100">
//                 <div className="card p-4 shadow" style={{ width: "350px" }}>
//                     <h3 className="text-center mb-3">Signup</h3>
//                     <form>
//                         <div className="mb-3">
//                             <label className="form-label">Email</label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 placeholder="Enter your email" value={email}  onChange={(e)=>setEmail(e.target.value)} required 
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Password</label>
//                             <input
//                                 type="current-password"
//                                 className="form-control"
//                                 placeholder="Enter your password"
//                                 value={password}  onChange={(e)=>setPassword(e.target.value)}

//                                 required
//                             />
//                         </div>
//                         <button type="submit" onClick={signup} className="btn btn-primary w-100" > Signup</button>
//                         <h5 className='mt-3 text-center '>Dont have an account <Link to='/login'>Login</Link> </h5>
                       
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup





























import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUfgZnBTDjGPFGiOa9a5urHfOzRwr9xgI",
  authDomain: "ecommerce-1e312.firebaseapp.com",
  projectId: "ecommerce-1e312",
  storageBucket: "ecommerce-1e312.firebasestorage.app",
  messagingSenderId: "736433314189",
  appId: "1:736433314189:web:27670f53a251dfbfd285c4",
  measurementId: "G-HDPLJX1RKK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    if(email ==="" || password===""){
        return alert("Please fill all fields")
    }
    e.preventDefault();
    try {
   const user=   await createUserWithEmailAndPassword(auth, email, password);
      alert("SignUp Successful");
      setEmail("")
      setPassword('')
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Signup</h3>
        <form onSubmit={signup}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Signup</button>
          <h5 className='mt-3 text-center'>Already have an account? <Link to='/login'>Login</Link></h5>
        </form>
      </div>
    </div>
  );
};

export default Signup;
