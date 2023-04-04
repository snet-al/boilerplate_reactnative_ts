import { Alert } from 'react-native';

const handleGlobalErrors = (errors: any) => {
  Alert.alert('Something went wrong');
};

export { handleGlobalErrors };
