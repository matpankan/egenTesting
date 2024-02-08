const express = require("express");
const app = express();
const PORT = process.env.PORT||8080;
const ssim = require('ssim.js');
const fs = require("node:fs")

app.use(express.static("build"));
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server started" + PORT);

    app.post("/test", (req,res)=>{
        console.log(req.body)
        // const data = req.body.imglink.replace(/^data:image\/\w+;base64,/, '');
        // const buffer = Buffer.from(data, 'base64');
        // fs.writeFileSync("./spectrograms/test.png", buffer);
    })
})