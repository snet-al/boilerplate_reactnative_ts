import { ReactElement } from 'react';
import { TextInputProps } from 'react-native';

export interface TextFieldProps {
  autoFocus?: boolean;
  label?: string;
  value?: string;
  placeholder?: string;
  iconStart?: ReactElement;
  iconEnd?: ReactElement;
  secondIconEnd?: ReactElement;
  helperText?: string;
  errorText?: string;
  OnChange?: (text: string) => void;
  notEditable?: boolean;
  onButtonPress?: () => void;
  onSubmitEditing?: () => void;
  onKeyPress?: (e) => void;
  onPressIn?: () => void;
  buttonContent?: string | ReactElement;
  buttonFilled?: boolean;
  size?: string;
  required?: boolean;
  passwordVisible?: boolean;
  description?: string;
  isoCode?: string;
  hasFlag?: boolean;
  largeTextArea?: boolean;
  textArea?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  extraStyles?: {
    marginBottom: number;
  };
}
