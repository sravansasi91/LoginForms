import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import AppImage from '../Component/AppImage';
import AppText from '../Component/Common/AppText';
import AppTextInput from '../Component/Common/AppTextInput';
import AppLoader from '../Component/Common/AppLoader';
import {commonString} from '../CommonConstant/CommonString';
import AppButton from '../Component/Common/AppButton';
import CheckBox from '@react-native-community/checkbox';
import {ScreenProp} from '../Navigation/RootStackScreen';
import {validateEmail} from '../Utils/Validation';
import commonColor from '../CommonConstant/commonColor';
import {loginRequest} from '../services/requestBody';

const LoginScreen = ({navigation}: ScreenProp) => {
  const login_logo_icon = '../assets/images/loginlogo.png';
  const login_backGround = '../assets/images/loginbackgroundd.png';
  const LogoIcon = require(login_logo_icon);
  const BackGroundIcon = require(login_backGround);

  const [email, setEmail] = useState({text: 'yamen54@innovationfactory.biz'}); //useState(initialEmail);
  const [password, setPassword] = useState({text: 'qweasd!@QWEASD12'}); //useState(initialEmail);
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [loader, setLoader] = useState(false);

  const validateLoginInput = async () => {
    if (email.text.length != 0 && password.text.length != 0) {
      if (validateEmail(email.text)) {
        setLoader(true);
        const response = await loginRequest(email.text, password.text);
        if (response?.status) {
          setLoader(false);
          navigation.navigate('HomeScreen');
        } else {
          setLoader(false);
          if (response?.error) {
            Alert.alert(response?.error);
          } else {
            Alert.alert(response?.message);
          }
        }
      } else {
        Alert.alert(commonString.enterEmail);
      }
    } else {
      if (email.text.length == 0 && password.text.length == 0) {
        Alert.alert(commonString.enterEmailorPasssword);
      } else if (email.text.length == 0) {
        Alert.alert(commonString.enterEmail);
      } else {
        Alert.alert(commonString.enterPassowrd);
      }
    }
  };
  return (
    <ImageBackground style={styles.container} source={BackGroundIcon}>
      <View style={styles.loginBorder}>
        <AppImage source={LogoIcon} style={styles.logo} />
        <AppText
          text={commonString.login_title}
          style={[styles.headerStyle, {color: commonColor.PRIMARY}]}></AppText>
        <AppText
          text={commonString.Email + ' ' + commonString.condition}
          style={[
            styles.textInputHeaderStyle,
            {color: commonColor.BLACK},
          ]}></AppText>
        <AppTextInput
          value={email.text}
          placeHolder={commonString.email_placeHolder}
          placeholderTextColor={commonColor.PLACEHOLDER}
          style={[styles.textInput, {color: commonColor.BLACK}]}
          onChangeText={value => {
            setEmail({text: value.trim()});
          }}
        />
        <AppText
          text={commonString.Password + ' ' + commonString.condition}
          style={[
            styles.textInputHeaderStyle,
            {color: commonColor.BLACK},
          ]}></AppText>
        <AppTextInput
          value={password.text}
          secureTextEntry={true}
          placeHolder={commonString.password_placeHolder}
          placeholderTextColor={commonColor.PLACEHOLDER}
          style={[styles.textInput, {color: commonColor.BLACK}]}
          onChangeText={value => {
            setPassword({text: value.trim()});
          }}
        />
        <View style={styles.row}>
          <CheckBox
            disabled={false}
            style={[styles.checkBoxStyle]}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            onCheckColor={commonColor.PRIMARY}
            onFillColor={commonColor.PRIMARY}
            onTintColor={commonColor.PRIMARY}
          />
          <AppText
            text={commonString.remember_Login}
            style={[
              styles.rememberStyle,
              {color: commonColor.LIGHT_GRAY},
            ]}></AppText>
          <AppText
            text={commonString.forget_password}
            style={[
              styles.forgetPaswordStyle,
              {color: commonColor.PRIMARY},
            ]}></AppText>
        </View>
        <AppButton
          title={commonString.login}
          containerStyle={styles.buttonSubmit}
          labelStyle={[styles.sumbitText, {color: commonColor.WHITE}]}
          onPress={() => {
            validateLoginInput();
          }}
        />
        <TouchableOpacity
          style={styles.bottomRow}
          onPress={() => navigation.navigate('RegistrationScreen')}>
          <AppText
            text={commonString.create_account_header}
            style={[
              styles.registrationBottomStyle,
              {color: commonColor.BLACK},
            ]}></AppText>
          <AppText
            text={commonString.create_account_subheader}
            style={[
              styles.registrationSubBottomStyle,
              {color: commonColor.PRIMARY},
            ]}></AppText>
        </TouchableOpacity>
      </View>
      {loader && <AppLoader />}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginBorder: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '35%',
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'grey',
    width: '80%',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  logo: {
    marginTop: '10%',
  },
  headerStyle: {
    fontSize: 24,
    marginTop: '5%',
    fontWeight: 'bold',
    padding: 5,
    paddingBottom: 13,
  },
  registrationHeaderStyle: {
    fontSize: 12,
    marginTop: '7%',
  },
  rememberStyle: {
    fontSize: 13,
    marginTop: '7%',
    fontWeight: '400',
  },
  registrationSubHeaderStyle: {
    fontSize: 13,
    marginTop: '7%',
    marginLeft: '2%',
    fontWeight: '400',
  },
  forgetPaswordStyle: {
    fontSize: 13,
    marginTop: '7%',
    marginLeft: '4%',
    fontWeight: '500',
  },
  checkBoxStyle: {},
  textInputHeaderStyle: {
    fontSize: 16,
    marginTop: '5%',
    fontWeight: '500',
    textAlign: 'left',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: '8%',
  },
  textInput: {
    width: '85%',
    marginTop: '2%',
    paddingStart: 20,
    fontSize: 14,
    fontWeight: '400',
  },
  buttonSubmit: {
    width: '50%',
    marginTop: '6%',
    backgroundColor: commonColor.PRIMARY,
    borderRadius: 20,
  },
  sumbitText: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    paddingTop: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    paddingTop: 13,
    paddingBottom: 7,
  },
  registrationBottomStyle: {
    fontSize: 14,
    marginTop: '7%',
    fontWeight: '500',
  },
  registrationSubBottomStyle: {
    fontSize: 14,
    marginTop: '7%',
    marginLeft: '2%',
    fontWeight: '600',
  },
});
export default LoginScreen;
