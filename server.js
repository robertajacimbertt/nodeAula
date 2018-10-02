let http = require("http");

let port = 3003;
let server = http.createServer(function(req, res) {
    let page = '';
    let route = req.url;

    console.log(route);

    if (route === "/") {
        res.end("<html><body>barra</body></html>");
    } else if (route === "/about") {
        res.end("<html><body>Sobre</body></html>");
    } else {
        res.end("<html><body>nenhum</body></html>");
    }
});

server.listen(port);
console.log("Servidor escutando na porta ", port);