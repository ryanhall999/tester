import React, { useState } from 'react';
import moment from 'moment';
import './thisWeek.css';

export default function ThisWeeek() {
  const now = moment().startOf('week');
  const initialWeek = [now];

  let i = 0;
  while (initialWeek.length < 7) {
    initialWeek.push(moment(now).add('day', ++i));
  }
  const [week, setWeek] = useState(initialWeek);
  const previous = () => {
    let newWeek = week.map(day => {
      return day.add(-1, 'week');
    });
    setWeek(newWeek);
  };
  const next = () => {
    let newWeek = week.map(day => {
      return day.add(1, 'week');
    });
    setWeek(newWeek);
  };

  return (
    <div>
      <div className="day-container">
        {week.map((day, idx) => {
          return (
            <div id="days" key={idx}>
              {day.format('dddd MMMM Do YYYY')}
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={previous}>Previous Week</button>
        <button onClick={next}>Next Week</button>
      </div>
    </div>
  );
}
