import React from 'react';
import axios from "axios";
import { Product } from "./Product";

export const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [showDiv, setShowDiv] = React.useState(false);
    React.useEffect(() => {
        axios.get('http://localhost:2345/products').then((res) => {
            console.log(res);
            setData(res.data.products);
            setIsLoading(false);
        })
    }, []);
    console.log(data);
    const handleShowDiv = () => {
        setShowDiv(!showDiv);
    }
    return (isLoading ? <div>Loading...</div> :
        <div className="HomePage">
            <div className="products">
                {data.map((e) => (
                    <Product product={e} handleShowDiv={handleShowDiv}/>
                ))}
            </div>
            {showDiv ? <div className="detailsDiv">Hello</div> : null}
        </div>
    )
}