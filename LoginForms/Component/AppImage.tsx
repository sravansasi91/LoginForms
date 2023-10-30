import React from 'react';
import {
  ImageSourcePropType,
  Image,
  StyleSheet,
  ViewStyle,
  ImageResizeMode,
} from 'react-native';

type Props = {
  style?: ViewStyle;
  source: ImageSourcePropType;
  tintColor?: any;
  size?: number;
  resizeMode?: ImageResizeMode | undefined;
};

const AppImage: React.FC<Props> = ({
  source,
  style,
  tintColor,
  size,
  resizeMode,
}) => {
  return (
    <Image
      source={source}
      style={[styles.default, style, {tintColor: tintColor}, size]}
      resizeMode={resizeMode}
    />
  );
};

const styles = StyleSheet.create({
  default: {},
});

export default AppImage;
