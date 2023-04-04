import React, { FC, useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TSignedInStackParamList } from './types';
import HomeScreen from '../screens/Home/HomeScreen';

const SignedInStack = createNativeStackNavigator<TSignedInStackParamList>();

type SignedInGroupInitialRouteName = 'HomeScreen';

const SignedInGroup: FC = () => {
  const initialRouteName = useMemo<SignedInGroupInitialRouteName>(() => 'HomeScreen', []);

  return (
    <SignedInStack.Navigator initialRouteName={initialRouteName}>
      <SignedInStack.Screen name="HomeScreen" component={HomeScreen} options={{}} />
    </SignedInStack.Navigator>
  );
};

export { SignedInGroup };
