let http = require("http");
let fs = require("fs");

let port = 3003;
let server = http.createServer(function(req, res) {
    let page = '';
    let route = req.url;

    if (route === "/") {
        res.end(fs.readFileSync("./index.html"));
    } else if (route === "/about") {
        route = req.url;
        console.log(route);
    } else {
        res.end("<html><body>nenhum</body></html>");
    }
});

server.listen(port);
console.log("Servidor escutando na porta ", port);