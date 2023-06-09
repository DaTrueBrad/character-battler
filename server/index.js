const express = require("express");
const cors = require("cors");
const fs = require("fs");
const db = require('./util/database')
const {Character} = require('./util/models')

const server = express();

server.use(express.json());
server.use(cors()); // this allows us to ahve our server on a diff port #

//! ENDPOINTS
server.post("/api/addChar", async (req, res) => {
  //TODO ADD CHARACTER TO DB
  await Character.create(req.body)
  res.status(200).send('success')
  // let characters = require("./characters");
  // let newCharacters = [...characters, req.body]
  // let newFile = `let characters = ${JSON.stringify(newCharacters)};

  // module.exports = characters`;
  // fs.writeFile("./server/characters.js", newFile, (err) => {
  //   if (err) {
  //     console.error(err);
  //   }
  // });
  // res.status(200).send(characters);
});

server.get('/api/characters', async (req, res) => {
  // let characters= require('./characters')
  let characters = await Character.findAll()
  res.status(200).send(characters)
})
db.sync()
server.listen(4004, () => console.log("Up on 4004"));
