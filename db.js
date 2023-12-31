const { MongoClient } = require('mongodb');
let dBConnection;
const uri = 'mongodb+srv://nsikakakpan007:1d0rJ8y0k1fA58ro@cluster0.kbaodmf.mongodb.net/?retryWrites=true&w=majority'
module.exports = {
    connectToDb: (cb) => {
        // MongoClient.connect('mongodb://localhost:27017/Bookstore')
        MongoClient.connect(uri)
        .then((client) => {
            dBConnection = client.db();
            return cb();
        })
        .catch((err) => {
            console.log(err);
            return cb(err);
        })
    },
    getDb: () => dBConnection
}