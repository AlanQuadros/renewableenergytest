import React from 'react';
import {Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../../routes/MainStack';

type SingleAssetScreenRouteProp = RouteProp<MainStackParamList, 'SingleAsset'>;

function SingleAsset() {
  const route = useRoute<SingleAssetScreenRouteProp>();
  const {fund} = route.params;

  return <Text>SingleAsset</Text>;
}

export default SingleAsset;
