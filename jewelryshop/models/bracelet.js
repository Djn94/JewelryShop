module.exports = function (sequelize, DataTypes) {
    const Bracelet = sequelize.define("Bracelet", {
        name: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: false },
        desc: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
    });
    return Bracelet;
};
