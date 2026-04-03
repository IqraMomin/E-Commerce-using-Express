const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");

app.use(express.static("public"));
app.use("/",userRouter);
app.use("/",productRouter);
app.use("/",cartRouter)

app.listen(port,()=>{
    console.log(`Server is Up and Running on port ${port}`);
})