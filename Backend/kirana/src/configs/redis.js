const Redis = require("redis");

const client = Redis.createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

module.exports = client;
