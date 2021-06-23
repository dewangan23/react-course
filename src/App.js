import './App.css';
import About from './About';
import Users from './Users';
import CreateUser from './CreateUser';
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Contact from './Contact';
import Home from './Home';

function App() {
	return (
		<div className="App">
			{/* <h1>Hello App</h1> */}
			{/* <About name='Poshan' /> */}
			{/* < Contact /> */}
			{/* <Users/> */}
			{/* <CreateUser /> */}
			<Router>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">
							<Link to="/">Home</Link>
						</Nav.Link>
						<Nav.Link href="#features">
							<Link to="/about">About</Link>
						</Nav.Link>
						<Nav.Link href="#pricing">
							<Link to="/contact">Contact Us</Link>
						</Nav.Link>
						<Nav.Link href="#pricing">
							<Link to="/list">User List</Link>
						</Nav.Link>
						<Nav.Link href="#pricing">
							<Link to="/create">Create User</Link>
						</Nav.Link>
					</Nav>
				</Navbar>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/list">
						<Users />
					</Route>
					<Route path="/create">
						<CreateUser />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				{/* <Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact Us</Link>
				<Link to="/list">User List</Link>
				<Link to="/create">Create User</Link> */}
			</Router>
		</div>
	);
}
export default App;
