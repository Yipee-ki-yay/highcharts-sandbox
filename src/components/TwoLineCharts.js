import React, { useState } from "react";
import LineChart from "./LineChart";

const TwoLineCharts = () => {
  const [isShow, setIsShow] = useState(true);
  const handleCompareCharts = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="two-charts-wrapper">
      <div className="two-charts__item">
        <button onClick={handleCompareCharts}>Compare</button>
        <LineChart />
      </div>
      {isShow && (
        <div className="two-charts__item">
          <LineChart />
        </div>
      )}
    </div>
  );
};

export default TwoLineCharts;
