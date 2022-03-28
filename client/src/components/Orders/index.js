import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import View from "../View/index";
import Alert from "../Alert/index";
import Header2 from "../header2/index";
import Footer2 from "../footer2/index";
import Sidebar2 from "../Sidebar2/index";
//import 'bootstrap/dist/css/bootstrap.css';

export default function Orders() {
    const [view, setView] = useState(false);
    const [alert, setAlert] = useState(false);
    const [orders, setOrders] = useState([]);
    const [ord,setOrd]=useState({});
    // const history =useHistory;


    const ordersPage = async () => {
        // console.log("enter into orderPage ");
        try {
            // console.log("enter into try")
            const token = localStorage.getItem("token")
            const res = await fetch('/orders', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'team15 ' + token
                },
                credentials: "include"
            })
            const ordersdata = await res.json();
            // console.log("enter after fetch")
            if (!ordersdata.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            
            setOrders(ordersdata.orders)
            // orders.orders.map(ord=>{console.log(ord.city)})
            // console.log(ordersdata.orders)

        } catch (e) {
            console.log(e)
            // history.push('/login')
        }
    }
    const closeAlertFn =()=>{
        setAlert(false)
    }
    useEffect(() => {
        ordersPage()   
    }, []);
    return (
        <div className="outMost">
            <Header2 />
            <Sidebar2 />
            <div className="main">
                <div className="orders">
                    <p>orders |</p>
                    <Link to="/createorder"><button >Create</button></Link>
                    <span></span>
                    <input type="text" ></input>
                </div>
                <div className="table-div">
                    <table className="table">
                        <thead className="table-head">
                            <tr>
                                <th className="col-sm-1 table-th" >OrderId</th>
                                <th className="col-sm-2 table-th">Order Date & Time</th>
                                <th className="col-sm-2 table-th">Store Location</th>
                                <th className="col-sm-1 table-th">City</th>
                                <th className="col-sm-1 table-th">Store Phone</th>
                                <th className="col-sm-1 table-th">Total Items</th>
                                <th className="col-sm-1 table-th">Price</th>
                                <th className="col-sm-1 table-th">Status</th>
                                <th className="col-sm-1 table-th">    </th>
                                <th className="col-sm-1 table-th">View</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {orders.map((order,index) => {
                                if (order.status==="ready to pickup"){
                                    return (
                                        <tr  key={index} className="table-row" >
                                            <td className="col-sm-1 table-col" >{order.userId}</td>
                                            <td className="col-sm-1 table-col">{order.date}</td>
                                            <td className="col-sm-1 table-col">{order.storeLocation}</td>
                                            <td className="col-sm-1 table-col">{order.city}</td>
                                            <td className="col-sm-1 table-col">{order.storePhone}</td>
                                            <td className="col-sm-1 table-col">{order.totalItems}</td>
                                            <td className="col-sm-1 " id="table-col-blue">{order.totalPrices}</td>
                                            <td className="col-sm-1 table-col">{order.status}</td>
                                            <td className="col-sm-1 table-col" onClick={() => {setAlert(true); setOrd(order)}}>Cancle Order</td>
                                            <td className="col-sm-1 table-col" onClick={()=> {setView(true); setOrd(order)}} ><i className="fa-regular fa-eye"></i></td>
                                        </tr>
                                    )
                                }else{
                                    return (
                                        <tr  key={index} className="table-row" >
                                            <td className="col-sm-1 table-col" >{order.userId}</td>
                                            <td className="col-sm-1 table-col">{order.date}</td>
                                            <td className="col-sm-1 table-col">{order.storeLocation}</td>
                                            <td className="col-sm-1 table-col">{order.city}</td>
                                            <td className="col-sm-1 table-col">{order.storePhone}</td>
                                            <td className="col-sm-1 table-col">{order.totalItems}</td>
                                            <td className="col-sm-1 table-col-blue">{order.totalPrices}</td>
                                            <td className="col-sm-1 table-col">{order.status}</td>
                                            <td className="col-sm-1 table-col" ></td>
                                            <td className="col-sm-1 table-col" onClick={()=> {setView(true); setOrd(order)}} ><i className="fa-regular fa-eye"></i></td>
                                        </tr>
                                    )
                                }
                            })}


                        </tbody>
                    </table>
                </div>
                {view && <View closeModel={setView} order={ord} setdata={setOrd} />}
                {alert && <Alert closeAlert={closeAlertFn} order={ord} />}
            </div>
            <Footer2 />
        </div>

    );
}