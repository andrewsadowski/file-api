const {ObjectID} = require('mongodb');

const {mongoose} =  require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59458719a9e761bd2054e80c';

// User.findById(id).then((user) => {
//     if (!user) {
//         return console.log('User not found');
//     }
//     console.log('User by id', user);
// }).catch((e) => console.log(e));

User.findById('59458719a9e761bd2054e80c').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log(e);
});


// var id = '59545ef7b94d2b661b3aa85e11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// };

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos); 
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo); 
// // });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo); 
// }).catch((e) => console.log(e));