// https://www.kiranalist.com/media/image/0/default-image.png?size=250
import React from 'react';
export const Navbar = () => {
    const [user, setUser] = React.useState("");
    return (
        <>
            <div className="navbar">
                <div>
                    <img src="https://raw.githubusercontent.com/raman-boddula/kiranalist/main/Frontend/kirana/public/kiranaList.jpg" alt="logo" />
                </div>
                <div>
                    <p>Welcome {user}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/650/650661.png" alt="Notepad"/>
                </div>
            </div>
        </>
    )
}