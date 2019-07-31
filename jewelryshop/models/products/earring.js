module.exports = function (sequelize, DataTypes) {
    const Earring = sequelize.define("Earring", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        desc: DataTypes.STRING,
        price: DataTypes.FLOAT
    });
};
export default Earring;