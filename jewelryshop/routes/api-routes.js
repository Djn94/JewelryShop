const db = require("../models");
module.exports = function (app) {
    app.get("/api/necklaces", function (req, res) {
        db.Necklaces.findAll({}).then(function (neck) {
            res.json(neck);
        })
    });
    app.get("/api/bracelets", function (req, res) {
        db.Bracelets.findAll({}).then(function (brace) {
            res.json(brace);
        })
    });
    app.get("/api/earrings", function (req, res) {
        db.Earrings.findAll({}).then(function (ear) {
            res.json(ear);
        })
    });


}
db.Necklaces.create({
    name: "testNeck",
    image: "testimg",
    desc: "testdesc",
    price: 20.00


}).then(function (neck) {
    console.log(neck);
});
