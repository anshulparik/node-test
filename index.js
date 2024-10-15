import express from "express"
import fs from 'fs'
import { methodCheck, checkURL, errorHandler } from "./middlewares/methodCheck.js";
import { add } from "./calculator.js";

const app = express();

const port = 5000;

app.use(express.json())
app.use(methodCheck)
app.use(checkURL);
app.get('/', (_req, res) => {
    try {
        const content = fs.readFileSync('./read.txt', 'utf-8');
        const replaceTag = content.replace(/\r/g, "");
        const numStrArr = replaceTag.split("\n");
        const numArr = numStrArr.map((item) => +item);
        const sum = add(numArr);
        res.status(200).json(sum)
    } catch (error) {
        console.log(error, "====err")
    }
})

app.post('/', (req, res) => {
    try {
        // console.log(req, "====== REQ")
        const body = req.body;
        console.log("i m run", body)
        res.status(201).send(body);
    } catch (error) {
        console.log(error)
    }
})


app.listen(port, () => {
    console.log("Server is up!")
});