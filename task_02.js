import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.find(user => user.eyeColor === color);
};

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
