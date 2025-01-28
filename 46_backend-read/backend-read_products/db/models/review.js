import mongoose from "mongoose";

const { Schema } = mongoose;
const productSchema = new Schema({
  title: String,
  text: String,
  rating: Number,
});

const Product =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema, "products");

export default Product;
