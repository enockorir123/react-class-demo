import React, { useState } from 'react';

export default function UserInfoComputed() {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		dob: '',
		gender: '',
		github: '',
		residence: '',
	});

	const handleChange = (event) => {
		const { name, value, type } = event.target;

		if (type === 'radio') {
			console.log('Radio Jambo');
		}
		setUser((prevFormData) => ({
			...prevFormData,
			[name]: value, // computed property name
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);

		setUser({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			dob: '',
			gender: '',
			github: '',
			residence: '',
		});
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<form
				className="border flex gap-3 flex-col p-5 rounded-xl w-[350px]"
				onSubmit={handleSubmit}
			>
				<h2 className="font-bold text-2xl">Enter your information </h2>
				<input
					name="firstName"
					type="text"
					placeholder="Firstname"
					className="border outline-none p-1.5 rounded-md"
					value={user.firstName}
					onChange={handleChange}
				/>
				<input
					name="lastName"
					type="text"
					placeholder="Lastname"
					className="border outline-none p-1.5 rounded-md"
					value={user.lastName}
					onChange={handleChange}
				/>
				<input
					name="email"
					type="email"
					placeholder="Email Address"
					className="border outline-none p-1.5 rounded-md"
					value={user.email}
					onChange={handleChange}
				/>
				<input
					name="phone"
					type="tel"
					placeholder="Phone number"
					className="border outline-none p-1.5 rounded-md"
					value={user.phone}
					onChange={handleChange}
				/>
				<label className="flex flex-col gap-1.5 text-gray-500">
					Enter your date of birth
					<input
						name="dob"
						type="date"
						className="border outline-none p-1.5 rounded-md"
						value={user.dob}
						onChange={handleChange}
					/>
				</label>
				<label className="flex gap-1.5">
					<input
						name="gender"
						type="radio"
						value={'Male'}
						checked={user.gender === 'Male'}
						onChange={handleChange}
					/>
					Male
				</label>
				<label className="flex gap-1.5">
					<input
						name="gender"
						type="radio"
						value={'Female'}
						checked={user.gender === 'Female'}
						onChange={handleChange}
					/>
					Female
				</label>
				<input
					name="github"
					type="url"
					placeholder="Github"
					className="border outline-none p-1.5 rounded-md"
					value={user.github}
					onChange={handleChange}
				/>
				<input
					name="residence"
					type="text"
					placeholder="Place of residence"
					className="border outline-none p-1.5 rounded-md"
					value={user.residence}
					onChange={handleChange}
				/>

				<button className="bg-black text-white p-2 rounded-md">
					Submit
				</button>
			</form>
		</div>
	);
}
