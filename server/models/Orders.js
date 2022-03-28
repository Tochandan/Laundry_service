const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrderSchema = new Schema({
    // user: {type: mongoose.Types.ObjectId ,ref:'User'},
     userId:{type:String},
    status : {type:String},
    date : {type:String},
    // date : {type:Date,default:Date.now},
    items : [{
        productName:{type:String, required: true},
        washType:{type:String ,required:true},
        quantity:{type:Number},
        price:{type:Number}
    }],
    totalPrices : Number,
    totalItems : Number,
    storeLocation :  {type:String,default:"JB nagar"},
    storePhone : {type:Number,default:9876543210},
    cancleStatus:{type:String, default:"cancle order"},
    city :{type:String,default:"Bangalore"}
});
const Order = mongoose.model('Order',OrderSchema)
module.exports = Order;