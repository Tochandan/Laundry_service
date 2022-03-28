const express = require('express');
// const cors = require('cors');
const bodyparser = require('body-parser');
const Orders=require("../models/Orders");
const router = express.Router();

// router.use(cors())
router.use(bodyparser());

router.get("/orders",async (req,res)=>{
    try{
        const orders= await Orders.find({user: req.user});
        res.status(200).json({
            status:"success",
            orders:orders
        })
    }catch(err){
        res.status(500).json({
            status:"failled",
            message:err.message
        })
    }
})

// router.get("/orders/:orderId", async (req, res) => {
//     try {
//         const order = await Orders.findOne({_id: req.params.orderId, user: req.user})
//         return res.status(200).json({
//             status: "Success",
//             order
//         })
        

//     } catch (e) {
//         return res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// })

router.post("/api/v1/insert",async(req,res)=>{
    console.log(req.body)
    const order= await Orders.create({
        user:req.body.user,
        status : req.body.status,
        date : req.body.date,
        items:req.body.items,
        totalPrices : req.body.totalPrices,
        totalItems : req.body.totalItems,
        
        
    })
    res.json({
        status: "success",
        order
    })
})

//........................cancle order..............................
router.put("/orders/:orderId", async (req, res) => {
    try {
        console.log(req.params.orderId)
        const order = await Orders.updateOne({_id: req.params.orderId},  {status: "Cancelled"})
        
        return res.status(200).json({
            status: "Success",
            order
        })
    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router