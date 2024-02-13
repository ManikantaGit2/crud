const express = require("express");
require("dotenv").config();

const crud = require("./controllers/crud")

const createConnection = require("./dbconnection/mongoconnection");


const app = express();
app.use(express.json());

createConnection();



app.get("/",(req,res)=>{
    res.send({"message":"Hello Mani....."})
});

app.post("/createBlog",crud.createBlog); 
app.get("/getBlogs",crud.getBlogs); 
app.get("/getBlogs/:id",crud.getBlogById); 
app.put("/updatedBlogById/:id",crud.updateBlogById); 
app.delete("/deleteBlogById/:id",crud.deleteBlogById); 


app.listen(process.env.PORT);