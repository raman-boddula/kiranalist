import {Navigate} from "react-router-dom"
export const PrivateRoute = ({ children }) => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    if (!isAuth) { 
        return <Navigate to="/login"></Navigate>
    }
    return (
        children
    )
}