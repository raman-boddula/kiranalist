import React from 'react';
import axios from "axios";
import { Product } from "./Product";

export const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    // const [showbutton, setShowbutton] = React.useState(false);
    React.useEffect(() => {
        axios.get('http://localhost:2345/products').then((res) => {
            setData(res.data.product);
            setIsLoading(false);
        })
    }, []);
    return ( isLoading ? <div>Loading...</div> :
        <div className="products">
            {data.map((e) => (
                <Product product={e} />
            ))}
        </div>
    )
}