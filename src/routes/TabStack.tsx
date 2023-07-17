import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Trade from '../screens/Trade';
import Portfolio from '../screens/Portfolio';
import HomeIcon from '../icons/HomeIcon';
import TradeIcon from '../icons/TradeIcon';
import PortfolioIcon from '../icons/PortfolioIcon';
import {Colors, t} from '../resources';
import {CustomText, HeaderHome} from '../components';

const Tab = createBottomTabNavigator();

const TABS = {
  Home: 'Home',
  Trade: 'Trade',
  Portfolio: 'Portfolio',
};

const screenOptions = ({route}: any) => {
  return {
    tabBarIcon: ({focused}: any) => {
      switch (route.name) {
        case TABS.Home:
          return <HomeIcon focused={focused} />;
        case TABS.Trade:
          return <TradeIcon focused={focused} />;
        case TABS.Portfolio:
          return <PortfolioIcon focused={focused} />;
        default:
          return null;
      }
    },
    tabBarLabel: ({focused}: any) => {
      let title = '';
      switch (route.name) {
        case TABS.Home:
          title = t('home');
          break;
        case TABS.Trade:
          title = t('trade');
          break;
        case TABS.Portfolio:
          title = t('portfolio');
          break;
      }

      return (
        <CustomText
          color={focused ? Colors.purple : Colors.black}
          size={10}
          bold={!focused}>
          {title}
        </CustomText>
      );
    },
  };
};

function TabStack() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          header: () => <HeaderHome />,
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
            elevation: 0,
          },
        }}
      />
      <Tab.Screen name={t('trade')} component={Trade} />
      <Tab.Screen name={t('portfolio')} component={Portfolio} />
    </Tab.Navigator>
  );
}

export default TabStack;
