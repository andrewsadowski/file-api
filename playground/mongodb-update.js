// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5944829b3810d3b75625612f')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//     console.log(result);
//    });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('593c8f206aa6b2608a521323')
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});