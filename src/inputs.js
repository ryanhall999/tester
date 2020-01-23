import React from 'react';

export default function Inputs(props) {
  return (
    <div>
      <div className="red">
        <input
          type="range"
          min="1"
          max="255"
          value="50"
          className="slider"
          onChange={props.handleChange}
        ></input>
      </div>
      <div className="green">
        <input
          type="range"
          min="1"
          max="255"
          value="50"
          className="slider"
          onChange={props.handleChange}
        ></input>
      </div>
      <div className="blue">
        <input
          type="range"
          min="1"
          max="255"
          value="50"
          className="slider"
          onChange={props.handleChange}
        ></input>
      </div>
    </div>
  );
}
