import React from "react";
import Counter from "./counter";
import Timer from "./timer";


//include images into your bundle



//create your first component
const Home = () => {
	return (

			<Counter  digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} digitSeven={seven} />

	)
}

export default Home