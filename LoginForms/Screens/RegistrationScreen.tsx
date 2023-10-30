import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AppText from '../Component/Common/AppText';
import AppTextInput from '../Component/Common/AppTextInput';
import {commonString} from '../CommonConstant/CommonString';

import React, {useState} from 'react';
import AppButton from '../Component/Common/AppButton';
import CheckBox from '@react-native-community/checkbox';
import {ScreenProp} from '../Navigation/RootStackScreen';
import {registraionRequest} from '../services/requestBody';
import {validateEmail} from '../Utils/Validation';
import AppLoader from '../Component/Common/AppLoader';
import commonColor from '../CommonConstant/commonColor';

const RegistrationScreen = ({navigation}: ScreenProp) => {
  let initialValue: {text: string} = {text: ''};
  const [fullname, setFullName] = useState(initialValue);
  const [email, setEmail] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);
  const [confirmPassword, setConfirmPassword] = useState(initialValue);
  const [phonenumber, setPhoneNumber] = useState(initialValue);
  const [loader, setLoader] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const login_backGround = '../assets/images/loginbackgroundd.png';
  const BackGroundIcon = require(login_backGround);

  const validateRegistrationInput = async () => {
    if (
      email.text.length != 0 &&
      password.text.length != 0 &&
      confirmPassword.text.length != 0 &&
      phonenumber.text.length != 0
    ) {
      if (validateEmail(email.text)) {
        setLoader(true);
        const response = await registraionRequest(
          fullname.text,
          fullname.text,
          email.text,
          password.text,
          phonenumber.text,
        );
        console.log(response);
        setLoader(false);
        if (response?.status) {
          navigation.navigate('VerificationScreen', {
            userid: response?.data?.user_id,
          });
        } else {
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
      if (
        email.text.length == 0 ||
        password.text.length == 0 ||
        confirmPassword.text.length == 0
      ) {
        Alert.alert(commonString.error_empty_field);
      }
    }
  };
  return (
    <ImageBackground style={styles.container} source={BackGroundIcon}>
      <View style={styles.registrationBorder}>
        <AppText
          text={commonString.registration_title}
          style={[styles.headerStyle, {color: commonColor.PRIMARY}]}></AppText>
        <AppText
          text={commonString.full_name + ' ' + commonString.condition}
          style={[
            styles.textInputHeaderStyle,
            {color: commonColor.BLACK},
          ]}></AppText>
        <AppTextInput
          value={fullname.text}
          placeHolder={commonString.full_name_place_holder}
          placeholderTextColor={commonColor.PLACEHOLDER}
          style={[styles.textInput, {color: commonColor.BLACK}]}
          onChangeText={value => {
            setFullName({text: value.trim()});
          }}
        />
        <AppText
          text={commonString.Email + ' ' + commonString.condition}
          style={[
            styles.textInputHeaderStyle,
            {color: commonColor.BLACK},
          ]}></AppText>
        <AppTextInput
          value={email.text}
          placeHolder={commonString.email_place_holder}
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
          placeHolder={commonString.password_placeHolder}
          placeholderTextColor={commonColor.PLACEHOLDER}
          secureTextEntry={true}
          style={[styles.textInput, {color: commonColor.BLACK}]}
          onChangeText={value => {
            setPassword({text: value.trim()});
          }}
        />
        <AppText
          text={commonString.confirm_password + ' ' + commonString.condition}
          style={[
            styles.textInputHeaderStyle,
            {color: commonColor.BLACK},
          ]}></AppText>
        <AppTextInput
          value={confirmPassword.text}
          placeHolder={commonString.password_placeHolder}
          placeholderTextColor={commonColor.PLACEHOLDER}
          secureTextEntry={true}
          style={[styles.textInput, {color: commonColor.BLACK}]}
          onChangeText={value => {
            setConfirmPassword({text: value.trim()});
          }}
        />
        <AppText
          text={commonString.phone_number + ' ' + commonString.condition}
          style={[
            styles.textInputHeaderStyle,
            {color: commonColor.BLACK},
          ]}></AppText>
        <AppTextInput
          value={phonenumber.text}
          placeHolder={commonString.phone_number_placeholder}
          placeholderTextColor={commonColor.PLACEHOLDER}
          secureTextEntry={true}
          style={[styles.textInput, {color: commonColor.BLACK}]}
          onChangeText={value => {
            setPhoneNumber({text: value.trim()});
          }}
        />
        <View style={styles.row}>
          <CheckBox
            disabled={false}
            style={[styles.checkBoxStyle]}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <AppText
            text={commonString.terms_and__condition}
            style={[
              styles.registrationTermsStyle,
              {color: commonColor.LIGHT_GRAY},
            ]}></AppText>
        </View>
        <AppButton
          title={commonString.registration}
          containerStyle={styles.buttonSubmit}
          labelStyle={[styles.sumbitText, {color: commonColor.WHITE}]}
          onPress={() => {
            validateRegistrationInput();
          }}
        />
        <TouchableOpacity
          style={styles.rowLoginStyle}
          onPress={() => navigation.navigate('LoginScreen')}>
          <AppText
            text={commonString.already_have_account_header}
            style={[
              styles.registrationHeaderStyle,
              {color: commonColor.LIGHT_GRAY},
            ]}></AppText>
          <AppText
            text={commonString.already_have_account_sub_header}
            style={[
              styles.registrationSubHeaderStyle,
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
  registrationBorder: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '15%',
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
    fontSize: 14,
    marginTop: '7%',
    fontWeight: '500',
  },
  registrationSubHeaderStyle: {
    fontSize: 14,
    marginTop: '7%',
    marginLeft: '2%',
    fontWeight: '700',
  },
  registrationTermsStyle: {
    fontSize: 12,
    marginTop: '7%',
    width: '80%',
    fontWeight: '400',
  },
  forgetPaswordStyle: {
    fontSize: 14,
    marginTop: '7%',
    marginLeft: '2%',
    fontWeight: '400',
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
    paddingLeft: 5,
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
    marginLeft: '5%',
    marginTop: '2%',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
  },
  rowLoginStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});

export default RegistrationScreen;
