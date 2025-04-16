import React, { useState } from 'react';

export default function UserInfo() {
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
					type="text"
					placeholder="Firstname"
					className="border outline-none p-1.5 rounded-md"
					value={user.firstName}
					onChange={(event) =>
						setUser({
							...user,
							firstName: event.target.value,
						})
					}
				/>
				<input
					type="text"
					placeholder="Lastname"
					className="border outline-none p-1.5 rounded-md"
					value={user.lastName}
					onChange={(event) =>
						setUser({
							...user,
							lastName: event.target.value,
						})
					}
				/>
				<input
					type="email"
					placeholder="Email Address"
					className="border outline-none p-1.5 rounded-md"
					value={user.email}
					onChange={(event) =>
						setUser({
							...user,
							email: event.target.value,
						})
					}
				/>
				<input
					type="tel"
					placeholder="Phone number"
					className="border outline-none p-1.5 rounded-md"
					value={user.phone}
					onChange={(event) =>
						setUser({
							...user,
							phone: event.target.value,
						})
					}
				/>
				<label className="flex flex-col gap-1.5 text-gray-500">
					Enter your date of birth
					<input
						type="date"
						className="border outline-none p-1.5 rounded-md"
						value={user.dob}
						onChange={(event) =>
							setUser({
								...user,
								dob: event.target.value,
							})
						}
					/>
				</label>
				<label className="flex gap-1.5">
					<input
						type="radio"
						value={'Male'}
						checked={user.gender === 'Male'}
						onChange={(event) =>
							setUser({
								...user,
								gender: event.target.value,
							})
						}
					/>
					Male
				</label>
				<label className="flex gap-1.5">
					<input
						type="radio"
						value={'Female'}
						checked={user.gender === 'Female'}
						onChange={(event) =>
							setUser({
								...user,
								gender: event.target.value,
							})
						}
					/>
					Female
				</label>
				<input
					type="url"
					placeholder="Github"
					className="border outline-none p-1.5 rounded-md"
					value={user.github}
					onChange={(event) =>
						setUser({
							...user,
							github: event.target.value,
						})
					}
				/>
				<input
					type="text"
					placeholder="Place of residence"
					className="border outline-none p-1.5 rounded-md"
					value={user.residence}
					onChange={(event) =>
						setUser({
							...user,
							residence: event.target.value,
						})
					}
				/>

				<button className="bg-black text-white p-2 rounded-md">
					Submit
				</button>
			</form>
		</div>
	);
}
