import React from 'react';

export default function Box(props) {
  console.log(props);
  return (
    <div className="box-container">
      <div
        className="box"
        style={{
          backgroundColor: `rgb(${props.colors.red},${props.colors.green},${props.colors.blue})`
        }}
      ></div>
    </div>
  );
}

// `rgb(${props.red}, ${props.green}, ${props.blue}) `
