import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import SingleAsset from '../screens/SingleAsset';
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderSignup from '../components/HeaderSignup';

export type MainStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  SingleAsset: undefined;
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
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'SingleAsset'} component={SingleAsset} />
    </Stack.Navigator>
  );
}

export default MainStack;
