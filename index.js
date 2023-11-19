import express from "express"
import bodyParser from "body-parser"

const app = express();
let port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
let day = today.toLocaleDateString("en-IN", options);
let tasksList = [];

app.get("/", (req, res)=>{
    res.render("index.ejs", {
        title : `Today is ${day}`,
        Task : tasksList,
    });
});

app.post("/", (req, res) => {
    let task = req.body.text;
    tasksList.push(task);
    res.redirect('/');
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});