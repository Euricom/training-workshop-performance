import express from "express";
const app = express();
const port = 3000;

app.use(express.static("../client/dist"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
