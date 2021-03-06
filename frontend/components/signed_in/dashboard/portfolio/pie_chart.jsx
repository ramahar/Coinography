import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

class PortfolioPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.data = [];
    this.colors = ["rgb(134, 175, 58)", "rgb(247, 170, 4)", "rgb(86, 116, 226)", "rgb(191, 189, 189)"];

    const coins = ['BCH', 'BTC', 'ETH', 'LTC'];

    props.values.forEach((value, idx) => {
      this.data.push({ coin: coins[idx], value })
    });
  }

  render () {
    let value = this.props.values.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    let integer = Math.floor(value);
    let decimal = (value - integer).toFixed(2).toString()
    let decimalString = '.' + decimal.slice(-2);

    return (
      <PieChart width={578} height={335}>
        <Pie data={this.data} dataKey="value" nameKey="coin" cx="50%" cy="50%" innerRadius={130} outerRadius={140} fill="#82ca9d">
          {this.data.map((entry, idx) => <Cell key={idx} fill={this.colors[idx]} />)}
          <Label value={`$${value}`} position='center' fontSize={40} />
        </Pie>
      </PieChart>
    );
  }
}

export default PortfolioPieChart;
