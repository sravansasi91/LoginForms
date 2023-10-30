import React from 'react';
import {
  StyleSheet,
  TextInput,
  ViewStyle,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
  View,
  TouchableOpacity,
} from 'react-native';
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
  iconVisible?: boolean;
  source?: any;
  onPress?: any;
  onBlur?: (value: string) => void;
  returnKeyType?: any;
};

const AppTextInput: React.FC<Props> = ({
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
  iconVisible,
  source,
  onPress,
  secureTextEntry,
  onBlur,
  returnKeyType,
}) => {
  return (
    <View style={styles.passwordContainer}>
      <TextInput
        value={value}
        style={[styles.default, {}, style]}
        onChangeText={onChangeText}
        maxLength={maxLength}
        editable={editable}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        returnKeyType={returnKeyType}
        autoCorrect={false}
        spellCheck={false}
      />
    </View>
  );
};

AppTextInput.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  default: {
    fontSize: 13,
    width: '73%',
    paddingRight: 42,
    borderRadius: 20,
    height: 44,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: commonColor.GRY_BORDER,
  },
  passwordContainer: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    right: 5,
    marginTop: 15,
  },
});

export default AppTextInput;
