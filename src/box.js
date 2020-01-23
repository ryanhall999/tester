import React from "react";

export default function Box(props) {
	console.log(props);
	return (
		<div
			className="box"
			style={{
				backgroundColor: `rgb(${props.red},${props.green},${props.blue}) `
			}}
		></div>
	);
}

// `rgb(${props.red}, ${props.green}, ${props.blue}) `
