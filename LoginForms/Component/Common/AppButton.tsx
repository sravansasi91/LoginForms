import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from 'react-native';

type Props = {
  title?: string;
  containerStyle?: any;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress: () => void;
};

const AppButton: React.FC<Props> = ({
  title,
  containerStyle,
  labelStyle,
  disabled = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.center, styles.default, , containerStyle]}>
      <Text style={[styles.defaultText, {}, labelStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    height: 40,
    borderRadius: 50,
  },
  defaultText: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppButton;
