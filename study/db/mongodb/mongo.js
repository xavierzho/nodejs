// 对mongodb进行封装，默认支持连接池
"use strict";
const {connect} = require("mongodb");

const uri = "mongodb://localhost:27017";

async function insertMany(data, dbName, colName) {
    connect(uri, {useUnifiedTopology: true, useNewUrlParser: true}, (async (err, client) => {
        const col = client.db(dbName).collection(colName)
        const res = await col.insertMany(data);
        await client.close();
        console.log(res)
        console.log(res.insertedCount, res.insertedIds)
    }));
}

async function insertOne(data, dbName, colName) {
    connect(uri, {useUnifiedTopology: true, useNewUrlParser: true}, (async (err, client) => {
        const col = client.db(dbName).collection(colName)
        const res = await col.insertOne(data);
        await client.close();
        console.log(res.insertedId)
    }));
}

module.exports = {insertOne, insertMany}