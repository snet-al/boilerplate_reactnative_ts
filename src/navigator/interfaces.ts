import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TRootStackParamList, TSignedInStackParamList, TSignedOutStackParamList } from './types';

export interface NRootStackProps {
  navigation: NativeStackNavigationProp<TRootStackParamList>;
}
export interface NSignedOutProps {
  navigation: NativeStackNavigationProp<TSignedOutStackParamList>;
}

export interface NSignedInProps {
  navigation: NativeStackNavigationProp<TSignedInStackParamList>;
}
