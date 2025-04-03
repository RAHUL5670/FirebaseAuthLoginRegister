import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/CartSlice'
// import { fetchProducts } from '../store/ProductSlice'
function Products() {

    // const {data,status}=useSelector((state)=>state.product)

    const [products, setProducts] = useState([])

    // this dispatch funtion add product in store cart  

    const dispatch=useDispatch();

    // when componet load fetch products here 

    useEffect(() => {

        // second way  

        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')

            const data = await res.json()

            console.log(data)

            setProducts(data)
        }
        fetchProducts()

    }, [])

    // in this function add to cart funtion and store in store cart 

     const handleAdd=(product)=>{
            dispatch(add(product))
     }
    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{product.title}</h6>
                                <h5 className="text-primary">${product.price}</h5>
                                <button className="btn btn-primary mt-auto" onClick={()=>handleAdd(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Products 


