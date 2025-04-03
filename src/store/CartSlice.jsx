// import { createSlice } from "@reduxjs/toolkit"




// const CartSlice=createSlice({
//    name:'cart',
//    initialState:[],

//    reducers:{
//       add(state,action){
//         state.push(action.payload)
//       },
//       remove(state,action){
//         return state.filter(item=>item.id !== action.payload)
//       },
//    },
// })

// export const {add,remove}= CartSlice.actions
// export default CartSlice.reducer








import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        increaseQuantity(state, action) {
            const product = state.find(item => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const product = state.find(item => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }
    }
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
