const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express();
const port = process.env.PORT || 8000;


const testingpath = path.join(__dirname,"../public") 
console.log(testingpath)
// app.use(express.static(testingpath))


const viewspath = path.join(__dirname,"../template/views")
const partialspath = path.join(__dirname,"../template/partials/")
app.set('views', viewspath);
app.set('partials', partialspath);
// console.log(path.join((__dirname,"../template/views")))

// to set the view engine
app.set("view engine", "hbs");

hbs.registerPartials(partialspath)

app.get("/",(req,res)=> {
    res.render("index",{ myname :"Pankaj Kumar is my name" });
})

// app.get("/",(req,res)=>{
//     res.send("hello from the main page");
// });

app.get("/about",(req,res)=>{
    res.send("hello   from the about us page")

})

// this is how to send JOSN data as the responce
app.get("/bio",(req,res)=>{
    res.send({
        name:"Pankaj",
        salary:"1 Crore"
    })

})

app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(port,()=>{
    console.log("the server is live on 8000 port");
});