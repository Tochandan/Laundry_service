import React from "react";
import "./index.css";
// import { removeToken } from "../utils/authOperations";

function Header(){
    return(
        <div className="header2"  >
            <div className='appname'>
                <h4 Style="color:#5861AE; padding:20px;font-size:18px">LAUNDRY</h4>
            </div>
            <div className='subheader'>
              <div className="Pricing">Pricing </div>
              <div className="Career">Career </div>
              <div className="Username">Username</div>
            </div>
          
        </div>
    )
}


export default Header;

