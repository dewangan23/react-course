import React from 'react';

class About extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		console.warn('props', this.props.name);
		// console.warn('Did Mount');
	}
	componentDidUpdate() {
		// console.log('Did Update');
		// alert('data is updated');
	}

	render() {
		return (
			<div className="About">
				<h1>About Component Class</h1>
			</div>
		);
	}
}
export default About;
