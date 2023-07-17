import React from 'react';
import {CustomText, DefaultPress, Row} from '../../index';
import Icon from 'react-native-vector-icons/Ionicons';

function HeaderHomeTitle() {
  // TODO: bring from redux
  const value = 1457.23;

  return (
    <DefaultPress>
      <Row>
        <CustomText semiBold>{`Account: $${value}`}</CustomText>
        <Icon name={'md-chevron-down'} />
      </Row>
    </DefaultPress>
  );
}

export default HeaderHomeTitle;
