// console.log("Hello there");

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server updated"); //That is response from node API
});

// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   }catch (error) {
//     res.status(500).json({message: error.message});
//   }
// });

// app.get('/api/product/:id', async (req, res) => {
//   try{
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   }catch (error) {
//     res.status(500).json({message: error.message});
//   }
// })

// app.post('/api/products', async (req, res) => {
//   // console.log(req.body);
//   // res.send(req.body);
//   try{
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   }catch (error) {
//     res.status(500).json({message: error.message});
//   }
// })

// app.put('/api/product/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if(!product) {
//       return res.status(404).json({message: "Product not found"});
//     }
//     const updateProduct = await Product.findById(id);
//     res.status(200).json(updateProduct);
//   }catch(error) {
//     res.status(500).json({message: error.message});
//   }
// });

mongoose
  .connect(
    "mongodb+srv://keerthikat2021eee:sUvjRHr2jKzMKxaa@backenddb.d4zqok0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
