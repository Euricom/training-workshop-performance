import express from "express";
import { products } from "./products";
import fs from "fs";
import cors from "cors";
import { faker } from "@faker-js/faker";

const app = express();
const port = 3000;

// Function to generate random number
const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

app.get("/api/users", (req, res) => {
  const users = [] as any[];
  for (let i = 0; i < 2000; i++) {
    users.push({
      name: faker.person.firstName,
      lastname: faker.person.lastName,
      email: faker.internet.email(),
      imageUrl: `https://xsgames.co/randomusers/assets/avatars/male/${randomNumber(
        1,
        70
      )}.jpg`,
    });
  }
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
