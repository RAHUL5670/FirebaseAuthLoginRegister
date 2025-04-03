import { Navigate } from "react-router-dom";

// in this code we wright code for protecting route we on show the home page only users not directly show the home page 

export const ProtectedeRoute = ({children}) =>{
    const user = JSON.parse(localStorage.getItem('user'));

     if(user){
        return children
     }else{
        return <Navigate to ={'login'}/>
     }
}