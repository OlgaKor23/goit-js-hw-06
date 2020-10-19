const users = [
	{ name: 'Moore Hensley', gender: 'man'},
	{ name: 'Sharlene Bush', gender: 'man'},
	{ name: 'Carey Barr', gender: 'women'},
];

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.name);
};

console.log(getUsersWithGender(users, 'man')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]