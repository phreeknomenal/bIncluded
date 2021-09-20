import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* IMPORT COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';


/* FONTAWESOME IMPORTS */
import { library } from '@fortawesome/fontawesome-svg-core'; // import fa library
import { fab } from '@fortawesome/free-brands-svg-icons'; // import fa brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import fa solid icons

/* PAGE IMPORTS */
import Home from './pages/Home';

library.add(fab, fas); // call fa library function and include svg packages.

/* HOOK REACT EXAMPLE */
const App = (props:  AppProps) =>
{

	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
				<Footer />
			</Router>

		</>
	);
};

interface AppProps { }

export default App;
