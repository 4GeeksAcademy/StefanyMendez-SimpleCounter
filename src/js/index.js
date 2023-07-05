//import react into the bundle
import React  from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter";
import Timer from "./component/timer";




let counter = 0;

setInterval(() => {
	const seven = Math.floor(counter / 1000000) % 10;
	const six = Math.floor(counter / 100000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const three = Math.floor(counter / 100) % 10;
	const two = Math.floor(counter / 10) % 10;
	const one = Math.floor(counter / 1) % 10;
	counter++;


	//render your react application
	
	ReactDOM.render(
		<div>
			<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} digitSeven={seven}/>
		</div>
		,
		document.querySelector("#app"));
	}, 1000)

	
	ReactDOM.render(
		<Timer/>
		,document.querySelector("#app2")
	)
