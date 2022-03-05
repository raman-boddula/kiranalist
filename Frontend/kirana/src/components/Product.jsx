import React from 'react';
import { Button } from 'antd';
import { ListContext } from "../contexts/ListContext"
import { Link } from "react-router-dom";

export const Product = ({ product,handleShowDiv }) => {
    const [showbutton, setShowbutton] = React.useState(false);
    const { list } = React.useContext(ListContext);
    return (
        <div onMouseEnter={() => setShowbutton(true)} onMouseLeave={() => setShowbutton(false)}>
            <div className="productDetails">
                <img src={product?.Image[0]} alt={product.Name} /><br/><br/>
                <h4>{product.Name}</h4><br/>
            </div>
            {showbutton && list.map((e)=>(e.Name===product.Name && <Link to="/list"><Button type="primary" shape="round" size="large">Go To List</Button></Link>)) ? <Button type="primary" shape="round" size="large" onClick={()=>handleShowDiv(product._id)}>Add Quantity</Button> : null}
        </div>
    )
}