const {Sequelize} = require("sequelize");
const Collection = require("./Collection");
const dbConfig = require("../../databaseConfig.json");

const database = new Sequelize(dbConfig.name, dbConfig.name, dbConfig.password, {
    dialect: "mysql",
    host: dbConfig.path,
});

const SelectAllItems = async (model, params) => {
    await model.sync();
    const allItems = await model.findAll(params);
    return allItems;
}

module.exports = { database, SelectAllItems}