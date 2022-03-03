import React from 'react';
import { Button, Input, Form } from "antd";
import { Link } from 'react-router-dom';
export const Login = () => {
    const [user, setUser] = React.useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("loginUser",user)
    }
    return (
        <div className="loginForm" style={{width:"25%",marginLeft:"37%"}}>
            <div>
                <h1>Login page</h1>
                <div>
                    <Form>
                        <Input type='text' name="Email" onChange={handleChange} placeholder='Enter your email' /><br></br>
                        <div><br></br></div>
                        <Input type='password' name="Password" onChange={handleChange} placeholder='Enter your password' />
                        <div><br></br></div>
                        <Button onClick={handleSubmit} type='primary'>Login</Button>
                        <div><br></br></div>
                        <div>
                            Create An Account ?  <Link to='/register'><Button>Register</Button></Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}