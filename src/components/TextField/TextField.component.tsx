import React, { FC, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { gray_6 } from '../../styles/colors';
import { TextFieldProps } from './TextField.props';

import makeStyles from './TextField.styles';

const TextField: FC<TextFieldProps> = ({
  label,
  placeholder,
  iconStart,
  iconEnd,
  secondIconEnd,
  helperText,
  value,
  OnChange,
  notEditable,
  onSubmitEditing,
  required,
  errorText,
  onButtonPress,
  onPressIn,
  buttonContent,
  // buttonFilled,
  // size,
  passwordVisible,
  description,
  hasFlag,
  largeTextArea,
  textArea,
  extraStyles,
  autoFocus = false,
  keyboardType = 'default',
  // onKeyPress,
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [isFocused, setIsFocused] = useState(false);

  const borderStyle = () => {
    if (errorText) {
      return styles.errorBorderColor;
    }

    if (isFocused) {
      return styles.isFocused;
    }

    return {};
  };

  const isTextArea = () => {
    if (largeTextArea) {
      return styles.largeTextArea;
    }

    if (textArea) {
      return styles.textArea;
    }

    return {};
  };

  const showLabel = () => {
    if (label) {
      return (
        <View style={styles.labelContainer}>
          {required && <Text style={styles.requieredAsterix}>*</Text>}
          <Text style={styles.inputTitle}>{label}</Text>
        </View>
      );
    }

    return <View />;
  };

  const showDescription = () => {
    if (description) {
      return (
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      );
    }

    return <View />;
  };

  const inputWidth = () => {
    if (iconStart && hasFlag) {
      return { width: '80%' };
    }

    if ((iconStart && !secondIconEnd) || (secondIconEnd && !iconStart)) {
      return { width: '86%' };
    }

    if (secondIconEnd && iconStart) {
      return { width: '75%' };
    }

    return {};
  };

  return (
    <View style={[styles.container, extraStyles]}>
      {showLabel()}
      {showDescription()}

      <View style={[styles.inputContainer, isTextArea(), borderStyle(), notEditable ? styles.disabledColor : {}]}>
        {iconStart && <View style={styles.iconSpace}>{iconStart}</View>}
        <TextInput
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          style={[styles.inputStyle, inputWidth()]}
          onChangeText={(text) => {
            if (OnChange) {
              OnChange(text);
            }
          }}
          value={value?.toString()}
          placeholder={placeholder}
          editable={!notEditable}
          secureTextEntry={passwordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onPressIn={() => {
            if (onPressIn) {
              onPressIn();
            }
          }}
          multiline={largeTextArea || textArea}
          onSubmitEditing={() => {
            if (onSubmitEditing) {
              onSubmitEditing();
            }
          }}
          numberOfLines={largeTextArea ? 4 : textArea ? 3 : 1}
        />

        {iconEnd && <View style={[styles.iconEnd, secondIconEnd ? styles.iconSpace : {}]}>{iconEnd}</View>}
        {secondIconEnd && <View>{secondIconEnd}</View>}

        {/* TODO button component */}
        {buttonContent && (
          <TouchableOpacity
            onPress={() => onButtonPress && onButtonPress()}
            disabled={!onButtonPress}
            style={styles.buttonStyle}>
            <Text style={styles.buttonText}>{buttonContent}</Text>
          </TouchableOpacity>
        )}
      </View>

      {errorText && <Text style={styles.errorText}>{errorText}</Text>}

      {helperText && (
        <View style={styles.helperTextContainer}>
          <Icon name="exclamationcircleo" size={14} color={gray_6} />
          <Text style={styles.helperText}>{helperText}</Text>
        </View>
      )}
    </View>
  );
};

export { TextField };
