import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import commonColor from '../CommonConstant/commonColor';
import AppText from '../Component/Common/AppText';
import {commonString} from '../CommonConstant/CommonString';
import AppImage from '../Component/AppImage';
import AppTextInput from '../Component/Common/AppTextInput';
import {searchRequest} from '../services/requestBody';
import {ScreenProp} from '../Navigation/RootStackScreen';
import {JSONResponse} from '../CommonConstant/commonData';

const HomeScreen = ({navigation}: ScreenProp) => {
  const notification_icon = '../assets/images/nofificationIcon.png';
  const NotiIcon = require(notification_icon);
  const profile_pic = '../assets/images/profilePic.png';
  const ProfileIcon = require(profile_pic);
  const viewMores = '../assets/images/viewMore.png';
  const viewMoreIcon = require(viewMores);
  const home = '../assets/images/homeIcon.png';
  const booking = '../assets/images/bookins.png';
  const offres = '../assets/images/oggers.png';
  const wallet = '../assets/images/wallet.png';
  const homeItem = '../assets/images/homeItem.png';
  const bestOffer = '../assets/images/bestOffer.png';

  const homeIcon = require(home);
  const bookingIcon = require(booking);
  const offresIcon = require(offres);
  const walletIcon = require(wallet);
  const homeItemIcon = require(homeItem);
  const bestOfferIcon = require(bestOffer);

  let initialEmail: {text: string} = {text: ''};
  const [flyFrom, setFlyFrom] = useState(initialEmail);
  const [flyTo, setFlyTo] = useState(initialEmail);
  const [departure, setDeparture] = useState(initialEmail);
  const [viewMore, setVewMore] = useState(false);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);
  const [loader, setLoader] = useState(false);
  const [resposeData, setResposeData] = useState({});

  useEffect(() => {
    validateSerchInput();
  }, [flyFrom, flyTo, departure, adult, children]);

  const validateSerchInput = async () => {
    if (
      flyFrom.text.length > 2 &&
      flyTo.text.length > 2 &&
      departure.text.length > 2 &&
      adult > 0 &&
      children > 0
    ) {
      setLoader(true);
      const response = await searchRequest(
        flyFrom.text,
        flyTo.text,
        departure.text,
        adult.toString(),
        children.toString(),
      );
      if (response) {
        setLoader(false);
        setResposeData(JSONResponse);
        navigation.navigate('ListScreen', {searchData: [JSONResponse]});
      } else {
        setLoader(false);
        if (response?.error) {
          Alert.alert(response?.error);
        } else {
          Alert.alert(response?.message);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.outerHeader}>
            <View style={styles.profilePic}>
              <AppImage source={ProfileIcon} style={styles.logo} />
            </View>
            <View
              style={{
                flex: 2,
                padding: 15,
              }}>
              <AppText
                text={commonString.Welcome}
                style={[
                  styles.welcomeString,
                  {color: commonColor.GRAY},
                ]}></AppText>
              <AppText
                text={commonString.WelcomeName}
                style={[
                  styles.welcomeName,
                  {color: commonColor.BLACK},
                ]}></AppText>
            </View>
          </View>
          <View style={styles.freeSpace}></View>
          <View style={styles.notiIcons}>
            <AppImage source={NotiIcon} style={styles.logo} />
          </View>
        </View>

        <View style={styles.headerMenus}>
          <View style={styles.headerItem}>
            <AppText
              text={commonString.HomeHeaderFirst}
              style={[
                styles.headerStyle,
                {color: commonColor.WHITE},
              ]}></AppText>
            <AppText
              text={commonString.HomeHeaderSecond}
              style={[
                styles.headerStyleBold,
                {color: commonColor.WHITE},
              ]}></AppText>
          </View>
          <View style={styles.menusView}>
            <View style={styles.menusItem}>
              <AppText
                text={commonString.MenuFlight}
                style={[
                  styles.menuItemStyle,
                  {color: commonColor.PRIMARY},
                ]}></AppText>
            </View>
            <View style={styles.menusItem}>
              <AppText
                text={commonString.MenuHotel}
                style={[
                  styles.menuItemStyle,
                  {color: commonColor.PRIMARY},
                ]}></AppText>
            </View>
            <View style={styles.menusItem}>
              <AppText
                text={commonString.MenuCar}
                style={[
                  styles.menuItemStyle,
                  {color: commonColor.PRIMARY},
                ]}></AppText>
            </View>
          </View>
        </View>
        <View style={styles.scrollView}>
          <ScrollView style={styles.scrollViewMain}>
            <View
              style={[styles.filter, viewMore == true ? {flex: 4} : {flex: 8}]}>
              <View style={[styles.filterMenusView]}>
                <View style={styles.filterMenusItem}>
                  <AppText
                    text={commonString.Business}
                    style={[
                      styles.menuItemStyle,
                      {color: commonColor.PRIMARY},
                    ]}></AppText>
                </View>
                <View style={styles.filterMenusItem}>
                  <AppText
                    text={commonString.Oneway}
                    style={[
                      styles.menuItemStyle,
                      {color: commonColor.PRIMARY},
                    ]}></AppText>
                </View>
                <View style={styles.filterMenusItem}>
                  <AppText
                    text={commonString.RoundTrip}
                    style={[
                      styles.menuItemStyle,
                      {color: commonColor.PRIMARY},
                    ]}></AppText>
                </View>
              </View>
              <View style={styles.flyOuter}>
                <View style={styles.flexOne}>
                  <AppText
                    text={commonString.fligingFrom}
                    style={[
                      styles.textInputSerch,
                      {color: commonColor.BLACK},
                    ]}></AppText>
                  <AppTextInput
                    value={flyFrom.text}
                    style={[
                      styles.textInput,
                      {
                        color: commonColor.BLACK,
                        borderColor: commonColor.GRAY,
                        borderBottomWidth: 0,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                      },
                    ]}
                    onChangeText={value => {
                      setFlyFrom({text: value.trim()});
                    }}
                    placeHolder={''}
                  />
                </View>
                <View style={styles.flexOne}>
                  <AppText
                    text={commonString.fligingto}
                    style={[
                      styles.textInputHeaderStyle,
                      {color: commonColor.BLACK},
                    ]}></AppText>
                  <AppTextInput
                    value={flyTo.text}
                    style={[
                      styles.textInput,
                      {
                        color: commonColor.BLACK,
                        borderColor: commonColor.WHITE,
                        borderBottomWidth: 0,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                      },
                    ]}
                    onChangeText={value => {
                      setFlyTo({text: value.trim()});
                    }}
                    placeHolder={''}
                  />
                </View>
              </View>

              <View style={styles.outerDepature}>
                <View style={styles.flexOne}>
                  <AppText
                    text={commonString.Departure}
                    style={[
                      styles.textInputHeaderStyle,
                      {color: commonColor.BLACK},
                    ]}></AppText>
                  <AppTextInput
                    value={departure.text}
                    style={[
                      styles.textInput,
                      {
                        color: commonColor.BLACK,
                        borderBottomWidth: 0,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                      },
                    ]}
                    onChangeText={value => {
                      setDeparture({text: value.trim()});
                    }}
                    placeHolder={''}
                  />
                </View>
              </View>
              {viewMore && (
                <View style={styles.outerDepature}>
                  <View style={styles.flexOne}>
                    <AppText
                      text={commonString.adult}
                      style={[
                        styles.textInputHeaderStyle,
                        {color: commonColor.BLACK},
                      ]}></AppText>
                    <AppTextInput
                      value={adult.toString()}
                      style={[
                        styles.textInput,
                        {
                          color: commonColor.BLACK,
                          borderBottomWidth: 0,
                          borderTopWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                        },
                      ]}
                      onChangeText={value => {
                        setFlyFrom({text: value.trim()});
                      }}
                      placeHolder={commonString.adult}
                    />
                  </View>

                  <View style={styles.flexOne}>
                    <AppText
                      text={commonString.children}
                      style={[
                        styles.textInputHeaderStyle,
                        {color: commonColor.BLACK},
                      ]}></AppText>
                    <AppTextInput
                      value={children.toString()}
                      style={[
                        styles.textInput,
                        {
                          color: commonColor.BLACK,
                          borderBottomWidth: 0,
                          borderTopWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                        },
                      ]}
                      onChangeText={value => {
                        setFlyFrom({text: value.trim()});
                      }}
                      placeHolder={commonString.children}
                    />
                  </View>
                </View>
              )}

              {viewMore ? (
                <TouchableOpacity
                  style={styles.viewMoreOuter}
                  onPress={() => {
                    setVewMore(!viewMore);
                  }}>
                  <AppText
                    text={commonString.viewLess}
                    style={[
                      styles.textInputHeaderStyle,
                      {color: commonColor.BLACK},
                    ]}></AppText>
                  <AppImage source={viewMoreIcon} style={styles.viewMore} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.viewMoreOuter}
                  onPress={() => {
                    setVewMore(!viewMore);
                  }}>
                  <AppText
                    text={commonString.viewMore}
                    style={[
                      styles.textInputHeaderStyle,
                      {color: commonColor.BLACK},
                    ]}></AppText>
                  <AppImage source={viewMoreIcon} style={styles.viewMore} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.limitedOffer}>
              <View style={styles.flexOne}>
                <AppText
                  text={commonString.limitedOffer}
                  style={[
                    styles.limitedOff,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
              <View style={styles.flexOne}>
                <AppText
                  text={commonString.viewAll}
                  style={[
                    styles.viewAll,
                    {color: commonColor.PRIMARY, alignSelf: 'flex-end'},
                  ]}></AppText>
              </View>
            </View>
            <View style={styles.limitedItem}>
              <AppImage source={homeItemIcon} style={styles.viewMore} />
            </View>

            <View style={styles.limitedOffer}>
              <View style={styles.flexOne}>
                <AppText
                  text={commonString.bestPlace}
                  style={[
                    styles.limitedOff,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
              <View style={styles.flexOne}>
                <AppText
                  text={commonString.viewAll}
                  style={[
                    styles.viewAll,
                    {color: commonColor.PRIMARY, alignSelf: 'flex-end'},
                  ]}></AppText>
              </View>
            </View>
            <View style={styles.limitedItem}>
              <AppImage source={bestOfferIcon} style={styles.viewMore} />
            </View>

            <View style={styles.bestPlace}></View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flex: 0.09,
          flexDirection: 'row',
        }}>
        <View style={styles.btnMenuItem}>
          <AppImage
            source={homeIcon}
            style={[styles.logo, {marginTop: '25%'}]}
          />
        </View>
        <View style={styles.btnMenuItem}>
          <AppImage
            source={walletIcon}
            style={[styles.logo, {marginTop: '0%'}]}
          />
        </View>
        <View style={styles.btnMenuItem}>
          <AppImage
            source={offresIcon}
            style={[styles.logo, {marginTop: '0%'}]}
          />
        </View>
        <View style={styles.btnMenuItem}>
          <AppImage
            source={bookingIcon}
            style={[styles.logo, {marginTop: '0%'}]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 1.5,
    paddingStart: 30,
    paddingEnd: 30,
    flexDirection: 'row',
  },
  scrollView: {
    flex: 10,
  },
  scrollViewMain: {
    flex: 1,
    backgroundColor: commonColor.WHITE,
  },
  headerMenus: {
    flex: 2.6,
    backgroundColor: commonColor.PRIMARY,
    paddingStart: 30,
    paddingEnd: 30,
    paddingTop: 30,
  },
  headerItem: {
    flex: 2,
    backgroundColor: commonColor.PRIMARY,
  },
  filter: {
    flex: 4,
  },
  limitedOffer: {
    flex: 5,
    flexDirection: 'row',
    padding: 30,
  },
  limitedItem: {
    flex: 5,
    flexDirection: 'row',
    paddingRight: 30,
    paddingLeft: 30,
  },
  bestPlace: {
    flex: 4,
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: '400',
  },
  headerStyleBold: {
    fontSize: 30,
    fontWeight: '700',
  },
  menusView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: commonColor.WHITE,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterMenusItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: commonColor.LIGHT_GRAY,
    borderRadius: 30,
    margin: 5,
  },
  menuItemStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  welcomeString: {
    fontSize: 20,
    fontWeight: '500',
  },
  welcomeName: {
    fontSize: 25,
    fontWeight: '700',
  },
  logo: {
    marginTop: '10%',
  },
  notiIcons: {
    flex: 2.5,
  },
  freeSpace: {
    flex: 1.5,
  },
  profilePic: {
    flex: 1,
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerHeader: {
    flex: 4,
    flexDirection: 'row',
  },
  textInput: {
    width: '80%',
    height: 44,
    margin: 0,
  },
  viewArrow: {},
  textInputHeaderStyle: {
    paddingTop: 5,
  },
  viewMore: {},
  textInputSerch: {
    fontSize: 14,
    margin: 0,
    fontWeight: '500',
  },
  viewAll: {
    fontSize: 14,
    margin: 0,
    fontWeight: '600',
  },
  limitedOff: {
    fontSize: 20,
    margin: 0,
    fontWeight: '700',
  },
  flyOuter: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    paddingStart: 30,
    paddingEnd: 30,
  },
  outerDepature: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    paddingStart: 30,
    paddingEnd: 30,
  },
  viewMoreOuter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  avaliableText: {
    fontSize: 16,
    fontWeight: '400',
  },
  btnMenuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
