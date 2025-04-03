// import React from 'react'
// import { useSelector } from 'react-redux'

// function Cart() {
//     const products=useSelector(state=>state.cart)
//   return (
//     <div>
// <h3>Cart</h3>
//        <div className='card'>
//         <div className='card-body'>

     
//             {
//                products.map(product=>(
//                 <div className='card'>
//                    <img src={product.image} alt="" className='card-img-top p-3'  style={{ height: '200px', objectFit: 'contain' }} />
//                    <h5>{product.title}</h5>
//                    <h5>{product.price}</h5>
//                    <button className='btn btn-danger'>Remove</button>
//                 </div>
//                ))
//             }
//        </div>
//        </div>
//     </div>
//   )
// }

// export default Cart


// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from '../store/CartSlice' // Import the remove action

// function Cart() {
//     const products = useSelector((state) => state.cart);
//     const dispatch = useDispatch();

//     return (
//         <div className="container mt-4 col-12">
//             <h3 className="text-center">🛒 Your Shopping Cart</h3>

//             {products.length === 0 ? (
//                 <div className="alert alert-info text-center mt-4">
//                     Your cart is empty! 🛍️
//                 </div>
//             ) : (
//                 <div className="row ">
//                     {products.map((product) => (
//                         <div key={product.id} className="col-md-6 col-lg-4 col-xl-3 mb-4">
//                             <div className="card h-100 shadow-sm">
//                                 <img
//                                     src={product.image}
//                                     alt={product.title}
//                                     className="card-img-top p-3"
//                                     style={{ height: "200px", objectFit: "contain" }}
//                                 />
//                                 <div className="card-body text-center">
//                                     <h6 className="card-title">{product.title}</h6>
//                                     <h5 className="text-primary">${product.price.toFixed(2)}</h5>
//                                     <button
//                                         className="btn btn-danger mt-2"
//                                         onClick={() => dispatch(remove(product.id))}
//                                     >
//                                         🗑️ Remove
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Cart;






// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// // import { remove } from "../redux/cartSlice"; // Import remove action
// import { remove } from '../store/CartSlice'

// function Cart() {
//     const products = useSelector((state) => state.cart);
//     const dispatch = useDispatch();

//     const handleRemove=(productsId)=>{
//         dispatch(remove(productsId))
//     }

//     return (
//         <div className="container mt-4">
//             <h3 className="text-center">🛒 Your Shopping Cart</h3>

//             {products.length === 0 ? (
//                 <div className="alert alert-info text-center mt-4">
//                     Your cart is empty! 🛍️
//                 </div>
//             ) : (
//                 <div className="row">
//                     {products.map((product) => (
//                         <div key={product.id} className="col-12 mb-3">
//                             <div className="card shadow-sm p-3">
//                                 <div className="row g-0 align-items-center">
//                                     {/* Product Image */}
//                                     <div className="col-md-2 text-center">
//                                         <img
//                                             src={product.image}
//                                             alt={product.title}
//                                             className="img-fluid rounded"
//                                             style={{ height: "80px", objectFit: "contain" }}
//                                         />
//                                     </div>

//                                     {/* Product Details */}
//                                     <div className="col-md-6">
//                                         <h5 className="mb-1">{product.title}</h5>
//                                         <h6 className="text-primary">${product.price.toFixed(2)}</h6>
//                                     </div>

//                                     {/* Quantity */}
//                                     <div className="col-md-2 text-center">
//                                         <span className="fw-bold">Qty: {product.quantity}</span>
//                                     </div>

//                                     {/* Remove Button */}
//                                     <div className="col-md-2 text-center">
//                                         <button
//                                             className="btn btn-danger btn-sm"
//                                             onClick={() => handleRemove(product.id)}
//                                         >
//                                             🗑️ Remove
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Cart;








import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity } from "../store/CartSlice";

function Cart() {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const handleIncrease = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecrease = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);
    const gstAmount = totalAmount * 0.18; // 18% GST
    const finalAmount = totalAmount + gstAmount;

    const handleCheckout = () => {
        const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
        checkoutModal.show();
    };

    const confirmOrder = () => {
        setOrderPlaced(true);
        setTimeout(() => {
            setOrderPlaced(false);
            const checkoutModal = bootstrap.Modal.getInstance(document.getElementById("checkoutModal"));
            checkoutModal.hide();
        }, 3000);
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center">🛒 Your Shopping Cart</h3>

            {products.length === 0 ? (
                <div className="alert alert-info text-center mt-4">
                    Your cart is empty! 🛍️
                </div>
            ) : (
                <>
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="col-12 mb-3">
                                <div className="card shadow-sm p-3">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-2 text-center">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="img-fluid rounded"
                                                style={{ height: "80px", objectFit: "contain" }}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <h5 className="mb-1">{product.title}</h5>
                                            <h6 className="text-primary">${product.price.toFixed(2)}</h6>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => handleDecrease(product.id)}
                                                disabled={product.quantity <= 1}
                                            >
                                                ➖
                                            </button>
                                            <span className="fw-bold mx-2">{product.quantity}</span>
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => handleIncrease(product.id)}
                                            >
                                                ➕
                                            </button>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleRemove(product.id)}
                                            >
                                                🗑️ Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="text-end mt-3">
                        <h4>Subtotal: <span className="text-success">${totalAmount.toFixed(2)}</span></h4>
                        <h5>GST (18%): <span className="text-danger">${gstAmount.toFixed(2)}</span></h5>
                        <h4>Total Payable: <span className="text-primary">${finalAmount.toFixed(2)}</span></h4>
                        <button className="btn btn-success mt-3" onClick={handleCheckout}>🛍️ Checkout</button>
                    </div>
                </>
            )}

            {/* Checkout Modal */}
            <div className="modal fade" id="checkoutModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Order Summary</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {orderPlaced ? (
                                <div className="text-center">
                                    <h4 className="text-success">🎉 Order Placed Successfully!</h4>
                                    <p>Your items will be delivered soon.</p>
                                </div>
                            ) : (
                                <>
                                    <h5>Order Details:</h5>
                                    <ul className="list-group">
                                        {products.map((product) => (
                                            <li key={product.id} className="list-group-item d-flex justify-content-between">
                                                <span>{product.title} (x{product.quantity})</span>
                                                <strong>${(product.price * product.quantity).toFixed(2)}</strong>
                                            </li>
                                        ))}
                                    </ul>
                                    <hr />
                                    <p>Subtotal: <strong>${totalAmount.toFixed(2)}</strong></p>
                                    <p>GST (18%): <strong>${gstAmount.toFixed(2)}</strong></p>
                                    <h5>Total: <strong className="text-primary">${finalAmount.toFixed(2)}</strong></h5>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            {!orderPlaced && (
                                <button className="btn btn-success" onClick={confirmOrder}>
                                    Confirm Order
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

