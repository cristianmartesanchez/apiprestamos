require("dotenv").config();

const app = require("./app");
require("./database");

(async () => {
  await app.listen(app.get("port"));
  console.log(`Api on port ${app.get("port")}`);
})();
