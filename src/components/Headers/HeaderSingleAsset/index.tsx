import React from 'react';
import {Column, CustomText} from '../../index';
import {Colors} from '../../../resources';

type HeaderSingleAssetProps = {
  fund: any;
};

const HeaderSingleAsset = ({fund}: HeaderSingleAssetProps) => {
  return (
    <Column>
      <CustomText textAlign={'center'} semiBold size={17}>
        {fund.name}
      </CustomText>
      <CustomText textAlign={'center'} color={Colors.grey} size={13}>
        {fund.acronym}
      </CustomText>
    </Column>
  );
};

export default HeaderSingleAsset;
