import fs from "node:fs";
import path from "node:path";
import express from "express";
import { products } from "./products";
import cors from "cors";
import { faker } from "@faker-js/faker";

// Function to generate random number
const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate 2000 random users
const allUsers = Array.from({ length: 2000 }, () => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  email: faker.internet.email(),
  imageUrl: `https://xsgames.co/randomusers/assets/avatars/male/${randomNumber(1, 70)}.jpg`,
}));

const app = express();
const port = 3000;

app.use(express.static("../client/dist"));
app.use(express.static("public"));
app.use(cors());

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

// Endpoint to get paginated users
app.get("/api/users", (req, res) => {
  const page = parseInt(req.query.page) || 1; // default to page 1 if not provided
  const pageSize = parseInt(req.query.pageSize) || 20; // default page size to 20 if not provided

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const users = allUsers.slice(startIndex, endIndex);

  res.json({
    page: page,
    pageSize: pageSize,
    totalPages: Math.ceil(allUsers.length / pageSize),
    totalUsers: allUsers.length,
    users: users,
  });
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
