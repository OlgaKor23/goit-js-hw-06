import users from './users.js';

const calculateTotalBalance = users => {
  // твой код
  return  users.reduce((acc, value) => acc + value.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916