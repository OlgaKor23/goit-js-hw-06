const users = [
	{ name: 'Ross Vazquez', age: 20 },
	{ name: 'Elma Head', age: 30},
	{ name: 'Carey Barr', age: 20},
	{ name: 'Sharlene Bush', age: 40 },
	{ name: 'Blackburn Dotson', age: 30},
	{ name: 'Sheree Anthony', age: 40},
];

const getUsersWithAge = (users, min, max) => {
  // твой код
  return users.filter(user => user.age === min || user.age === max);
};


console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]