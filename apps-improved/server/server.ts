import fs from "node:fs";
import path from "node:path";
import express from "express";
import { products } from "./products";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.static("../client/dist"));
app.use(express.static("public"));
app.use(cors())

app.get("/api/products", (req, res) => {
  res.json(products);
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
  res.setHeader("cache-control", "public, max-age=3600");
  stream.pipe(res);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
