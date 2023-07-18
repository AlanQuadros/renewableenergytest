import React from 'react';
import {Column, CustomText, Separator} from '../index';
import Row from '../Row';
import InfoIcon from '../../icons/InfoIcon';
import {Colors} from '../../resources';

type InfoStatsItemProps = {
  info: any;
};

const InfoStatsItem = ({info}: InfoStatsItemProps) => {
  return (
    <Column style={{flex: 1}}>
      <Row justifyContent={'flex-start'}>
        <CustomText color={Colors.grey}>{info.name}</CustomText>
        <InfoIcon />
      </Row>
      <Separator y={3} />
      <CustomText>{info.value}</CustomText>
    </Column>
  );
};

export default InfoStatsItem;
