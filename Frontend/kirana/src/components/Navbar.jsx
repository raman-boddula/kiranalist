// https://www.kiranalist.com/media/image/0/default-image.png?size=250
import React from 'react';
import { Dropdown, Menu } from 'antd';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const userName = JSON.parse(localStorage.getItem('isAuth'))?.user?.Name;
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('isAuth');
        navigate('/login')
    }
    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={handleLogout}>Logout</Menu.Item>
            <Menu.Item key="2">Show Previous</Menu.Item>            
        </Menu>
      );
    return (
        <>
            <div className="navbar">
                <div>
                    <img src="https://raw.githubusercontent.com/raman-boddula/kiranaList/main/Frontend/kirana/public/kiranaList.jpg" alt="logo" />
                </div>
                {
                    userName ?<div>
                    <Dropdown.Button overlay={menu} placement="bottomRight" style={{ marginTop: "10px" }}>Welcome {userName}</Dropdown.Button>
                    <img src="https://cdn-icons-png.flaticon.com/512/650/650661.png" alt="Notepad" />
                &ensp;</div>:null}
            </div>
        </>
    )
}