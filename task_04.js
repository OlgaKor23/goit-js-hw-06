const users = [
	{ name: 'Moore Hensley', gender: 'man', online: true},
	{ name: 'Sharlene Bush', gender: 'woman', online: false},
	{ name: 'Carey Barr', gender: 'women', online: true},
];

const getInactiveUsers = (users) => {
	return users.filter(user => !user.online);
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson