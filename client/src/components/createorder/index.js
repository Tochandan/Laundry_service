// import React,{useState} from "react";
// import './index.css';
// //import { getToken } from "../utils/authOperations";
// import trouser from "../../assets/trousers.jfif";
// import shirts from "../../assets/shirts.jfif";
// // import jeans from "../../assets/jeans.jfif";
// // import boxers from "../../assets/boxers.jfif";
// // import jogger from "../../assets/joggers.jfif";
// import tshirt from "../../assets/Tshirts.jfif";
// import Wash from "../../assets/washing-machine.svg";
// import Press from "../../assets/ironing.svg";
// import Fold1 from "../../assets/btowel.svg";
// import Wash1 from '../../assets/wash1.svg';
// import Press1 from '../../assets/press1.svg';
// import Fold from '../../assets/fold.svg';
// import Pack1 from '../../assets/pack1.svg';
// import Pack from "../../assets/bleach.svg";
// // import Others from "../../assets/others.jfif";
// import search from "../../assets/search.svg";
// import Footer from "../footer2/index";
// import Header from "../header2/index";
// import Sidebar1 from "../Sidebar/index";

// function OrderCreate(){


  
//   const [color,setcolor]=useState([false,false,false,false,false,false,false]);
  
   
//   // function change(e){
    
   
//   // }
//   function  selectaction(e){
//     const arr=e.target.id.split(' ')
//     const changecolor=[...color]
//     changecolor[parseInt(arr[1])-1]=!changecolor[parseInt(arr[1])-1]
//     setcolor(changecolor)

//   }

  
//     return(
//     <div className="container-fluid" Style="height:708px; width:100%; ">
//       <Header/>
//       <div className="content">
//       <Sidebar1/>
//       <div className="right-content" Style="width:90%">
//         <div Style="display:flex; justify-content: space-around; padding:15px; width:1110;"><h6 Style="margin-right:700px">Create Order</h6>
//               <div Style="border-bottom:1px solid; width:150px; margin-right:120px">
//               <img src={search}alt="search" ></img>
//               </div>
              
//         </div>
//         <div className="order-table" Style="height:80%;">
//           <table className="table">
//             <thead className="table-dark">
//               <tr>
//                 <th Style=" font-weight: lighter;" scope="col">Product Types</th>
//                 <th Style=" font-weight: lighter;" scope="col">Quantity</th>
//                 <th Style=" font-weight: lighter;" scope="col">Wash Type</th>
//                 <th Style=" font-weight: lighter;" scope="col">Price</th>
//                 <th Style=" font-weight: lighter;" scope="col">Reset</th>
//               </tr>
//             </thead>
//             <tbody Style="text-align: center">
//               <tr className="row-height">
//                 <th scope="row"><img className="sizealt" src={shirts} alt="shirts"/>  Shirts</th>
//                 <td><input className="quantitybox" id="Shirts" /></td>
//                 <td>
//                   <tr>
//                     <td className="icons"><img id="Washing 1" src={color[0] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Pressing 2" src={color[1] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Folding 3" src={color[2] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Chemical-washing 4" src={color[3] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
//                   </tr>
//                 </td>
//                 <td><button type="submit" class="btn btn-default" id="0" ></button></td>
//                 <td></td>
//               </tr>
  
//               <tr className="row-height">
//                 <th scope="row"><img className="sizealt" src={tshirt} alt="shirts"/>  T Shirts</th>
//                 <td><input className="quantitybox" id="Tshirts" name="Shirts" /></td>
//                 <td>
//                   <tr>
//                     <td className="icons"><img id="Washing 5" src={color[4] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Pressing 6" src={color[5] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Folding 7" src={color[6] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Chemical-washing 8" src={color[7] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
//                   </tr>
//                 </td>
//                 <td><button type="submit" class="btn btn-default" id="1" ></button></td>
//                <td></td>
//               </tr>
//               <tr className="row-height">
//                 <th scope="row"><img className="sizealt" src={trouser} alt="trouser"/>  Trousers</th>
//                 <td><input className="quantitybox" id="Trousers" name="Trousers" /></td>
//                 <td>
//                   <tr>
//                     <td className="icons"><img id="Washing 9" src={color[8] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Pressing 10" src={color[9] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Folding 11" src={color[10] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
//                     <td className="icons"><img id="Chemical-washing 12" src={color[11] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
//                   </tr>
//                 </td>
//                 <td><button type="submit" className="btn btn-default" id="2" ></button></td>
//                 <td></td>
//               </tr>
            
    
     
//             </tbody>
//           </table>
//           </div>
//           <div Style="float:right; margin-right:125px; margin-top:-12px;">
//           <button className="button button4" Style="transform:scale(0.8); font-size:14px;">Cancel</button>
//           <button className="button button5 " data-bs-toggle="modal" data-bs-target="#exampleModal3" Style="transform:scale(0.8); font-size:14px;">Proceed</button>
//             <div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                               <div className="modal-dialog summary-dialog" role="document">
//                                   <div className="modal-content summary-content">
//                             <div className="modal-header" Style="background-color:#5861AE; color:white">
//                                 <h5 className="modal-title" id="exampleModalLabel">Summary</h5>
//                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                     </button>
//                                     </div>
//                                     <div className="modal-body">
//                                         <div className="store" Style="background-color: #F4F9FF" >
//                                             <div className='storeloc'><a href="#">Store Location</a><br />Bangalore</div>
//                                             <div className='storeadd'><a href="#">Store Address</a><br />Street 283, Bangalore</div>
//                                             <div className='storephone'><a href="#">Phone</a><br />91 XXXXXXXX</div>
//                                         </div>
//                                         {/* <div className='statusbar'>status</div> */}
//                                         <div className='details'>
//                                             <small className='orderdetails'>Order details</small>
                                            
//                                         </div>
//                                         <div className='addressbar'><small className='orderdetails'>Address</small>
//                                         <div className='address1'>
//                                             <b className='numbers'>Home</b><br />
//                                             Street 283, Bangalore
                                            
                                            
              
//                                         </div>
                                       
//                                         </div>

//                                     </div>
//                                     <div className="modal-footer footer">
//                                     <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal4" Style="background-color:#5861AE; color:white; margin-right:10px" >Confirm</button>
                            
//                                     </div> 
//                         </div>
//                     </div>
//                 </div>

//           </div>
//           </div>

//           </div>
//           <Footer/>
//           </div>

//     )
// }

//export default OrderCreate;
import React,{useEffect, useState} from "react";
import './index.css';
//import { getToken } from "../utils/authOperations";
import trouser from "../../assets/trousers.jfif";
import shirts from "../../assets/shirts.jfif";
import jeans from "../../assets/jeans.jfif";
import boxers from "../../assets/boxers.jfif";
import jogger from "../../assets/joggers.jfif";
import tshirt from "../../assets/Tshirts.jfif";
import Wash from "../../assets/washing-machine.svg";
import Press from "../../assets/ironing.svg";
import Fold1 from "../../assets/btowel.svg";
import Wash1 from '../../assets/wash1.svg';
import Press1 from '../../assets/press1.svg';
import Fold from '../../assets/fold.svg';
import Pack1 from '../../assets/pack1.svg';
import Pack from "../../assets/bleach.svg";
import Others from "../../assets/others.jfif";
import search from "../../assets/search.svg";
import Footer from "../footer2/index";
import Header from "../header2/index";
import Sidebar1 from "../Sidebar/index";
function OrderCreate(){
  
 const [item, setitem] = useState({name:"",quantity:0,actions:[],price:0});
  const [action, setaction] = useState([])
  // console.log(item)
  const bill={"Washing":20,"Pressing":15,"Folding":10,"Chemical-washing":25}
  const [product, setproduct] = useState([]);
  const [expression, setexpression] = useState(["-","-","-","-","-","-","-"])
  const [cost, setcost] = useState(0);
  //const [reset, setreset] = useState(false)
  
  const [color,setcolor]=useState([false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false]);
  
   
  function change(e){
    console.log(e);
    setaction([])
    setcost(0)
    setitem({...item,name:e.target.id,quantity:e.target.value})
   
  }
  function  selectaction(e){
    console.log("selectaction");
    console.log(e);
    const arr=e.target.id.split(' ')
    console.log(arr);
    const changecolor=[...color]
    changecolor[parseInt(arr[1])-1]=!changecolor[parseInt(arr[1])-1]
    console.log(changecolor)
    setcolor(changecolor)
    const res=[...action]
    console.log(res)
    res.push(arr[0])
    console.log(res)
    
    setaction(res)
    let washcost=cost
    washcost=washcost+bill[arr[0]]
    setcost(washcost)
  }
  function calculate(e){
    item.actions=action;
    setitem(item)
    const totalprice=item.quantity*cost
    // console.log(totalprice)
    item.price=totalprice
    setitem(item)
    // console.log(item)
    const express=(item.quantity).toString()+"X"+(cost).toString()+" =  "+(item.quantity*cost).toString()
    expression[parseInt(e.target.id)]=express
    console.log(express)
    setexpression(expression)
    console.log(expression)
   
    const demoproduct=[...product]
    demoproduct.push(item)
  
    setproduct(demoproduct)
    console.log(product)
    //setreset(true)
    
  }
{/*
async function Create(){
    const response = await fetch("/api/v1/insert",{
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization':`Bearer ${getToken()}`,
        },
        body:JSON.stringify({
          items:product
          
        }),
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
    });
    console.log(await response.json())
    window.location.href='/orders';
   
} */}
  
    return(
    <div className="container-fluid" Style="height:708px; width:100%; ">
      <Header/>
      <div className="content">
      <Sidebar1/>
      <div className="right-content" Style="width:90%">
        <div Style="display:flex; justify-content: space-around; padding:15px; width:1110;"><h6 Style="margin-right:700px">Create Order</h6>
              <div Style="border-bottom:1px solid; width:150px; margin-right:120px">
              <img src={search}alt="search" ></img>
              </div>
              
        </div>
        <div className="order-table" Style=" height:80%;">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th Style=" font-weight: lighter;" scope="col">Product Types</th>
                <th Style=" font-weight: lighter;" scope="col">Quantity</th>
                <th Style=" font-weight: lighter;" scope="col">Wash Type</th>
                <th Style=" font-weight: lighter;" scope="col">Price</th>
                {/*<th Style=" font-weight: lighter;" scope="col">Reset</th>*/}
              </tr>
            </thead>
            <tbody Style="text-align: center">
              <tr className="row-height">
                <th scope="row"><img className="sizealt" src={shirts} alt="shirts"/>  Shirts</th>
                <td><input className="quantitybox" id="Shirts" onChange={(e)=>{change(e)}}/></td>
                <td>
                  <tr>
                    <td className="icons"><img id="Washing 1" src={color[0] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Pressing 2" src={color[1] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Folding 3" src={color[2] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Chemical-washing 4" src={color[3] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
                  </tr>
                </td>
                <td><button type="submit" class="btn btn-default" id="0" onClick={(e)=>{calculate(e)}}>{expression[0]}</button></td>
               
              </tr>
  
              <tr className="row-height">
                <th scope="row"><img className="sizealt" src={tshirt} alt="shirts"/>  T Shirts</th>
                <td><input className="quantitybox" id="Tshirts" name="Shirts" /></td>
                <td>
                  <tr>
                    <td className="icons"><img id="Washing 5" src={color[4] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Pressing 6" src={color[5] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Folding 7" src={color[6] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Chemical-washing 8" src={color[7] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
                  </tr>
                </td>
                <td><button type="submit" class="btn btn-default" id="1" onClick={(e)=>{calculate(e)}}>{expression[1]}</button></td>
               
              </tr>
              <tr className="row-height">
                <th scope="row"><img className="sizealt" src={trouser} alt="trouser"/>  Trousers</th>
                <td><input className="quantitybox" id="Trousers" name="Trousers" /></td>
                <td>
                  <tr>
                    <td className="icons"><img id="Washing 9" src={color[8] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Pressing 10" src={color[9] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Folding 11" src={color[10] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Chemical-washing 12" src={color[11] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
                  </tr>
                </td>
                <td><button type="submit" class="btn btn-default" id="2" onClick={(e)=>{calculate(e)}}>{expression[2]}</button></td>
               
              </tr>
                <tr className="row-height">
                <th scope="row"><img className="sizealt" src={jeans} alt="jeans"/>  Jeans</th>
                <td><input className="quantitybox" id="Jeans" name="Jeans" /></td>
                <td>
                  <tr>
                    <td className="icons"><img id="Washing 13" src={color[12] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Pressing 14" src={color[13] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Folding 15" src={color[14] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Chemical-washing 16" src={color[15] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
                  </tr>
                </td>
                <td><button type="submit" class="btn btn-default" id="3" onClick={(e)=>{calculate(e)}}>{expression[3]}</button></td>
                
              </tr>
              <tr className="row-height">
                <th scope="row"><img className="sizealt" src={boxers} alt="boxers"/>  Boxers</th>
                <td><input className="quantitybox" id="Boxers" name="Boxers" /></td>
                <td>
                  <tr>
                    <td className="icons"><img id="Washing 17" src={color[16] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Pressing 18" src={color[17] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Folding 19" src={color[18] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
                    <td className="icons"><img id="Chemical-washing 20" src={color[19] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
                  </tr>
                </td>
                <td><button type="submit" class="btn btn-default" id="4" onClick={(e)=>{calculate(e)}}>{expression[4]}</button></td>
               
              </tr>
                <tr className="row-height">
                  <th scope="row"><img className="sizealt" src={jogger} alt="jogger"/>  Joggers</th>
                  
                  <td><input className="quantitybox" id="Joggers" name="Joggers" /></td>
                  <td>
                              <tr>
                                <td className="icons"><img id="Washing 21" src={color[20] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
                                <td className="icons"><img id="Pressing 22" src={color[21] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
                                <td className="icons"><img id="Folding 23" src={color[22] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
                                <td className="icons"><img id="Chemical-washing 24" src={color[23] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
                              </tr>
                            </td>
                            <td><button type="submit" class="btn btn-default" id="5" onClick={(e)=>{calculate(e)}}>{expression[5]}</button></td>
                            
                </tr>
                <tr className="row-height">
                  <th scope="row"><img className="sizealt" src={Others} alt="Others"/>  Others</th>
                  
                  <td><input className="quantitybox" id="Others" name="Others" /></td>
                  <td>
                              <tr>
                                <td className="icons"><img id="Washing 25" src={color[24] ? Wash1 : Wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></td>
                                <td className="icons"><img id="Pressing 26" src={color[25] ? Press1 : Press} alt="Press" onClick={(e)=>{selectaction(e)}}/></td>
                                <td className="icons"><img id="Folding 27" src={color[26] ? Fold1 : Fold} alt="Fold" onClick={(e)=>{selectaction(e)}}/></td>
                                <td className="icons"><img id="Chemical-washing 28" src={color[27] ? Pack1 : Pack} alt="Pack" onClick={(e)=>{selectaction(e)}}/></td>
                              </tr>
                            </td>
                            <td><button type="submit" class="btn btn-default" id="6" onClick={(e)=>{calculate(e)}}>{expression[6]}</button></td>
                           
                </tr>
            
    
     
            </tbody>
          </table>
          </div>
          <div Style="float:right; margin-right:125px; margin-top:-12px;">
          <button class="button button4" Style="transform:scale(0.8); font-size:14px;">Cancel</button>
          <button class="button button5 " data-bs-toggle="modal" data-bs-target="#exampleModal3" Style="transform:scale(0.8); font-size:14px;">Proceed</button>
            <div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog summary-dialog" role="document">
                                  <div className="modal-content summary-content">
                            <div className="modal-header" Style="background-color:#5861AE; color:white">
                                <h5 className="modal-title" id="exampleModalLabel">Summary</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="store" Style="background-color: #F4F9FF;" >
                                            <div className='storeloc'><a>Store Location</a><br />Bangalore</div>
                                            <div className='storeadd'><a>Store Address</a><br />Street 283, Bangalore</div>
                                            <div className='storephone'><a>Phone</a><br />91 XXXXXXXX</div>
                                        </div>
                                        
                                        <div className='details'>
                                            <small className='orderdetails'>Order details</small>
                                            {product.map((prod,index)=>
                                                  <div className='solo-item' key={index}><div className='solo1'>{prod.name}</div> <div className='solo2'>{prod.actions.map(action=><i>{action},</i>)}</div>  <div className='solo3'>{prod.quantity} X {parseInt(prod.price/prod.quantity)} = <b Style="color:#5861AE">{prod.price}</b> </div> <hr></hr> </div>
                                            )}
                                            <div className='subtotal'>Sub total: <b className='numbers'>{product.reduce((acc,curr)=> acc+parseInt(curr.price),0)}</b></div>
                                            <div className='charges' >Pickup charges: <b className='numbers'>90</b></div>
                                            <div className='total' Style="padding-top: 13px;"><b className='final'>Total:   Rs {product.reduce((acc,curr)=> acc+parseInt(curr.price),0)+90}</b></div>
                                            
                                        </div>
                                        <div className='addressbar'><small className='orderdetails'>Address</small>
                                        <div className='address1'>
                                            <b className='numbers'>Home</b><br />
                                            Street 283, Bangalore
                                            
                                            
                                            
                                        </div>
                                       
                                        </div>
                                    </div>
                                    <div className="modal-footer footer">
                                    <button type="button" className="btn " id="confirm-btn" data-bs-toggle="modal" data-bs-target="#exampleModal4" Style="background-color:#5861AE; color:white; margin-right:10px ; margin-bottom:100px" >Confirm</button>
                            
                                    </div> 
                        </div>
                    </div>
                </div>
          </div>
          </div>
          </div>
          <Footer/>
          </div>
    )
}
export default OrderCreate;




