let express = require("express");

const app = express();
const port = 3003;

app.get("/", (req, res) => {
    res.send("Hello");
});

// app.get("/greet", (req, res) => {
//     res.send(`Hello ${req.query.name || "world"}!`);
// });

app.listen(port, function() {
    console.log(`Listening at http://localhost:${port}`);
});