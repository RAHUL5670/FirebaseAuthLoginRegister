import React from 'react'
import Products from '../Componets/Products'

function Home() {
  return (
    <div>
        <h2 className='fs-1 text-center mt-5'>Welcome to the Redux toolkit store</h2>

        <section>
            <h3 className='fs-1 text-center mt-3 text-success'>Products</h3>
            <Products></Products>
        </section>
    </div>
  )
}

export default Home