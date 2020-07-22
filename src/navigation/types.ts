import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTES} from './routes';
import {RouteProp} from '@react-navigation/native';

export type OnboardingStackParamList = {
  Splash: undefined;
  Registration: undefined;
  Main: undefined;
};

export type OnboardingStackNavigationProp = StackNavigationProp<
  OnboardingStackParamList
>;

export type OnboardingStackRouteProp = RouteProp<
  MainStackParamList,
  ROUTES.Home
>;

export type OnboardingStackProps = {
  navigation: OnboardingStackNavigationProp;
  route: OnboardingStackRouteProp;
};

export type MainStackParamList = {
  Home: undefined;
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

export type MainStackRouteProp = RouteProp<MainStackParamList, ROUTES.Home>;

export type MainStackProps = {
  navigation: MainStackNavigationProp;
  route: MainStackRouteProp;
};
