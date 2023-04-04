import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import WalkthroughScreen from '../screens/Walkthrough/WalkthroughScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import { TSignedOutStackParamList } from './types';

const SignedOutStack = createNativeStackNavigator<TSignedOutStackParamList>();

const SignedOutGroup: FC = () => (
  <SignedOutStack.Navigator initialRouteName="Walkthrough">
    {/* <SignedOutStack.Screen name="Walkthrough" component={WalkthroughScreen} options={{ headerShown: false }} /> */}
    <SignedOutStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
  </SignedOutStack.Navigator>
);

export { SignedOutGroup };
