import React from 'react';
import axios from "axios";
import { Product } from "./Product";
import { AiOutlineClose } from 'react-icons/ai';
import { TailSpin } from  'react-loader-spinner'
import { Button, Input, Select, Pagination } from "antd";
import {ListContext} from "../contexts/ListContext"
const { Option } = Select;

export const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [showDiv, setShowDiv] = React.useState(false);
    const [product, setProduct] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);
    const [weight,setWeight] = React.useState(0)
    const {handleList} = React.useContext(ListContext)
    React.useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:2345/products/?Page=${page}`).then((res) => {
            console.log(res);
            setData([...res.data.products]);
            setTotal(res.data.total_pages);
            setIsLoading(false);
        })
    }, [page]);
    const handleShowDiv = (id) => {
        setProduct(id);
        setShowDiv(true);
    }
    // window.addEventListener("scroll", () => {
    //     if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && page <= total) {
    //         console.log(page);
    //       setPage(page+1);
    //     };
    //   });

    const handleQuantity = (name) => {
        handleList({[name]:(Number(quantity)*Number(weight))/1000});
    }
    const handlePageChange = (value) => {
        console.log(value);
        value <= total ? setPage(value) : setPage(0);
    }
    return (isLoading ? <div className="loader"><TailSpin color="black"/></div> :
        <div className="HomePage">
            <div className="products" style={{filter : showDiv ? "blur(2px)" : "blur(0)"}}>
                {data?.map((e) => (
                    <Product key={e._id} product={e} handleShowDiv={handleShowDiv} />
                ))}
            </div>
            <Pagination onChange={handlePageChange} defaultPageSize={6} pageSize={6} total={total*6} style={{marginTop:"20px"}} />
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
                            <Input type="number" placeholder="choose the quantity" onChange={(e) => setQuantity(e.target.value)} />
                            <br/><br/>
                            <Select style={{width:"100%"}} placeholder="choose the weight" onChange={(value) => setWeight(value)}>
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