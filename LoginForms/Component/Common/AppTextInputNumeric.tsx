import React, {useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  ViewStyle,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import {ThemeContext} from '../../state/context';
import {themeColors} from '../../theme';
import commonColor from '../../CommonConstant/commonColor';

type Props = {
  placeHolder?: string;
  value: string;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
  maxLength?: number;
  placeholderTextColor?: string;
  editable?: boolean;
  autoCapitalize?: any;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
};

const AppTextInputNumeric: React.FC<Props> = ({
  placeHolder,
  value,
  style,
  onChangeText,
  maxLength,
  placeholderTextColor,
  editable,
  autoCapitalize,
  keyboardType,
  multiline,
  numberOfLines,
}) => {
  return (
    <TextInput
      placeholder={placeHolder}
      value={value}
      style={[styles.default, {}, style]}
      onChangeText={onChangeText}
      maxLength={maxLength}
      editable={editable}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    paddingHorizontal: 5,
    height: 45,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
  },
});

export default AppTextInputNumeric;
