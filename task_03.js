import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.name);
};

console.log(getUsersWithGender(users, 'man')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]