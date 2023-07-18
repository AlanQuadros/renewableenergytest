import React from 'react';
import {LineChart} from 'react-native-chart-kit';

type FundCardChartProps = {
  data: any;
  color: string;
};

const FundCardChart = ({data, color}: FundCardChartProps) => {
  return (
    <LineChart
      data={{
        labels: [],
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={120}
      height={50}
      style={{flex: 1, paddingRight: 0, paddingLeft: 0, paddingBottom: 10}}
      chartConfig={{
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        color: () => color,
      }}
      fromZero={true}
      bezier
      withDots={false}
      withShadow={false}
      withInnerLines={false}
      withOuterLines={false}
      withVerticalLines={false}
      withHorizontalLines={false}
      withVerticalLabels={false}
      withHorizontalLabels={false}
    />
  );
};

export default FundCardChart;
