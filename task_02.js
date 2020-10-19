const users = [
	{ name: 'Moore Hensley', eyeColor: 'blue'},
	{ name: 'Sharlene Bush', eyeColor: 'black'},
	{ name: 'Carey Barr', eyeColor: 'green'},
];

const getUsersWithEyeColor = (users, color) => {
  return users.find(user => user.eyeColor);
};

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
