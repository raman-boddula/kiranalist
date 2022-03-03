import React from 'react';
import axios from "axios";
import { Product } from "./Product";
import  {AiOutlineClose}  from 'react-icons/ai';
import {  Input, Select} from "antd";
const { Option } = Select;
export const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [showDiv, setShowDiv] = React.useState(false);
    const [product, setProduct] = React.useState("");
    const [list, setList] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:2345/products').then((res) => {
            console.log(res);
            setData(res.data.products);
            setIsLoading(false);
        })
    }, []);
    const handleShowDiv = (id) => {
        setProduct(id);
        setShowDiv(true);
    }
    const handleQuantity = (e) => {
        
    }
    return (isLoading ? <div>Loading...</div> :
        <div className="HomePage">
            <div className="products">
                {data.map((e) => (
                    <Product key={e._id} product={e} handleShowDiv={handleShowDiv} />
                ))}
            </div>
            {showDiv && data.map((e) => (
                e._id === product && <div className = "detailsDiv" >
                    <div >
                    <AiOutlineClose className="closing" onClick={()=>setShowDiv(false)}/>
                    </div>
                    <div className="flexProduct">
                        <div>
                            <img src={e.Image[0]} alt={e.Name}/>
                        </div>
                        <div>
                            <h2>{e.Name}</h2>
                            <Input type="number" onChange={(e) => console.log(e.target.value)} />
                            <br/><br/>
                            <Select style={{width:"100%"}} onChange={(value) => console.log(value)}>
                                <Option value="100">100gms</Option>
                                <Option value="250">250gms</Option>
                                <Option value="500">500gms</Option>
                                <Option value="1000">1kg</Option>
                            </Select>
                        </div>
                    </div>
                </div>))
            }
        </div>
    )
}