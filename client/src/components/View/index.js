import React, {useState} from "react";
import "./index.css";
import axios from "axios"
export default function View(props) {
    const { closeModel, order, setdata } = props
    const itemsArr=order.items
    var orderStatus = false
    if (order.status ==="ready to pickup"){
        orderStatus=true
    }
    let id = order._id
    const updateStatuss = () => {
        axios.put(`/orders/${id}`, {})
            .then(res => {
                console.log(res);
                console.log("alert closed");
                closeModel(false)
                window.location.href = '/orders'
                // <Redirect to="/orders"></Redirect>
            })
            .catch(err => console.log(err)
        );
    }
    
    
    return (
        <div className="view">
            <div className="view-head">
                <h3 className="view-head-summary">Summary</h3>
                <button className="view-head-cross" onClick={() => { closeModel(false); setdata({}) }} >X</button>
            </div>
            <div className="view-hero">
                <span className="view-storeLocation">
                    <p><b>Store Location</b></p>
                    <p>{order.storeLocation}</p>
                </span>
                <span className="view-storeAddress">
                    <p><b>Store Address</b></p>
                    <p>{order.city}</p>
                </span>
                <span className="view-storePhone">
                    <p><b>Phone</b></p>
                    <p>{order.storePhone}</p>
                </span>
            </div>
            <div className="view-tracking">
                <span className="view-tracking-pickup"><input type="radio" /> pickup</span>
                <span className="view-tracking-wash"><input type="radio" /> Washed</span>
                <span className="view-tracking-iron"><input type="radio" /> Ironed</span>
                <span className="view-tracking-deliver"><input type="radio" /> Deleverd</span>
            </div>
            <div className="view-orderDetails">
                <p className="view-orderDetails-p">Order Details</p>
                <table className="view-orderDetails-table">
                    {itemsArr.map((item) => {
                        return(
                        <tr className="view-orderDetails-row">
                            <td className="col-sm-3 summary-col" >{item.productName}</td>
                            <td className="col-sm-3 summary-col">{item.washType}</td>
                            <td className="col-sm-2 summary-col-3">{item.quantity} X {item.price}</td>
                            <td className="col-sm-2 summary-col-3"> = </td>
                            <td className="col-sm-2 summary-col-3">{item.quantity*item.price}</td>
                        </tr>)
                    })}

                </table>
                <p id="subTotal">Sub total <span className="costBlue"> {order.totalPrices}</span></p>
                <p id="pickup-charge">Pickup Charges <span className="costBlue">60</span></p>

            </div>
            <div className="view-total">
                <div className="view-total-bar">
                    <p id="totalCost">Total :    Rs {order.totalPrices + 60}</p>

                </div>

            </div>
            <div className="view-address">
                <p className="address-para">Address</p>
                <div className="view-address-block">
                    <p><b>Home</b><br />#233 10th road JP nagar Bangalore</p>
                </div>
            </div>
                <div className="footer">
                {orderStatus && <button onClick={updateStatuss} className="cancel-button">Cancel order</button>}
                </div>
            
            


        </div>

    )
}