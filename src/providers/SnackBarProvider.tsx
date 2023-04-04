import { Snackbar } from 'react-native-paper';
import React, { useCallback, useState } from 'react';

export type TSnackbarConfig = {
  message: string;
  duration?: number;
  visible: boolean;
};
type TSnackbarProvider = {
  snackbarState: TSnackbarConfig;
  showSnackBar: (message: string, duration?: number) => void;
};

type Props = {
  children?: React.ReactNode;
};

export const SnackbarContext = React.createContext<TSnackbarProvider | null>(null);

export const SnackBarProvider = ({ children }: Props) => {
  const [snackbarState, setSnackbarState] = useState<TSnackbarConfig>({ message: '', duration: 3000, visible: false });

  const handleShowSnackbar = useCallback((message: string, duration?: number) => {
    setSnackbarState({ message, duration, visible: true });
  }, []);

  const SnackbarContextValue = React.useMemo(
    () => ({
      snackbarState,
      showSnackBar: handleShowSnackbar,
    }),
    [snackbarState, handleShowSnackbar],
  );

  const hideSnackBar = useCallback(() => {
    setSnackbarState({ message: '', visible: false, duration: 300 });
  }, []);

  return (
    <SnackbarContext.Provider value={SnackbarContextValue}>
      <>{children}</>
      <Snackbar
        action={{
          label: 'close',
          onPress: hideSnackBar,
        }}
        onDismiss={hideSnackBar}
        visible={snackbarState.visible}
        duration={snackbarState.duration}
      >
        {snackbarState?.message}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
