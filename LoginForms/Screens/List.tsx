import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';

import AppImage from '../Component/AppImage';
import AppText from '../Component/Common/AppText';
import AppTextInputNumeric from '../Component/Common/AppTextInputNumeric';
import {commonString} from '../CommonConstant/CommonString';
import {ScreenProp} from '../Navigation/RootStackScreen';
import commonColor from '../CommonConstant/commonColor';

const List = ({navigation, route}: ScreenProp) => {
  const searchData = route.params;
  const [searchResult, setSearchResult] = useState(searchData);
  const login_logo_icon = '../assets/images/loginlogo.png';
  const LogoIcon = require(login_logo_icon);
  let initialValue: {text: string} = {text: ''};

  const [firstname, setFirstName] = useState(initialValue);
  const [lastname, setLastName] = useState(initialValue);
  const [email, setEmail] = useState(initialValue);
  const [gender, setGender] = useState(initialValue);
  const [dob, setDOB] = useState(initialValue);
  const [nationality, setNationality] = useState(initialValue);
  const [mobileNumber, setMobileNumber] = useState(initialValue);
  const [passnumber, setPassportNumber] = useState(initialValue);
  const [dobConfirm, setDOBConfirm] = useState(initialValue);

  const backBtn = '../assets/images/backBtn.png';
  const backBtnIcon = require(backBtn);
  const profile_pic = '../assets/images/profilePic.png';
  const ProfileIcon = require(profile_pic);
  const details = '../assets/images/detailsItem.png';
  const DetailsIcon = require(details);

  const Item = (item: []) => {
    return (
      <View style={styles.loginBorder}>
        <AppText
          text={commonString.traveller}
          style={[styles.headerStyle, {color: commonColor.BLACK}]}></AppText>
        <AppText
          text={''}
          style={[
            styles.headerLineStyle,
            {
              backgroundColor: commonColor.PLACEHOLDER,
            },
          ]}></AppText>
        <View style={styles.row}>
          <AppText
            text={commonString.firstName + commonString.condition}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
          <AppText
            text={commonString.lastName + commonString.condition}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppTextInputNumeric
            value={firstname.text}
            placeHolder={commonString.firstName}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setFirstName({text: value.trim()});
            }}
          />
          <AppTextInputNumeric
            value={lastname.text}
            placeHolder={commonString.lastName}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setLastName({text: value.trim()});
            }}
          />
        </View>
        <AppText
          text={''}
          style={[
            styles.headerLineStyle,
            {
              backgroundColor: commonColor.PLACEHOLDER,
            },
          ]}></AppText>
        <View style={styles.row}>
          <AppText
            text={commonString.gender}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
          <AppText
            text={commonString.dob}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppTextInputNumeric
            value={gender.text}
            placeHolder={commonString.gender}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setGender({text: value.trim()});
            }}
          />
          <AppTextInputNumeric
            value={dob.text}
            placeHolder={commonString.dobFormat}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setDOB({text: value.trim()});
            }}
          />
        </View>
        <AppText
          text={''}
          style={[
            styles.headerLineStyle,
            {
              backgroundColor: commonColor.PLACEHOLDER,
            },
          ]}></AppText>
        <View style={styles.row}>
          <AppText
            text={commonString.nationality}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppTextInputNumeric
            value={nationality.text}
            placeHolder={commonString.nationality}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setNationality({text: value.trim()});
            }}
          />
        </View>
        <AppText
          text={''}
          style={[
            styles.headerLineStyle,
            {
              backgroundColor: commonColor.PLACEHOLDER,
            },
          ]}></AppText>
        <View style={styles.row}>
          <AppText
            text={commonString.phone_number}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppTextInputNumeric
            value={mobileNumber.text}
            placeHolder={commonString.phone_number}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setMobileNumber({text: value.trim()});
            }}
          />
        </View>
        <View style={styles.row}>
          <AppText
            text={commonString.Email + commonString.condition}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppTextInputNumeric
            value={email.text}
            placeHolder={commonString.enterEmailId}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setEmail({text: value.trim()});
            }}
          />
        </View>
        <View style={styles.row}>
          <AppText
            text={commonString.bookingConfirmation}
            style={[
              styles.textSubHeaderBooking,
              {color: commonColor.PLACEHOLDER},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppText
            text={commonString.passportDetails}
            style={[
              styles.textPassportDetails,
              {color: commonColor.PRIMARY},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppText
            text={commonString.passportDetailsText}
            style={[
              styles.textSubHeaderBooking,
              {color: commonColor.PLACEHOLDER},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppText
            text={commonString.passportNumber + commonString.condition}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
          <AppText
            text={commonString.dob + commonString.condition}
            style={[
              styles.textSubHeader,
              {color: commonColor.BLACK},
            ]}></AppText>
        </View>
        <View style={styles.row}>
          <AppTextInputNumeric
            value={passnumber.text}
            placeHolder={commonString.passportNumber}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setPassportNumber({text: value.trim()});
            }}
          />
          <AppTextInputNumeric
            value={dobConfirm.text}
            placeHolder={commonString.dobFormat}
            placeholderTextColor={commonColor.PLACEHOLDER}
            style={[styles.textInput, {color: commonColor.BLACK}]}
            onChangeText={value => {
              setDOBConfirm({text: value.trim()});
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerMenus}>
        <View style={styles.menusView}>
          <View style={styles.menusItem}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AppImage source={backBtnIcon} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.headerItem, {marginTop: '5%'}]}>
          <AppText
            text={commonString.yourFlightBook}
            style={[styles.headerStyle, {color: commonColor.WHITE}]}></AppText>
        </View>
        <View style={styles.menusView}>
          <View style={styles.menusItem}>
            <AppImage
              source={ProfileIcon}
              style={[styles.logo, {marginTop: '10%'}]}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1.5}}>
        <AppImage
          source={DetailsIcon}
          style={[styles.logo, {marginTop: '5%', marginStart: '5%'}]}
        />
      </View>
      <View style={{flex: 12}}>
        {searchResult?.searchData[0]?.length > 0 && (
          <FlatList
            data={searchResult?.searchData[0]}
            renderItem={({item}) => <Item item={item} />}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginBorder: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
    width: '85%',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: '3%',
    padding: 5,
    alignContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  headerLineStyle: {
    fontSize: 12,
    width: '95%',
    marginTop: '5%',
    height: 0.5,
  },
  registrationSubHeaderStyle: {
    fontSize: 14,
    marginLeft: '2%',
  },
  forgetPaswordStyle: {
    fontSize: 14,
    marginTop: '7%',
    marginLeft: '4%',
  },
  checkBoxStyle: {},
  textInputHeaderStyle: {
    fontSize: 16,
    marginTop: '5%',
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  textSubHeader: {
    fontSize: 12,
    marginTop: '3%',
    marginLeft: '5%',
    fontWeight: 'bold',
    flex: 1,
  },
  textPassportDetails: {
    fontSize: 16,
    marginTop: '3%',
    marginLeft: '5%',
    fontWeight: 'bold',
    flex: 1,
  },
  textSubHeaderBooking: {
    fontSize: 10,
    marginTop: '3%',
    marginLeft: '5%',
    fontWeight: '700',
    flex: 1,
    color: commonColor.PRIMARY,
  },
  textInput: {
    flex: 1,
    marginTop: '2%',
    paddingLeft: 5,
    marginLeft: 15,
    marginRight: 25,
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
  },
  rowTextInput: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerMenus: {
    flex: 1.6,
    backgroundColor: commonColor.PRIMARY,
    paddingStart: 30,
    paddingEnd: 30,
    paddingTop: 30,
    flexDirection: 'row',
  },
  headerItem: {
    flex: 1,
    backgroundColor: commonColor.PRIMARY,
    alignItems: 'center',
  },
  menusView: {
    flex: 0.3,
    flexDirection: 'row',
    backgroundColor: commonColor.PRIMARY,
  },
  filterMenusView: {
    flexDirection: 'row',
    backgroundColor: commonColor.WHITE,
    height: 50,
    paddingStart: 45,
    paddingEnd: 45,
    justifyContent: 'space-between',
  },
  menusItem: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: '35%',
  },
});

export default List;
