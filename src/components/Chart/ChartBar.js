import React from 'react';
import './ChartBar.css';
function ChartBar(props) {
  let heightPer = '0%';
  if (props.max > 0) {
    heightPer = Math.round((props.value / props.max) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: heightPer }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
