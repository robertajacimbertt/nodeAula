let express = require("express");
let msg = require("./modulo1");

const app = express();
const port = 3003;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    var pagina = "<html><body>Hello!</body></html>"
    res.send(pagina);
});

app.get("/notas", (req, res) => {
    res.render("notas/notas");
    console.log(msg);
});

// app.get("/estudantes", (req, res) => {
//     res.render("estudantes/estudantes");
// });

app.listen(port, function() {
    console.log(`Listening at http://localhost:${port}`);
});