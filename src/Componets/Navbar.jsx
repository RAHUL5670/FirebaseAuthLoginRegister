// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// Link
// function Navbar() {
 
//     // if user login then view logout on navbar  
//     // get user from localstorage 
//     const user =JSON.parse(localStorage.getItem('user'))
//     console.log(user)

//     // this funtion subscribe the cart funtionality to cart in navbar 

//     const items=useSelector((state)=>state.cart)

//     // create funtion to logout from the localstorage 

//       const navigate=useNavigate()

//     const logout = () =>{
//         localStorage.clear('user')
//         navigate('/login')
//     }

//     return (
//         <div className='container-fluid'>



//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#"> <span>Redux Store</span></a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//                              {/* Show these links only if the user is logged in */}

                    

//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/login">Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/register">SignUp</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/cart">Cart</Link>
//                             </li>

//                         </ul>
//                         <form className="d-flex">
//                             <span className='cartCount'>
//                                 Cart items:{items.length}
//                             </span>
//                               {user && <li onClick={logout} className="cursor-pointer">Logout</li>}
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar











import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    // Get user from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Subscribe to cart functionality for showing cart items in navbar
    const items = useSelector((state) => state.cart);

    // Function to logout the user
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user'); // Clear only user data
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <span>Redux Store</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Show these links only if the user is logged in */}
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/cart">Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link cursor-pointer" onClick={logout}>Logout</span>
                                    </li>
                                </>
                            ) : (
                                <>
                                    {/* Show only login and signup links if user is not logged in */}
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/register">SignUp</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        {user && (
                            <form className="d-flex">
                                <span className='cartCount'>Cart items: {items.length}</span>
                            </form>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
