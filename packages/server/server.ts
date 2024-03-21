import express from "express";
import fs from "fs";
import path from "node:path";
import cors from "cors";
import { getProductFromDb } from "./products";
import { getUsersFromDb } from "./users";

const app = express();
const port = 3000;

app.use(express.static("../client/dist"));
app.use(express.static("public"));
app.use(cors());

// Tip: don't load images via JSON, use a separate endpoint for images
// Tip: optimize images and using `https://squoosh.app/`
// Don't use sync functions
// Add cache headers to images

app.get("/api/products", async (req, res) => {
  const productResponse = [] as any[];
  const products = await getProductFromDb();
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

app.get("/api/image/:file", (req, res) => {
  const fullPath = path.join(__dirname, "./public/images", req.params.file);
  const stream = fs.createReadStream(fullPath);
  stream.on("error", function (e) {
    console.log("failed to load image: ", fullPath);
    res.status(404).send("Not found");
    return;
  });
  res.type(path.extname(req.params.file).slice(1));
  // res.setHeader("cache-control", "public, max-age=3600");
  stream.pipe(res);
});

app.get("/api/users", async (req, res) => {
  const users = await getUsersFromDb();
  res.json(users);
});

app.use((req, res) => {
  // redirect to index.html
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
