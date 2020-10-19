const users = [
	{ name: 'Ross Vazquez', friend: 20},
	{ name: 'Elma Head', friend: 2},
	{ name: 'Carey Barr',  friend: 34},
	{ name: 'Sharlene Bush', friend: 5},
	{ name: 'Blackburn Dotson', friend: 4},
	{ name: 'Sheree Anthony', friend: 12},
];

const getNamesSortedByFriendsCount = users => {
  // твой код
  return users
  .map(user => user.name)
  .sort((prev, next) => (next.friend - prev.friend));
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]