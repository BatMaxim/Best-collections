const {Sequelize} = require("sequelize");
const Collection = require("./Models/Collection");
const dbConfig = require("../databaseConfig.json");

const database = new Sequelize(dbConfig.name, dbConfig.name, dbConfig.password, {
    dialect: "mysql",
    host: dbConfig.path,
});

const SelectAllItems = async (model, params) => {
    await model.sync();
    const allItems = await model.findAll(params);
    return allItems;
}

const SelectItem = async (model, params) => {
    await model.sync();
    const item = await model.findOne(params);
    return item;
}

const  InsertItem = async (model, params) => {
    try {
        const newItem = await model.create(params)
        return newItem;
    }
    catch (err) {
        return err;
    }
}

module.exports = { database, SelectAllItems, SelectItem, InsertItem}