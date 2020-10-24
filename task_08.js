import users from './users.js';

const getUsersWithFriend = (users, friend) => {
  // твой код
return users.filter(user => user.friends === friend);

};

console.table(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]