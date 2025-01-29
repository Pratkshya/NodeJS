const http = require("http");
const  express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Pratkshya");
});

app.get("/about", (req, res) => {
    return res.send("This is my Web Server");
});

function myHandler(req, res) 
{
    const myServer = http.createServer((req, res) =>{
    console.log("New response recorded.");
    res.end("Hello from server");
});
}

app.listen(8000, () => console.log("Server Started."))

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started."));
