import React from 'react';
import { Form, Input, Button ,DatePicker, Select} from "antd";
import { Option } from 'antd/lib/mentions';
import { Link } from 'react-router-dom';
export const Register = () => {
    const [user,setUser]=React.useState({})
    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setUser({...user,[name]:value})
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log('registered User', user);
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
                    <DatePicker  name="Age" onChange={handleChange} placeholder="Enter your age" />
                    <div><br></br></div>
                    <label>Gender &ensp;</label>
                    <Select name="Genger" style={{width:"20%"}}onChange={handleChange}>
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