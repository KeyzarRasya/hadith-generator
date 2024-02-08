const { default: axios } = require("axios");
const express = require("express")
const path = require("path")
const app = express();

app.use(express.json())
app.use(express.static("views"))
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));

const API = 'https://random-hadith-generator.vercel.app/bukhari/'
app.get("/", (req, res) => {
    axios.get(API, {
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response => {
        res.render("home", {res:response.data.data})
    }).catch(err => console.log(err))
})

app.listen(3000, () => {
    console.log("On")
})