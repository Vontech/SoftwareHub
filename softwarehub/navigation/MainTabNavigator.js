import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ConfigScreen from '../screens/ConfigScreen';
import SettingsScreen from '../screens/SettingsScreen';
import OverviewScreen from '../screens/OverviewScreen';

const ConfigStack = createStackNavigator({
  Config: ConfigScreen,
});

ConfigStack.navigationOptions = {
  tabBarLabel: 'Config',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const OverviewStack = createStackNavigator({
  Overview: OverviewScreen,
});

OverviewStack.navigationOptions = {
  tabBarLabel: 'Overview',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-git-branch' : 'md-analytics'}
    />
  ),
};

export default createBottomTabNavigator({
  OverviewStack,
  ConfigStack,
  SettingsStack,
});
