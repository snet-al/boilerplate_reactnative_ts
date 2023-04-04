import React, { useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuthContext } from '../providers/hooks/useAuthContext';
import { SignedOutGroup } from './SignedOutGroup';
import { SignedInGroup } from './SignedInGroup';
import { TRootStackParamList } from './types';

const RootStack = createNativeStackNavigator<TRootStackParamList>();

const RootNavigator = (): JSX.Element => {
  const { authData } = useAuthContext();

  const initialRouteName = useMemo<'SignedInGroup' | 'SignedOutGroup'>(() => {
    if (authData?.accessToken) {
      return 'SignedInGroup';
    }

    return 'SignedOutGroup';
  }, [authData]);

  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      <RootStack.Screen name="SignedInGroup" component={SignedInGroup} options={{ headerShown: false }} />
      <RootStack.Screen name="SignedOutGroup" component={SignedOutGroup} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export { RootNavigator };
