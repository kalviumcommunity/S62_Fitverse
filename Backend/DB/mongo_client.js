if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config();
}
const mongoClient = require('mongodb').MongoClient;

const connection = new mongoClient(process.env.DB_URL)
async function getDBFunction(){
    let db = connection.db("S62_FITVERSE");
    db=db.collection('Users');
    return db;
}

module.exports = {getDBFunction, connection};