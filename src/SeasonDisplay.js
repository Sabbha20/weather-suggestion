import React from 'react';
import './SeasonDisplay.css';

const getSeasons = (latitude, month) => {
	if (month > 2 && month < 9) {
		return latitude > 0 ? 'summer' : 'winter';
	} else {
		return latitude > 0 ? 'winter' : 'summer';
	}
};

const seasonConfig = {
	summer: {
		text: "Let's hit the beach dude!!!",
		iconDisplay: 'sun',
	},
	winter: {
		text: 'Burr its chilly!!!',
		iconDisplay: 'snowflake',
	},
};

const SeasonDisplay = (props) => {
	const season = getSeasons(props.lat, new Date().getMonth());
	const { text, iconDisplay } = seasonConfig[season]; //text, iconDiaplay

	return (
		<div className={`season-display ${season}`}>
			<i className={` icon-left massive ${iconDisplay} icon`}></i>
			<h1>{text} </h1>
			<i className={` icon-right massive ${iconDisplay} icon`}></i>
		</div>
	);
};

export default SeasonDisplay;
