const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.json("Heelo from nodejs server");
});
server.listen(3000);
