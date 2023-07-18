import React from 'react';
import {CustomText} from '../index';
import {InvestCardContainer} from './styles';

type InvestCardProps = {
  item: any;
};

function InvestCard({item}: InvestCardProps) {
  return (
    <InvestCardContainer>
      <CustomText semiBold size={12}>
        {item.title}
      </CustomText>
    </InvestCardContainer>
  );
}

export default InvestCard;
