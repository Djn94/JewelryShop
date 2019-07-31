module.exports = function (sequelize, DataTypes) {
    const Necklace = sequelize.define("Necklace", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        desc: DataTypes.STRING,
        price: DataTypes.FLOAT
    });
};
export default Necklace;