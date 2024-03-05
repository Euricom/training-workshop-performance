import express from "express";
const app = express();
const port = 3000;

app.use(express.static("../client/dist"));
app.use(express.static("public"));


const products = [
  { ... }
]

app.get("/api/products", (req, res) => {
  // forEach product read file and add image
  res.json([
    {
      test: "hello xxx",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
