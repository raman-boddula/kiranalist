// https://www.kiranalist.com/media/image/0/default-image.png?size=250
import React from 'react';
import image from "../../public/kiranaList.jpg";
export const Navbar = () => {
    const [user, setUser] = React.useState("");
    return (
        <>
            <div className="navbar">
                <div>
                    <img src={image} alt="logo" />
                </div>
                <div>
                    <p>Welcome {user}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/650/650661.png" alt="Notepad"/>
                </div>
            </div>
        </>
    )
}