import * as React from 'react';
import {OnboardingStackParamList, OnboardingStackProps} from '../types';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../routes';
import {Splash} from '../../screens/splash';

const OnboardingStackNavigator = createStackNavigator<
  OnboardingStackParamList
>();

export const OnboardingStack: React.FC<OnboardingStackProps> = () => {
  return (
    <OnboardingStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStackNavigator.Screen
        name={ROUTES.Splash}
        component={Splash}
      />
    </OnboardingStackNavigator.Navigator>
  );
};
