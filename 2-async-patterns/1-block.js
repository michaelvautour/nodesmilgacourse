const http = require("http");

const port = 5001;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
    return;
  }
  if (req.url === "/about") {
    // BLOCKING CODE !!!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About page");
    return;
  }
  res.end("Error Page");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
