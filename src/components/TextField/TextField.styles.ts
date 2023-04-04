import { StyleSheet } from 'react-native';
import { blue_6, gray_1, gray_2, gray_3, gray_5, gray_7, gray_8, gray_9, red_6 } from '../../styles/colors';
// import { InterRegular } from '@app/styles/fonts';

const makeStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      // marginTop: 26,
    },
    inputTitle: {
      fontSize: 15,
      fontWeight: '500',
      lineHeight: 22,
      color: gray_8,
      marginBottom: 2,
      marginVertical: 10,
    },
    inputContainer: {
      borderWidth: 1,
      borderRadius: 4,
      borderStyle: 'solid',
      borderColor: gray_5,
      padding: 12,
      paddingRight: 0,
      height: 48,
      backgroundColor: gray_1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    largeTextArea: {
      height: 120,
      alignItems: 'flex-start',
      padding: 0,
      paddingHorizontal: 12,
    },
    textArea: {
      height: 72,
      alignItems: 'flex-start',
      padding: 0,
      paddingHorizontal: 12,
    },
    disabledColor: {
      backgroundColor: gray_3,
    },
    inputStyle: {
      flexGrow: 1,
      minHeight: 48,
      color: gray_9,
      // fontFamily: InterRegular,
    },

    iconSpace: {
      marginRight: 10.5,
    },
    iconEnd: {
      paddingRight: 15,
    },
    isFocused: {
      borderColor: blue_6,
      elevation: 2,
      shadowColor: blue_6,
    },
    errorText: {
      // fontFamily: InterRegular,
      fontSize: 13,
      lineHeight: 16,
      color: red_6,
      marginLeft: 10,
      marginTop: 5,
    },
    labelContainer: {
      flexDirection: 'row',
    },
    requieredAsterix: {
      color: red_6,
      marginRight: 4,
    },
    errorBorderColor: {
      borderColor: red_6,
    },
    helperTextContainer: {
      flexDirection: 'row',
      marginLeft: 10,
      marginTop: 5,
    },
    helperText: {
      // fontFamily: InterRegular,
      fontSize: 13,
      lineHeight: 18,
      color: gray_8,
      marginLeft: 5,
    },

    descriptionContainer: {
      marginVertical: 4,
    },
    description: {
      // fontFamily: InterRegular,
      fontSize: 12,
      lineHeight: 16,
      color: gray_7,
    },
    buttonText: {
      // fontFamily: InterRegular,
      fontSize: 14,
      lineHeight: 24,
      color: gray_8,
    },
    buttonStyle: {
      backgroundColor: gray_2,
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 1,
      borderColor: gray_5,
      height: 46,
      flexGrow: 0,
      paddingHorizontal: 5,
    },
  });

export default makeStyles;
