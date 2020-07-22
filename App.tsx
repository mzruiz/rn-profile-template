/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from './src/navigation/routes';
import {OnboardingStack} from './src/navigation/onboarding';

type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StatusBar hidden />
      <RootStack.Navigator
        initialRouteName={ROUTES.Onboarding}
        headerMode="none">
        <RootStack.Screen
          name={ROUTES.Onboarding}
          component={OnboardingStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
