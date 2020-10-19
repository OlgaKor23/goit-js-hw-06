const users = [
	{ name: 'Ross Vazquez', skills:  ['js', 'nodejs']},
	{ name: 'Sharlene Bush', skills: ['html', 'js', 'nodejs']},
	{ name: 'Elma Head', skills: ['html', 'js', 'nodejs', 'css', 'react']},
	{ name: 'Carey Barr',  skills: ['html', 'js', 'nodejs', 'css', 'react']},
	{ name: 'Sharlene Bush', skills: ['html', 'js', 'nodejs', 'scss', 'react']},
	{ name: 'Blackburn Dotson',  skills: ['html', 'js', 'nodejs']},
	{ name: 'Sheree Anthony', skills: ['html', 'js', 'nodejs', 'css', 'react']},
	{ name: 'Sharlene Bush', skills: ['html', 'js', 'nodejs', 'scss']},
];

const getSortedUniqueSkills = users => 
	users.reduce((acc, value) => {
		acc.push(...value.skills);

		return acc;
}, []);

const skills = getSortedUniqueSkills(users);

const getSkills = (acc, value) => {
	if(!acc.hasOwnProperty(value)) {
		acc[value] = 0;
	}

	acc[value] += 1;

	return acc;
};


const countSkills = skills => skills.reduce(getSkills, {});
const skillCount = countSkills(skills);

console.table(skillCount);
