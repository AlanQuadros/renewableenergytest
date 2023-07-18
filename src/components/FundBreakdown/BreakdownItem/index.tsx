import React from 'react';
import {
  BackgroundImage,
  BreakdownCardPress,
  BreakdownInnerContainer,
  Logo,
} from '../styles';
import {CustomText, Separator} from '../../index';
import {t} from '../../../resources';

type BreakdownItemProps = {
  item: any;
};

function BreakdownItem({item}: BreakdownItemProps) {
  return (
    <BreakdownCardPress>
      <BackgroundImage source={{uri: item.image}} resizeMode={'cover'} />
      <BreakdownInnerContainer>
        <Logo source={{uri: item.logo}} resizeMode={'center'} />
        <Separator y={10} />
        <CustomText>{item.info}</CustomText>
        <Separator y={10} />
        <CustomText size={12} textDecoration={'underline'}>
          {t('readMore')}
        </CustomText>
      </BreakdownInnerContainer>
    </BreakdownCardPress>
  );
}

export default BreakdownItem;
