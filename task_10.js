import users from './users.js';

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
