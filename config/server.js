let express = require("express");
let app = express();
let port = 3003;

app.listen(port, function() {
    console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;