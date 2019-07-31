module.exports = function (sequelize, DataTypes) {
    const Bracelet = sequelize.define("Bracelet", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        desc: DataTypes.STRING,
        price: DataTypes.FLOAT
    });
};
export default Bracelet;