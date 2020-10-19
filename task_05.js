const users = [
	{ name: 'Moore Hensley', eyeColor: 'blue', email:'shereeanthony@kog.com' },
	{ name: 'Sharlene Bush', eyeColor: 'black', email:'elmahead@omatom.com'},
	{ name: 'Carey Barr', eyeColor: 'green', email: 'bla-bla@gmail.com'},
];

const getUserWithEmail = (users, email) => users.find(x => x.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}