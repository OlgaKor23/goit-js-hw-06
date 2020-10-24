import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  // твой код
  return users
  .map(user => user.name)
  .sort((prev, next) => prev.friends.length - next.friends.length);
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]