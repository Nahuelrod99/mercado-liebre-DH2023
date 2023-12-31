const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use("/public", express.static(publicPath));

let port = process.env.PORT || 7000;
app.listen(port, () => {console.log("Servidor Corriendo");});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"))
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"))
});



