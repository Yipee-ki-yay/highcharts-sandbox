import AreaChart from "./components/AreaChart";
import ColumnChart from "./components/ColumnChart";
import ComparisonChart from "./components/ComparisonChart";
import LineChart from "./components/LineChart";
import OurChart from "./components/OurChart";
import TwoLineCharts from "./components/TwoLineCharts";

function App() {
  return (
    <div className="App">
      <OurChart />
      <hr />
      <h2>Column Chart</h2>
      <ColumnChart />
      <hr />
      <h2>Line Chart</h2>
      <LineChart />
      <hr />
      <h2>Comparison Chart</h2>
      <ComparisonChart />
      <hr />
      <h2>Two Line Charts</h2>
      <TwoLineCharts />
      <hr />
      <h2>Area Charts</h2>
      <AreaChart />
    </div>
  );
}

export default App;
