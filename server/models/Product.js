const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  product_name:  String, // String is shorthand for {type: String}
  product_image: String,
  product_descriptiopn: String,
  product_wash:   { type: Number, default: 20 },
  product_press:  { type: Number, default: 15 },
  product_fold:   { type: Number, default: 10 },
  product_pack:   { type: Number, default: 25 }
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;