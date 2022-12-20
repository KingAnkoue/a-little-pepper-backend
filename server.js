const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT;
app.listen(3333, () => {
// app.listen(process.env.PORT || 3333, () => {
  console.log(`A Little Pepper is running on port: ${PORT}!!`);
});