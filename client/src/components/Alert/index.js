import React from 'react'
import { Redirect } from "react-router-dom"
import "./index.css"
import warning from "../../assets/warning.jpg"
// import { useState } from "react"
// import ButtonOrder from './ButtonOrder';
import axios from "axios"


function Alert(props) {

    const { closeAlert, order } = props
    // console.log(closeAlertFn);
    console.log(order)
    let id = order._id
    const updateStatus = () => {
        axios.put(`/orders/${id}`, {})
            .then(res => {
                console.log(res);
                console.log("alert closed");
                closeAlert();
                window.location.href = '/orders'
                // <Redirect to="/orders"></Redirect>
            })
            .catch(err => console.log(err)
        );
    }

    return (
        <div className='popup-box'>
            <div className='alert__box'>
                <div className='alertHeader'>
                    Alert
                    <button className='closeBtn' onClick={closeAlert}>x</button>
                </div>

                <div className='alert__content'>
                    <div>
                        <img className='warningIcon' src={warning} alt="warning" />
                    </div>
                    <div>
                        <p className='alertMessage'> Are you sure you want to cancel the
                            <br></br>
                            order No: props. OR000{order.userId}
                        </p>

                        <div className='proceed-btn'>
                            <button onClick={updateStatus} >Procced</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Alert