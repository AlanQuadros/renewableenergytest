import React, {useState} from 'react';
import FilterItem from './FilterItem';
import {Column, Row} from '../index';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

type SingleAssetChartProps = {
  data: any;
  color: string;
};

function SingleAssetChart({data, color}: SingleAssetChartProps) {
  const [selectedFilter, setSelectedFilter] = useState('1d');

  return (
    <Column>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get('screen').width}
        height={153}
        style={{flex: 1, paddingRight: 0, paddingLeft: 0, paddingBottom: 10}}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          color: () => color,
        }}
        fromZero={true}
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLines={false}
        withHorizontalLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
      />
      <Row justifyContent={'space-between'}>
        <FilterItem
          label={'1h'}
          selected={selectedFilter === '1h'}
          onPress={setSelectedFilter}
        />
        <FilterItem
          label={'1d'}
          selected={selectedFilter === '1d'}
          onPress={setSelectedFilter}
        />
        <FilterItem
          label={'1w'}
          selected={selectedFilter === '1w'}
          onPress={setSelectedFilter}
        />
        <FilterItem
          label={'1m'}
          selected={selectedFilter === '1m'}
          onPress={setSelectedFilter}
        />
        <FilterItem
          label={'1y'}
          selected={selectedFilter === '1y'}
          onPress={setSelectedFilter}
        />
        <FilterItem
          label={'All'}
          selected={selectedFilter === 'All'}
          onPress={setSelectedFilter}
        />
      </Row>
    </Column>
  );
}

export default SingleAssetChart;
