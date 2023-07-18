import React from 'react';
import {LearnMoreContainerPress} from './styles';
import {Column, CustomText, Row, Separator} from '../index';
import {Colors, t} from '../../resources';
import BusinessStatisticsIcon from '../../icons/BusinessStatisticsIcon';

const LearnMoreCard = () => {
  return (
    <LearnMoreContainerPress>
      <Row justifyContent={'space-between'}>
        <Column>
          <CustomText semiBold size={16} color={Colors.white}>
            {t('learnMore')}
          </CustomText>
          <Separator y={10} />
          <CustomText size={12} color={Colors.white}>
            {t('checkOutTopTips')}
          </CustomText>
        </Column>
        <BusinessStatisticsIcon />
      </Row>
    </LearnMoreContainerPress>
  );
};

export default LearnMoreCard;
