import React, { Fragment, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function Users() {
	const [user, setUser] = useState([]);
	useEffect(() => {
		fetch('https://dummy.restapiexample.com/api/v1/employees').then((data) => {
			data.json().then((result) => {
				console.warn("result", result);
				setUser(result.data)
			});
		});
	});
	// const [user] = useState([
	// 	{ name: 'Ramesh', age: '23', address: 'Raipur' },
	// 	{ name: 'Rakesh', age: '25', address: 'Bhilai' },
	// 	{ name: 'Ramesh', age: '23', address: 'Raipur' },
	// 	{ name: 'Rakesh', age: '25', address: 'Bhilai' },
	// 	{ name: 'Ramesh', age: '23', address: 'Raipur' },
	// 	{ name: 'Rakesh', age: '25', address: 'Bhilai' },
	// 	{ name: 'Ramesh', age: '23', address: 'Raipur' },
	// 	{ name: 'Rakesh', age: '25', address: 'Bhilai' }
	// ]);

	// const user = [
	// 	{ name: 'Poshan', lname:'Dewangan', age: '23', address: 'Raipur', dist: 'Raipur'},
	// 	{ name: 'Rakesh', lname:'Dewangan', age: '25', address: 'Bhilai', dist: 'Raipur'},
	// 	{ name: 'Ramesh', lname:'Dewangan', age: '23', address: 'Raipur', dist: 'Raipur'},
	// 	{ name: 'Rakesh', lname:'Dewangan', age: '25', address: 'Bhilai', dist: 'Raipur'},
	// 	{ name: 'Ramesh', lname:'Dewangan', age: '23', address: 'Raipur', dist: 'Raipur'},
	// 	{ name: 'Rakesh', lname:'Dewangan', age: '25', address: 'Bhilai', dist: 'Raipur'},
	// 	{ name: 'Ramesh', lname:'Dewangan', age: '23', address: 'Raipur', dist: 'Raipur'},
	// 	{ name: 'Rakesh', lname:'Dewangan', age: '25', address: 'Bhilai', dist: 'Raipur'}
	// ];

	return (
		// <div>
		// 	<h1>Users Listing is here</h1>
		// 	{user.map((item, i) => (
		// 		<div key={i}>
		// 			{item.name}, {item.age}, {item.address}
		// 		</div>
		// 	))}
		// </div>

		<Fragment>
			{/* <Button variant="primary">Primary</Button>{' '} */}
			<h2>Users Listing is here</h2>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Salary</th>
						<th>Age</th>
					</tr>
					{user.map((item, index) => (
						<tr key={index}>
							<td> {item.id} </td>
							<td> {item.employee_name} </td>
							<td> {item.employee_salary} </td>
							<td> {item.employee_age} </td>
						</tr>
					))}
				</thead>
				<tbody>

				</tbody>
				{/* <tbody>
					{user.map((item, index) => (
						<tr>
							<td>{index}</td>
							<td>{item.name}</td>
							<td>{item.lname}</td>
							<td>{item.age}</td>
							<td>{item.address}</td>
							<td>{item.dist}</td>
						</tr>
					))}
				</tbody> */}
			</Table>
		</Fragment>
	);
}

export default Users;
