import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import SingleAsset from '../screens/SingleAsset';
import Icon from 'react-native-vector-icons/AntDesign';
import {HeaderSignup, HeaderSingleAsset} from '../components';
import TabStack from './TabStack';

export type MainStackParamList = {
  Login: undefined;
  Signup: undefined;
  Tabs: undefined;
  SingleAsset: {
    fund: any;
  };
};

const Stack = createStackNavigator<MainStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name={'Signup'}
        component={Signup}
        options={{
          headerBackImage: () => (
            <Icon name={'arrowleft'} size={24} style={{marginLeft: 20}} />
          ),
          headerBackTitleVisible: false,
          headerTitle: () => <HeaderSignup />,
        }}
      />
      <Stack.Screen
        name={'Tabs'}
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SingleAsset'}
        component={SingleAsset}
        options={({route}: any) => ({
          headerBackImage: () => (
            <Icon name={'arrowleft'} size={24} style={{marginLeft: 20}} />
          ),
          headerBackTitleVisible: false,
          headerTitle: () => <HeaderSingleAsset fund={route.params.fund} />,
        })}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
