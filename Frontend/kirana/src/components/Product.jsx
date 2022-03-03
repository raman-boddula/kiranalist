import React from 'react';
import { Button } from 'antd';

export const Product = ({ product,handleShowDiv }) => {
    const [showbutton, setShowbutton] = React.useState(false);
    return (
        <div key={product._id} onMouseEnter={() => setShowbutton(true)} onMouseLeave={() => setShowbutton(false)}>
            <div className="productDetails">
                <img src={product.Image[0]} alt={product.Name} /><br/><br/>
                <h4>{product.Name}</h4><br/>
            </div>
            {showbutton ? <Button type="primary" shape="round" size="large" onClick={handleShowDiv}>Add To List</Button> : null}
        </div>
    )
}