const connect = require("./configs/db");

const app = require("./index");
const PORT = process.env.PORT || 2345;
app.listen(PORT, async () => {
  await connect();
  console.log(`Listening on port ${PORT}`);
});
