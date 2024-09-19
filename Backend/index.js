const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r=await axios.put(
      'https://api.chatengine.io/users/',
      {username: username,secret: username,firstname:username},
      {headers:{"private-key":"29acc1cf-cce5-42a9-b960-b01c5feb82dd"}}
    )
    return res.status(r.status).json(r.data);
  }
    catch(e){
      return res.status(e.response.status).json(e.response.data)  ;
    }
  // return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);