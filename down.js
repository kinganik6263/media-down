const express = require('express');
const app = express();
const { tikdown, fbdown2, instagram, ytdown } = require("nayan-media-downloader");





app.get("/facebook", (req, res) => {
const key = "Nayan"
const link = req.query.link;
fbdown2(link, key).then(data => {
res.send(data)
console.log(data)
})});

app.get("/tiktok", (req, res) => {
const link = req.query.link;
tikdown(link).then(data => {
res.send(data)})});


app.get("/instagram", (req, res) => {
const link = req.query.link;
instagram(link).then(data => {
    res.send(data)
})});


app.get("/youtube", (req, res) => {
const link = req.query.link
ytdown(link).then(data => {
    res.send(data)
})
})


















module.exports = app;



// http://localhost:8080/down?link=https://youtu.be/-7q1hdWti4Q?si=sAD5BAMa4HTdKQfo
