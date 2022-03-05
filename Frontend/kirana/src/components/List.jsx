import { Button } from 'antd';
import React from 'react';
import { ListContext } from "../contexts/ListContext";
export const List = () => {
    const { list } = React.useContext(ListContext);
    console.log('list',list)
    return (
        <>
            <h1>Your Bucket</h1>
            <div style={{width:"40%",marginLeft:"30%",marginTop:"2em"}}>
                {list.map((el, i) => {
                    return (
                        <div style={{display: 'flex',justifyContent: 'space-between',fontSize:"2em",alignItems:'center'}}>
                            <p  style={{width:"35%"}}>{el.Name}</p>
                            <p style={{width:"10%"}}>{el.Quantity}</p>
                            <div style={{ padding:'0.7em',display:"flex",justifyContent: 'space-between',alignItems:'center',marginTop:"-1em"}}>
                            <Button type='primary' shape="round" style={{fontSize:"0.5em" }}>Edit</Button>&ensp;&emsp;
                            <Button type="danger" shape="round" style={{ fontSize:"0.5em"}}>Delete</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}