import React from 'react';
import {CustomText, DefaultPress, Row} from '../../index';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

function HeaderHomeTitle() {
  const homeData = useSelector(({homeState}: any) => homeState);

  return (
    <DefaultPress>
      <Row>
        <CustomText semiBold>{`Account: $${homeData.account}`}</CustomText>
        <Icon name={'md-chevron-down'} />
      </Row>
    </DefaultPress>
  );
}

export default HeaderHomeTitle;
