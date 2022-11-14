// import logo from './logo.svg'; not deleted comment -1
import "./App.css";
import React, { Component } from "react";
// import * as ReactDOM from 'react-dom';
// import Card from './Card';
// not used imports -3
import Cards from "./Cards";

// don't leave any extra spaces -3 
// always re-format your code
class App extends Component {
	render() {
		return (
			<div className="App">
				<Cards />
			</div>
		);
	}
}

export default App;
