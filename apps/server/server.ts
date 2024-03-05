import express from "express";
import { products } from "./products";
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.static("../client/dist"));
app.use(express.static("public"));




app.get("/api/products", (req, res) => {
  const productResponse = [] as any[];
  // forEach product read file and add image
  products.forEach(product => {
  const image = fs.readFileSync(`./public/images/${product.imageFile}`, {encoding: 'base64'});
  productResponse.push({
    name: product.name,
    price: product.price,
    image: image
  });
  });
  res.json(productResponse);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
