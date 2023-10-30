import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import commonColor from '../CommonConstant/commonColor';
import AppText from '../Component/Common/AppText';
import {commonString} from '../CommonConstant/CommonString';
import AppImage from '../Component/AppImage';

type Props = {
  SearchList: any[];
  navigation: any;
};

const SearchItemList: React.FC<Props> = ({SearchList, navigation}) => {
  const flight = '../assets/images/flightIcon.png';
  const flightIcon = require(flight);

  function formatHours(inputDate: string) {
    const parsedDate = new Date(Date.parse(inputDate));
    if (!isNaN(parsedDate.getTime())) {
      const hour = parsedDate.getHours();
      const minute = parsedDate.getMinutes();
      console.log('Hour:', hour);
      console.log('Minute:', minute);
      return `${hour} : ${minute}`;
    } else {
      console.log('Invalid date string:', inputDate);
    }
  }

  const Item = (item: []) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('List', {
              searchData: [SearchList],
            })
          }>
          <View style={styles.outerView}>
            <View style={styles.rowItem3}>
              <View style={styles.flex1}>
                <AppImage
                  source={flightIcon}
                  style={[styles.logo, {marginTop: '-10%', marginStart: '24%'}]}
                />
              </View>
              <View style={styles.dataItem}>
                <AppText
                  text={'Emirates'}
                  style={[
                    styles.flightNameText,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
              <View style={styles.dataRow}>
                <AppText
                  text={'$' + item?.item?.fareTotal.baseFare.Amount}
                  style={[
                    styles.priceText,
                    {color: commonColor.PRIMARY},
                  ]}></AppText>
              </View>
            </View>
            <View style={styles.rowItem3}>
              <View style={styles.dataRow1}>
                <AppText
                  text={
                    item?.item?.originDestinationOptions[0].tourSegments[0]
                      .DepartureAirportCode
                  }
                  style={[
                    styles.placeText,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
              <View style={styles.dataRow1}>
                <AppText
                  text={
                    item?.item?.originDestinationOptions[0].tourSegments[0]
                      .ArrivalAirportCode
                  }
                  style={[
                    styles.placeText,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
              <View style={styles.dataRow1}>
                <AppText
                  text={
                    item?.item?.originDestinationOptions[0].tourSegments[0]
                      .ArrivalAirportCode
                  }
                  style={[
                    styles.placeText,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
            </View>
            <View style={styles.rowItem3}>
              <View style={styles.centerItem}>
                <AppText
                  text={'---------------------------------------------'}
                  style={[
                    styles.priceText,
                    {color: commonColor.PRIMARY, width: '80%'},
                  ]}></AppText>
              </View>
            </View>
            <View style={styles.rowItem3}>
              <View style={styles.dataRow1}>
                <AppText
                  text={formatHours(
                    item?.item?.originDestinationOptions[0].tourSegments[0]
                      .DepartureDateTime,
                  )}
                  style={[
                    styles.placeText,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
              <View style={styles.dataRow1}>
                <AppText
                  text={item.item.duration}
                  style={[
                    styles.placeText,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
              <View style={styles.dataRow1}>
                <AppText
                  text={formatHours(
                    item?.item?.originDestinationOptions[0].tourSegments[0]
                      .ArrivalDateTime,
                  )}
                  style={[
                    styles.placeText,
                    {color: commonColor.BLACK},
                  ]}></AppText>
              </View>
            </View>
            <View style={styles.centerItem}>
              <View style={styles.dataRow2}></View>
            </View>

            <View style={[styles.filterMenusView, {flex: 1}]}>
              <View style={styles.filterMenusItem}>
                <AppText
                  text={commonString.economyLight}
                  style={[
                    styles.menuItemStyle,
                    {color: commonColor.PRIMARY},
                  ]}></AppText>
              </View>
              <View style={styles.filterMenusItem}>
                <AppText
                  text={commonString.bagLimit}
                  style={[
                    styles.menuItemStyle,
                    {color: commonColor.PRIMARY},
                  ]}></AppText>
              </View>
              <View style={[styles.filterMenusItem, {borderWidth: 0}]}>
                <AppText
                  text={commonString.showDetails}
                  style={[
                    styles.menuItemStyle,
                    {color: commonColor.PRIMARY},
                  ]}></AppText>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={{paddingTop: 10}}>
        {SearchList?.length > 0 && (
          <FlatList
            data={SearchList}
            renderItem={({item}) => <Item item={item} />}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '500',
    paddingEnd: 20,
    fontFamily: 'DM Sans',
  },
  details: {
    fontSize: 12,
    paddingEnd: 20,
    fontWeight: '400',
  },
  detailsTime: {
    fontSize: 11,
    paddingEnd: 20,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    paddingEnd: '5%',
    paddingStart: '5%',
    paddingBottom: '3%',
  },
  flightNameText: {
    fontSize: 16,
    fontWeight: '700',
  },
  priceText: {
    fontSize: 20,
    fontWeight: '700',
    paddingEnd: 20,
  },
  placeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  filterMenusView: {
    flexDirection: 'row',
    backgroundColor: commonColor.WHITE,
    height: 40,
    paddingStart: 30,
    paddingEnd: 45,
    justifyContent: 'space-between',
    paddingBottom: 5,
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
  outerView: {
    backgroundColor: commonColor.WHITE,
    height: 200,
    borderRadius: 10,
    paddingTop: 20,
  },
  dataItem: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    paddingStart: 5,
  },
  dataRow: {
    flex: 1.2,
    alignContent: 'center',
    justifyContent: 'center',
  },
  dataRow1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataRow2: {
    height: 2,
    backgroundColor: commonColor.LIGHT_GRAY,
    margin: 3,
    width: '80%',
  },
  centerItem: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowItem3: {
    flex: 1,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
});

export default SearchItemList;
