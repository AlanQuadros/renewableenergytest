import React from 'react';
import {CustomText, Row} from '../index';
import {Colors} from '../../resources';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type PercentageValuationProps = {
  value: number;
};

const PercentageValuation = ({value}: PercentageValuationProps) => {
  const color = value > 0 ? Colors.lightGreen : Colors.lightRed;

  if (value === 0) {
    return <CustomText color={Colors.grey}>{'-0%'}</CustomText>;
  }

  return (
    <Row justifyContent={'flex-start'}>
      <Icon
        name={value >= 0 ? 'arrow-top-right' : 'arrow-bottom-right'}
        size={14}
        color={color}
      />
      <CustomText color={color}>{`${Math.abs(value)}%`}</CustomText>
    </Row>
  );
};

export default PercentageValuation;
