import React from 'react';
import { Dropdown, Menu } from 'antd';
import { useNavigate, Link } from "react-router-dom";
import {ListContext} from "../contexts/ListContext"

export const Navbar = () => {
    const userName = JSON.parse(sessionStorage.getItem('isAuth'))?.user?.Name;
    const { list } = React.useContext(ListContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem('isAuth');
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
                    <Link to="/"><img src="https://raw.githubusercontent.com/raman-boddula/kiranaList/main/Frontend/kirana/public/kiranaList.jpg" alt="logo" /></Link>
                </div>
                {userName ?
                    <div>
                        <Dropdown.Button overlay={menu} placement="bottomRight" style={{ marginTop: "10px" }}>Welcome {userName}</Dropdown.Button>
                        <div style={{position: "relative"}}>
                           <Link to="list"> <img src="https://cdn-icons-png.flaticon.com/512/650/650661.png" alt="Notepad" style={{cursor: "pointer"}}/></Link>
                            <h3 className="counter" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-35%,-40%)",color:"black",fontSize:"1.5em",fontWeight:"bold"}}>{list.length}</h3>
                        </div>
                    </div>
                : null}
            </div>
        </>
    )
}