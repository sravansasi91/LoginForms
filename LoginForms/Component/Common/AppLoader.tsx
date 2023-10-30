import React, {useContext} from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
  Modal,
} from 'react-native';
import commonColor from '../../CommonConstant/commonColor';

type Props = {};

const AppLoader: React.FC<Props> = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={commonColor.PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  mainContainer: {},
});

export default AppLoader;
