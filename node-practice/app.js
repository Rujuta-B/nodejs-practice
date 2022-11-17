const http = require("http");

const server = http.createServer((req, res) => {
  console.log("first");
  console.log(req.method, req.url);

  if (req.method === "POST") {
    let body = "";
    req.on("end", () => {
      const username = body.split("=")[1];
      res.end("Got the POST request");
    });
    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html"); // this tells the browser that our content is plain text
    res.end(
      "<form method='POST'><input type='text' name='username'><button type='submit'>Create User</button></form>"
    );
  }
});

server.listen(5000);
