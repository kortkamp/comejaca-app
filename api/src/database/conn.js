const { MongoClient } = require('mongodb');
const connectionString = 'mongodb+srv://andre:andre@sandbox.mtgzq.mongodb.net/comejaca?retryWrites=true&w=majority'

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('comejaca');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};