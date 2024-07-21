import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect } from 'react';
import './MarketOverView.css';
import { options } from "./utils";

function MarketOverview() {

  return (
    <div className="market-overview">
      <h2>Market Overview</h2>
      <div className="chart">
        {/* Chart content goes here */}
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{ className: "highchart-container" }}
        />
      </div>
      <div className="time-frame">
        <button>1D</button>
        <button>7D</button>
        <button>1M</button>
        <button>3M</button>
        <button>ALL</button>
      </div>
    </div>
  );
}

export default MarketOverview;
