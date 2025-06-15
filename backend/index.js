import express from 'express';
import { PORT } from "./config.js"
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/get-rating', (request,response) => {
  console.log(2)
  axios.get("https://codeforces.com/api/user.rating?handle=ThunderWasTaken")
  .then((res) => {
    response.status(200).send(res.data);
  }).catch((err) => {
    console.log(err);
  })
})

app.get('/', (req, res) => {
  console.log(req.method);
  console.log(req.params)
  res.status(234).send({ message: "works"});
})



app.listen(PORT, () => {
  console.log('app is live')
})

