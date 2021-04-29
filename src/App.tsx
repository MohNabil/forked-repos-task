import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Search } from "./components/search/Search";
import { Details } from "./components/SearchDetails/Details";

function App() {
	return (
		<div className="App">
			<header className="App-header">Search Github Forked Repos</header>
			<Switch>
				<Route path="/" exact component={Search} />
				<Route path="/details" component={Details} />
			</Switch>
		</div>
	);
}

export default App;
