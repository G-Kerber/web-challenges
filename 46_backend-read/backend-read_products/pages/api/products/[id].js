//import { products } from "../../../lib/products";
import Product from "@/db/models/product";

export default async function handler(request, response) {
  //const { id } = request.query;
  //const product = products.find((product) => product.id === id);
  //const product = await Product.findById(id);
  const { id } = request.query;
  const product = await Product.findById(id).populate("reviews");

  if (!product) {
    response.status(404).json({ status: "Not Found" });
    return;
  }

  response.status(200).json(product);
}
