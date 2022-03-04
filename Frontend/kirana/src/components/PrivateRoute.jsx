import {Navigate} from "react-router-dom"
export const PrivateRoute = ({ children }) => {
    const isAuth = JSON.parse(sessionStorage.getItem("isAuth"))?.token;
    if (!isAuth) { 
        return <Navigate to="/login"></Navigate>
    }
    return (
        children
    )
}