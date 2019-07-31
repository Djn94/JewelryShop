const express = require("express");
const db = require("./models");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(
            `App listening on port ${PORT} `
        )
    });
});