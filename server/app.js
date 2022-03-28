const express= require('express');
const mongoose=require('mongoose');
// const cors = require('cors');
const bodyparser=require('body-parser');
const UserRoute=require('./routes/user')
const OrderRoute=require('./routes/Orders');
const Products =require("./models/Product");



const app=express()
// app.use(cors())
app.use(bodyparser());
// ...................data base connection............................
mongoose.connect("mongodb+srv://Team15:team15@cluster0.yirhq.mongodb.net/laundry?retryWrites=true&w=majority").then(()=>{console.log("db connected")})

//...................routes ..................
app.use('/',UserRoute)
app.use('/',OrderRoute)


//Insert Product
app.post("/api/v1/insert_product",async(req,res)=>{
    console.log(req.body)
    const product= await Products.create({
        product_name:req.body.product_name,
        product_image:req.body.product_image,
        product_descriptiopn:req.body.product_descriptiopn,
    })
    res.json({
        status: "Product Added successfully",
        product
    })
})

//Get Product
app.get("/api/v1/products", async (req, res) =>{
    const products = await Products.find();
    res.json({
        status: "success",
        products
    });
})

//.....................
app.use("/orders",(req,res,next)=>{
    var token = req.headers.authorization.split("team15 ")[1];
    if(!token){
        return res.status(401).json({
            status:"failed",
            message:"token is missing"
        })
    }
    jwt.verify(token,"SECRETKEYTRESDGHU",function(err,decoded){ 
        if(err){
            return res.status(401).json({
                status:"failed",
                message:"invalid token"
            })
        }
        else{
            req.user = decoded.data
            next();
        }
    })
  })


app.listen(5000,()=>{
    console.log("server is listening")
})
