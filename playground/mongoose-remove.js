const {ObjectID} = require('mongodb');

const {mongoose} =  require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59627ef4b76bb47ea493abeb'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('59627ef4b76bb47ea493abeb').then((todo) => {
    console.log(todo);
});