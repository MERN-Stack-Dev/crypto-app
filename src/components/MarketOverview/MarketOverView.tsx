import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect } from 'react';
import './MarketOverView.css';
import { data } from "./utils";

const MarketOverview: React.FC = () => {

  return (
    <div className="market-overview">
      <h2>Market Overview</h2>
      <div className="chart">
        {/* Chart content goes here */}
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            rangeSelector: {
              selected: 1
            },

            title: {
              text: 'AAPL Stock Price'
            },

            series: [{
              name: 'AAPL',
              data,
              tooltip: {
                valueDecimals: 2
              }
            }]
          }}
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
