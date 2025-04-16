import React from 'react';
import { users } from '../data/users';

export default function Users() {
	return (
		<div className="min-h-screen container mx-auto p-5">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
				{users.map((user) => (
					<div className="border rounded-xl p-5" key={user.id}>
						<h1 className="text-xl font-bold">
							{user.firstName} {user.lastName}
						</h1>
						<div className="flex gap-2 mt-2">
							<p className="font-mono">Role:</p>

							<p
								className={
									user.role === 'Protagonist'
										? 'font-bold text-green-500 font-mono'
										: user.role === 'Villain'
										? 'font-bold text-red-500 font-mono'
										: 'font-bold font-mono text-amber-500'
								}
							>
								{user.role}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
