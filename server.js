const express = require("express")
const app = express()

const staticFiles = express.static("public");
app.use(staticFiles);


app.use("/*", staticFiles);
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
