/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { AppState, AppStateStatus, Platform, View } from 'react-native';
import { focusManager } from '@tanstack/react-query';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

// import { SnackBarProvider } from './src/providers/SnackBarProvider';
import QueryProvider from './src/services/client/query-provider';
import { AuthProvider } from './src/providers/AuthProvider';
import { useAuthData } from './src/hooks/useAuthData';
import { APP_NOT_READY } from './src/utils/constants';
import { RootNavigator } from './src/navigator';

const App = () => {
  const { isReady: isSetupStateReady, authData, setAuthData } = useAuthData();

  const navigationRef = useNavigationContainerRef();

  function onAppStateChange(status: AppStateStatus) {
    const isWEB = Platform.OS === 'web';

    // React Query already supports in web browser refetch on window focus by default
    if (!isWEB) {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const appState = AppState.addEventListener('change', (state) => {
      onAppStateChange(state);
    });

    return () => {
      appState.remove();
    };
  }, []);

  useEffect(() => {
    if (isSetupStateReady) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 5);
    }
  }, [isSetupStateReady]);

  if (!isSetupStateReady) {
    // eslint-disable-next-line react-native/no-inline-styles
    return <View style={[{ flex: 1, backgroundColor: 'white' }]} testID={APP_NOT_READY} />;
  }

  return (
    <QueryProvider>
      {/* <PaperProvider theme={theme}> */}
      <AuthProvider authData={authData} setAuthData={setAuthData}>
        {/* <SnackBarProvider> */}
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
        {/* </SnackBarProvider> */}
      </AuthProvider>
      {/* </PaperProvider> */}
    </QueryProvider>
  );
};

export default App;
