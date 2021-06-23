import React, { useState } from 'react';

function CreateUser() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');

	function makeuser() {
        let data={name,age,address}
		console.warn('called',data);
		alert("successfully create a user")
	}

	return (
		<div>
			<h3>Make a New User</h3>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				name="username"
				value={name}
				placeholder="UserName"
			/>
			<br />
			<br />
			<input type="type" onChange={(e) => setAge(e.target.value)} name="age" value={age} placeholder="Age" />
			<br />
			<br />
			<input
				type="text"
				onChange={(e) => setAddress(e.target.value)}
				name="address"
				value={address}
				placeholder="Address"
			/>
			<br />
			<br />
			<button onClick={makeuser}>Create User</button>
		</div>
	);
}
export default CreateUser;
