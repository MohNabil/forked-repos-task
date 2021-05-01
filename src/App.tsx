import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Favorites } from "./components/favorites/Favorites";
import { Search } from "./components/search/Search";
import { Details } from "./components/SearchDetails/Details";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<span className="title">Welcome to Search Github Forked Repos</span>
				<div className="links">
					<Link to="/" className="link">
						Home
					</Link>
					<Link to="/details" className="link">
						Result
					</Link>
					<Link to="/favorite" className="link">
						Favorites
					</Link>
				</div>
			</header>
			<Switch>
				<Route path="/" exact component={Search} />
				<Route path="/details" component={Details} />
				<Route path="/favorite" component={Favorites} />
			</Switch>
		</div>
	);
}

export default App;
