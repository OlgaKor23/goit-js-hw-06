const users = [
	{ name: 'Ross Vazquez', age: 20, friend: 'Briana Decker' },
	{ name: 'Elma Head', age: 30, friend: 'Goldie Gentry'},
	{ name: 'Carey Barr', age: 21,  friend: 'Briana Decker'},
	{ name: 'Sharlene Bush', age: 40, friend: 'Goldie Gentry' },
	{ name: 'Blackburn Dotson', age: 30, friend: 'Briana Decker'},
	{ name: 'Sheree Anthony', age: 41,  friend: 'Briana Decker'},
];

const getUsersWithFriend = (users, friend) => {
  // твой код
return users.filter(user => user.friend === friend);

};

console.table(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]