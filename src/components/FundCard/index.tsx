import React from 'react';
import {FundContainerPress} from './styles';
import {CustomText, PercentageValuation, Row, Separator} from '../index';
import WindIcon from '../../icons/WindIcon';
import SunIcon from '../../icons/SunIcon';
import NatureIcon from '../../icons/NatureIcon';
import FundCardChart from './FundCardChart';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../../routes/MainStack';

type HomeScreenProp = StackNavigationProp<MainStackParamList, 'Tabs'>;

type FundCardProps = {
  fund: any;
};

function FundCard({fund}: FundCardProps) {
  const navigation = useNavigation<HomeScreenProp>();

  function showFundIcon(icon: string) {
    switch (icon) {
      case 'wind':
        return <WindIcon />;
      case 'solar':
        return <SunIcon />;
      case 'nature':
        return <NatureIcon />;
      default:
        return null;
    }
  }

  function goToSingleAsset() {
    navigation.navigate('SingleAsset', {fund});
  }

  return (
    <FundContainerPress onPress={goToSingleAsset}>
      {showFundIcon(fund.icon)}
      <Separator y={5} />
      <CustomText size={12} semiBold>
        {fund.name}
      </CustomText>
      <Separator y={5} />
      <FundCardChart data={fund.chartData} color={fund.color} />
      <Separator y={5} />
      <Row justifyContent={'flex-start'}>
        <CustomText>{`$${fund.value}`}</CustomText>
        <Separator x={4} />
        <PercentageValuation value={fund.percentageValuation} />
      </Row>
    </FundContainerPress>
  );
}

export default FundCard;
