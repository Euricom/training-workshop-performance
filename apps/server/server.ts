import express from "express";
import { products } from "./products";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.static("../client/dist"));
app.use(express.static("public"));
app.use(cors());

app.get("/api/products", (req, res) => {
  const productResponse = [] as any[];
  // forEach product read file and add image
  products.forEach((product) => {
    const image = fs.readFileSync(`./public/images/${product.imageFile}`, {
      encoding: "base64",
    });
    productResponse.push({
      name: product.name,
      price: product.price,
      image: image,
    });
  });
  res.json(productResponse);
});

app.get("/api/markdown", (req, res) => {
  const markdown = fs.readFileSync("./public/markdown.md", {
    encoding: "utf8",
  });
  res.json(markdown);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
