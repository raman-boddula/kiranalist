import React from 'react';
import axios from "axios";
import { Product } from "./Product";
import  {AiOutlineClose}  from 'react-icons/ai';
import {  Button, Input, Select} from "antd";
const { Option } = Select;
export const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [showDiv, setShowDiv] = React.useState(false);
    const [product, setProduct] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [quantity, setQuantity] = React.useState(0);
    const [weight,setWeight] = React.useState(0)
    const [list, setList] = React.useState([]);
    React.useEffect(() => {
        axios.get(`http://localhost:2345/products/?Page=${page}`).then((res) => {
            console.log(res);
            setData([...data,...res.data.products]);
            setIsLoading(false);
        })
    }, [page]);
    const handleShowDiv = (id) => {
        setProduct(id);
        setShowDiv(true);
    }
    window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight >=  document.documentElement.scrollHeight) {
        //   setPage(page+1);
        };
      });
    const handleQuantity = (name) => {
        setList([...list,{[name]:(Number(quantity)*Number(weight))/1000}]);
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
                        &ensp;
                        &ensp;
                        &ensp;
                        &ensp;
                        &ensp;
                        &ensp;
                        &ensp;
                        &ensp;
                        &ensp;
                        <div>
                            <h2>{e.Name}</h2>
                            <Input type="number" onChange={(e) => setQuantity(e.target.value)} />
                            <br/><br/>
                            <Select style={{width:"100%"}} onChange={(value) => setWeight(value)}>
                                <Option value="100">100gms</Option>
                                <Option value="250">250gms</Option>
                                <Option value="500">500gms</Option>
                                <Option value="1000">1kg</Option>
                            </Select><br/><br/>
                            <Button style={{width:"100%"}} type="primary" onClick={()=>handleQuantity(e.Name)}>Add To List</Button>
                        </div>
                    </div>
                </div>))
            }
        </div>
    )
}