import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import AppText from '../Component/Common/AppText';
import AppTextInputOtp from '../Component/Common/AppTextInputOtp';
import {commonString} from '../CommonConstant/CommonString';
import commonColor from '../CommonConstant/commonColor';
import React, {useState, useContext, useEffect} from 'react';
import AppButton from '../Component/Common/AppButton';
import {ScreenProp} from '../Navigation/RootStackScreen';
import {verificationRequest} from '../services/requestBody';

const VerificationScreen = ({navigation, route}: ScreenProp) => {
  const userID = route.params;
  console.log(userID);
  const [otpInput, setOtpInput] = useState<any>('');

  const validateInput = async () => {
    console.log('OtpValue', otpInput);

    if (otpInput.length === 6) {
      const response = await verificationRequest(userID, otpInput, Platform.OS);
      console.log('OtpValue', response?.error);
      if (response?.status) {
      } else {
        if (response?.error) {
          Alert.alert(response?.error);
        } else {
          Alert.alert(response?.message);
        }
      }
    } else {
      Alert.alert(commonString.error_empty_field);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <AppText
          text={commonString.verfication_code}
          style={[styles.headerStyle, {color: commonColor.BLACK}]}></AppText>
        <AppText
          text={commonString.verfication_code_header}
          style={[styles.subHeaderStyle, {color: commonColor.BLACK}]}></AppText>
        <AppTextInputOtp
          defaultValue={otpInput.text}
          handleCellTextChange={value => {
            console.log(value);
            if (value.length == 6) {
              console.log(value);
              setOtpInput(value);
            } else {
              console.log(value);
              setOtpInput('');
            }
          }}
          tintColor={commonColor.OTP_TINT}
        />

        <AppButton
          title={commonString.validate}
          containerStyle={styles.buttonSubmit}
          labelStyle={[styles.sumbitText, {color: commonColor.WHITE}]}
          onPress={() => {
            validateInput();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '60%',
    padding: 10,

    width: '80%',
    //height: '70%',
    borderRadius: 20,
  },

  headerStyle: {
    fontSize: 20,
    marginTop: '5%',
    fontWeight: 'bold',
  },
  subHeaderStyle: {
    fontSize: 14,
    marginTop: '7%',
  },

  buttonSubmit: {
    width: '50%',
    marginTop: '6%',
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  sumbitText: {
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});
export default VerificationScreen;
