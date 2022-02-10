const fs = require("fs");
const axios = require("axios");

let ipfsArray = [];

for (let i = 0; i < 1000; i++) {
  let paddedHex =
    "0000000000000000000000000000000000000000000000000000000000000000" +
    i.toString(16).substr("-64");
  fs.readFile(`${__dirname}/export/${paddedHex}.png`, (err, data) => {});
}
