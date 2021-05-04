const express = require("express");
const path = require("path");

const shopRouter = require("./routes/shop");
const app = express();

// middlewares
// app.use((req, res, next) => {
//   console.log("In the first middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the second middleware");
//   res.send("<h1>Hello from express</h1>");
// });

// app.get("/", (req, res, next) => {
//   // res.send("<h1>Hello Express</h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.post("/contact", (req, res) => {
//   console.log(req.body);
// });

// to parse incoming form data
app.use(express.urlencoded({ extended: false }));

app.use("/add-products", (req, res) => {
  res.send(`
  <form action="/product" method="POST">
    <input type="text" name="title" />
    <button type="submit">SEND</button>
  </form>
  `);
});

app.use("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// route
app.use(shopRouter);

// catch-all-midlleware 404
app.use((req, res) => {
  res.status(404).send("catch 404");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
