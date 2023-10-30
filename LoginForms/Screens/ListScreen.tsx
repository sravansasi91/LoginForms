import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {format, parseISO} from 'date-fns';

import commonColor from '../CommonConstant/commonColor';
import AppText from '../Component/Common/AppText';
import {commonString} from '../CommonConstant/CommonString';
import AppImage from '../Component/AppImage';
import SearchItemList from '../Component/SearchItemList';
import {ScreenProp} from '../Navigation/RootStackScreen';

const ListScreen = ({navigation, route}: ScreenProp) => {
  const editBtn = '../assets/images/editBtn.png';
  const editBtnIcon = require(editBtn);
  const backBtn = '../assets/images/backBtn.png';
  const backBtnIcon = require(backBtn);
  const filterBtn = '../assets/images/filterIcon.png';
  const filterBtnIcon = require(filterBtn);

  const searchData = route.params;
  const [searchResult, setSearchResult] = useState(searchData);
  const [destResult, setDestResult] = useState(
    searchResult?.searchData[0][0]?.originDestinationOptions[0].tourSegments[0]
      .DepartureAirportCode,
  );
  const [arivalResult, setArivalResult] = useState(
    searchResult?.searchData[0][0]?.originDestinationOptions[0].tourSegments[0]
      .ArrivalAirportCode,
  );
  const [departTime, setDepartTime] = useState(
    searchResult?.searchData[0][0]?.originDestinationOptions[0].tourSegments[0]
      .DepartureDateTime,
  );
  const [arriveTime, setArriveTime] = useState(
    searchResult?.searchData[0][0]?.originDestinationOptions[0].tourSegments[0]
      .ArrivalDateTime,
  );
  const [type, setType] = useState(
    searchResult?.searchData[0][0]?.passengers[0].Type,
  );
  const [child, setChild] = useState(
    searchResult?.searchData[0][0]?.passengers[0].Quantity,
  );

  function formatDate(inputDate: string): string {
    const date = parseISO(inputDate);
    const dayOfWeek = format(date, 'E');
    const dayOfMonth = format(date, 'd');
    const month = format(date, 'MMM');
    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.headerMenus}>
          <View style={styles.menusView}>
            <View style={styles.menusItem}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AppImage source={backBtnIcon} style={styles.logo} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerItem}>
            <AppText
              text={destResult + '- ' + arivalResult}
              style={[
                styles.headerStyle,
                {color: commonColor.WHITE},
              ]}></AppText>
            <AppText
              text={formatDate(departTime) + ' - ' + formatDate(arriveTime)}
              style={[
                styles.headerStyleBold,
                {color: commonColor.WHITE},
              ]}></AppText>
            <AppText
              text={type + ',' + child}
              style={[
                styles.headerStyleBold,
                {color: commonColor.WHITE},
              ]}></AppText>
          </View>
          <View style={styles.menusView}>
            <View style={styles.menusItem}>
              <AppImage source={editBtnIcon} style={styles.logo} />
            </View>
          </View>
        </View>
        <View style={styles.countHeader}>
          <View style={styles.countItem}>
            <AppText
              text={commonString.countHead}
              style={[
                styles.avaliableCount,
                {color: commonColor.BLACK},
              ]}></AppText>
            <AppText
              text={commonString.Avaliable}
              style={[
                styles.avaliableText,
                {color: commonColor.BLACK},
              ]}></AppText>
          </View>
          <View style={styles.flightLogo}>
            <AppImage source={filterBtnIcon} style={styles.logo} />
          </View>
        </View>
        <View style={[styles.filterMenusView]}>
          <View style={styles.filterMenusItem}>
            <AppText
              text={commonString.cheapPrice}
              style={[
                styles.menuItemStyle,
                {color: commonColor.GRAY},
              ]}></AppText>
          </View>
          <View style={styles.filterMenusItem}>
            <AppText
              text={commonString.stopInclued}
              style={[
                styles.menuItemStyle,
                {color: commonColor.GRAY},
              ]}></AppText>
          </View>
          <View style={[styles.filterMenusItem, {borderWidth: 0}]}></View>
        </View>
        <View style={styles.scrollView}>
          {searchResult?.searchData[0].length > 0 && (
            <SearchItemList
              SearchList={searchResult?.searchData[0]}
              navigation={navigation}
            />
          )}
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
    flex: 1.6,
    backgroundColor: commonColor.PRIMARY,
    paddingStart: 30,
    paddingEnd: 30,
    paddingTop: 30,
    flexDirection: 'row',
  },
  headerItem: {
    flex: 2,
    backgroundColor: commonColor.PRIMARY,
    alignItems: 'center',
  },
  filter: {
    flex: 4,
  },
  limitedOffer: {
    flex: 5,
  },
  bestPlace: {
    flex: 4,
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: '700',
    padding: 3,
  },
  headerStyleBold: {
    fontSize: 16,
    fontWeight: '600',
    padding: 3,
  },
  avaliableText: {
    fontSize: 16,
    fontWeight: '400',
  },
  avaliableCount: {
    fontSize: 16,
    fontWeight: '700',
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
    height: 40,
  },
  viewArrow: {},
  countHeader: {
    flex: 0.8,
    paddingStart: 30,
    flexDirection: 'row',
  },
  countItem: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 30,
  },
  flightLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default ListScreen;
