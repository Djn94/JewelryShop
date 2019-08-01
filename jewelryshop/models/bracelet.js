module.exports = function (sequelize, DataTypes) {
    const Bracelets = sequelize.define("Bracelets", {
        name: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: false },
        desc: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
    });
    return Bracelets;
};
