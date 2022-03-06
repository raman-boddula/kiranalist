const connect = require("./src/configs/db");

const app = require("./src/index");

app.listen(process.env.PORT || "2345", async () => {
  await connect();
  console.log("Listening on port 2345");
});
