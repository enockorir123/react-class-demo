import { v4 as uuidv4 } from 'uuid';

export const users = [
	{
		id: uuidv4(),
		firstName: 'Sung',
		lastName: ' Jinwoo',
		role: 'Protagonist',
	},
	{
		id: uuidv4(),
		firstName: 'James',
		lastName: 'Bond',
		role: 'Protagonist',
	},

	{
		id: uuidv4(),
		firstName: 'Raymond',
		lastName: 'Reddington',
		role: 'Protagonist/ Villain',
	},
	{
		id: uuidv4(),
		firstName: 'Walter',
		lastName: 'White',
		role: 'Protagonist/ Villain',
	},
	{
		id: uuidv4(),
		firstName: 'Jason',
		lastName: 'Statham',
		role: 'Protagonist',
	},
	{ id: uuidv4(), firstName: 'Fred', lastName: 'Krueger', role: 'Villain' },
	{
		id: uuidv4(),
		firstName: 'Michael',
		lastName: 'Scofield',
		role: 'Protagonist',
	},
];
