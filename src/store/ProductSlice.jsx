// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


// // on the loading of content show the status 

//  const STATUSES=Object.freeze({
//     IDLE:'idle',
//     ERROR:"error",
//     LOADING:'loading',
//  })

// const ProductSlice=createSlice({
//    name:'product',
//    initialState:{
//        data:[],
//        status:STATUSES.IDLE
//    },

//    reducers:{
//       setProducts(state,action){
//         state.data=(action.payload)
//       },
      
//    },
// })

// export const {add,remove}= ProductSlice.actions
// export default ProductSlice.reducer



// export const fetchProducts=createAsyncThunk('product/fetch',async()=>{
//     const res =await fetch('https://fakestoreapi.com/product')

//     const data =await res.json()
// })







//  export function fetchProducts(){
//       return async function fetchProductThunk(disapatch,getState){
//           disapatch(setStatus(STATUSES,LOADING))

//           try{
//             const res =await fetch('https://fakestoreapi.com/product')

//             const data=await res.json()

//             disapatch(setProduct(data))

//             disapatch(setStatus(STATUSES.IDLE))
//           }catch(err){
//             console.log(err)
//             disapatch(setStatus.ERROR)
//           }
//       }
//  }