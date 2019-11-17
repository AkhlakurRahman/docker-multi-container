import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Link to='/' />
					<Link to='/other' />
				</header>
				<Route exact path='/' component={Fib} />
				<Route path='/other' component={OtherPage} />
			</div>
		</Router>
	);
}

export default App;
