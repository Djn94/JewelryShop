module.exports = function (sequelize, DataTypes) {
    const Necklace = sequelize.define("Necklace", {
        name: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: false },
        desc: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false }
    });
    return Necklace;
};
