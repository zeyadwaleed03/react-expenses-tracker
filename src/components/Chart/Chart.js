import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
function Chart(props) {
  const ValuesArr = props.dataPoints.map((data) => {
    return data.value;
  });
  const maxVal = Math.max(...ValuesArr);
  return (
    <div className="chart">
      {props.dataPoints.map((char) => {
        return (
          <ChartBar
            label={char.label}
            value={char.value}
            key={char.label}
            max={maxVal}
          />
        );
      })}
    </div>
  );
}

export default Chart;
