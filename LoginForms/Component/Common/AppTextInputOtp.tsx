import React, {useContext, useRef} from 'react';
import {StyleSheet, TextInput, ViewStyle} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

type Props = {
  defaultValue: string;
  textInputStyle?: ViewStyle;
  secureTextEntry?: boolean;
  handleCellTextChange?: (value: string) => void;
  tintColor?: any;
  multiline?: boolean;
};

const AppTextInputOtp: React.FC<Props> = ({
  defaultValue,
  textInputStyle,
  handleCellTextChange,
  tintColor,
}) => {
  const INPUT = useRef<OTPTextView>(null);

  return (
    <OTPTextView
      ref={INPUT}
      defaultValue={defaultValue}
      handleTextChange={handleCellTextChange}
      inputCount={6}
      keyboardType="numeric"
      tintColor={tintColor}
      containerStyle={styles.textInputContainer}
      textInputStyle={styles.roundedTextInput}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    paddingHorizontal: 16,
    height: 45,
  },
  roundedTextInput: {
    marginTop: '3%',
    borderRadius: 5,
    borderWidth: 4,
  },
  textInputContainer: {
    marginTop: '3%',
  },
});

export default AppTextInputOtp;
