import React from 'react';
import { Button } from 'antd';
// import { ListContext } from "../contexts/ListContext"
import { Link } from "react-router-dom";

export const Product = ({ product,handleShowDiv,shwLstBtn }) => {
    const [showbutton, setShowbutton] = React.useState(false);
    // const { list } = React.useContext(ListContext);
    // console.log(product, list, "afjdfdsfj");
    return (
        <div onMouseEnter={() => setShowbutton(true)} onMouseLeave={() => setShowbutton(false)}>
            <div className="productDetails">
                <img src={product?.Image[0]} alt={product.Name} /><br/><br/>
                <h4>{product.Name}</h4><br/>
            </div>
            {showbutton ? shwLstBtn=== true ? <Link to="/list"><Button type="primary" shape="round" size="large" className="addbtn">Go To List</Button></Link> : <Button type="primary" shape="round" size="large" onClick={()=>handleShowDiv(product._id)} className="addbtn">Add Quantity</Button> : null}
        </div>
    )
}