import React from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';

type Props = {
  text: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: any;
};

const AppText: React.FC<Props> = ({text, style, numberOfLines}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.default, style]}>
      {text}
    </Text>
  );
};

AppText.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'DMSans-Regular',
  },
});

export default AppText;
