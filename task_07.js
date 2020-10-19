const users =  [
  { id: '000', balance: 5},
  { id: '001', balance: 2 },
  { id: '002', balance: 17},
  { id: '003', balance: 8 },
  { id: '004', balance: 0 },
];

const calculateTotalBalance = users => {
  // твой код
  return  users.reduce((acc, value) => acc + value.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916