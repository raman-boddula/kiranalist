import React from 'react';
import { Form, Input, Button, Select} from "antd";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const { Option } = Select;
export const Register = () => {
    const [user, setUser] = React.useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user,[name]:value})
    }
    const handleGender = (value) => {
        setUser({ ...user, Gender: value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log('registered User', user);
        axios.post("http://localhost:2345/register", user).then((response) => {
            console.log(response);
            navigate("/login");
        }).catch((error) => {
            alert (`Error Message : ${error}`);
        })

    }
    return (
        <div style={{width:"25%",marginLeft:"37%"}}>
            <div>
                <h1>Register Page</h1></div>
            <div>
                <Form>
                    <label>Name</label><Input type="text" name="Name" onChange={handleChange}placeholder="enter your name" />
                    <div><br></br></div>
                    <label>Email</label>
                    <Input type="email" name="Email" onChange={handleChange} placeholder="enter your email" />
                    <div><br></br></div>
                    <label>Password</label>
                    <Input type="password" name="Password" onChange={handleChange} placeholder="enter your password" />
                    <div><br></br></div>
                    <label>Date of Birth  &ensp;</label>
                    <Input type="number" name="Age" onChange={handleChange} placeholder="Enter your age" />
                    <div><br></br></div>
                    <label>Gender &ensp;</label>
                    <Select name="Genger" style={{width:"20%"}}onChange={(value)=>handleGender(value)}>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                    <div><br></br></div>
                    <Button type="primary" onClick={handleClick}>Register</Button>
                    <div><br></br></div>
                    
                    <div>
                        Already Registered ?  <Link to='/login'><Button>Login</Button></Link> 
                    </div>
                </Form>
            </div>
        </div>
    )
}