import LightThemeColors from '../../theme/colors/LightThemeColors';
import {ThemeTemplate} from '../types/IThemeTemplate';

export const themeLight: ThemeTemplate = {
  themeColor: '#FFFFFF',
  button: {
    backgroundColor: '#000',
    textColor: '#FFFFFF',
    disabledColor: '#E0E0E0',
    disabledText1: '#A6A9AA',
    disabledText2: '#ECECED',
    textColorterms: '#1f2937',

  },
  text: {
    primaryColor: '#222',
    secodaryColor: '#666',
    //copyRightColour: '#6B6B6C',
    copyRightColour: '#ffffff',
    communityDespcription: '#848484',
    forgetPasswordColor: '#8C8C8C',
    loaderColor: '#000000',
    validationTextColor: '#585858',
    subTitleTextColor: '#5B5B5B',
    validationGreenText: '#2EB018',
    validationRedText: '#F00',
    languageText: '#000000D9',
    languageBorderColor: '#EAEAEA',
  },
  textInput: {
    backgroundColor: '#f3f4f6',
    borderColor: LightThemeColors.BLACK,
    textColor: LightThemeColors.TEXT_BLACK,
    hintColor: LightThemeColors.TEXT_GREY,
  },

  dropdown: {
    popWindowBackgroundColor: '#f3f4f6',
    backgroundColor: '#f3f4f6',
    borderColor: '#222',
    iconColor: '#222',
    textColor: '#222',
    rowTextColor: '#222',
    rowBackgroundColor: '#f3f4f6',
    rowDividerColor: '#C5C5C5',
  },
  captcha: {
    backgroundColor: '#E8E8E8',
  },
  radioButton: {
    primaryColor: '#CCA362',
  },
  imageButton: {
    tintColor: '#222',
  },
  separator: {
    backgroundColor: '#222',
  },
  bookingSlots: {
    bookedSlotsColor: '#66BD50',
    avaliableSlotsColor: '#F4F4F4',
    borderColor: '#E0E0E0',
    headerBackgroundColor: '#000000',
    headerTextColor: '#FFFFFF',
    blockedSlotsColor: '#F0B4B4',
    selfBookedSlotsColor: '#008000',
    blockedSlotsBorderColor: '#FFFFFF',
  },
  amenitiesList: {
    listBackground: '#F4F4F4',
    openStatusColor: '#5CA167',
    closedStatusColor: '#FF1515',
    buttonColor: '#000000',
    separatorColor: '#FFFFFF',
    slotTypeColor: '#A6A9AA',
    menuBackground: '#CCA362',
    topListBackground: '#F8F8F8',
    bottomListBackground: '#ECECED',
    editButtonColor: '#FFFFFF',
    editTextColor: '#000000',
  },
  switchButton: {
    primaryColor: '#1f2937',
  },

  tab: {
    backgroundColorActive: '#CCA362',
    backgroundColorInactive: '#FFFFFF',
    textColorActive: '#FFFFFF',
    textColorInactive: '#000000',
    borderColor: '#000000',
  },

  hhoCompanyHeader: {
    iconColor: '#222222',
    iconBackgroundColor: '#DCDCDC',
  },

  moveInHeader: {
    iconColor: LightThemeColors.WHITE,
    iconBackgroundColor: LightThemeColors.GOLDEN_PRIMARY,
    textPrimaryColor: LightThemeColors.TEXT_BLACK,
    textSecondaryColor: LightThemeColors.TEXT_GREY_DARK,
    stepperFilledColor: LightThemeColors.GREEN,
    stepperUnfilledColor: LightThemeColors.GREY_LIGHT,
  },

  textInputUnderline: {
    backgroundColor: '#f3f4f6',
    titleColor: LightThemeColors.TEXT_GREY_DARK,
    iconColor: LightThemeColors.GREY_DARK,
    textColor: LightThemeColors.TEXT_BLACK,
    hintColor: LightThemeColors.TEXT_GREY,
    lineColor: LightThemeColors.BLACK,
    errorColor: LightThemeColors.RED,
  },

  addFile: {
    backgroundColor: '#EEEEEE',
    borderColor: '#DDD',
    iconColor: '#222',
    labelColor: '#222',
  },

  addedFile: {
    backgroundColor: '#888',
    iconColor: '#EEEEEE',
    iconBackgroundColor: '#AAA',
    labelColor: '#EEEEEE',
  },

  bottomSheet: {
    backgroundColor: LightThemeColors.WHITE,
    itemBackgroundColor: LightThemeColors.GREY,
    textColor: '#222',
    iconColor: '#222',
    searchBackgroundColor: LightThemeColors.GREY,
    dividerColor: LightThemeColors.GREY,
    transparentBg: 'rgba(223, 223, 223, 0.75)',
  },

  buttonBack: {
    backgroundColor: '#EEE',
  },

  registerMoveInOption: {
    activeBackgroundColor: LightThemeColors.GOLDEN_PRIMARY,
    inactiveBackgroundColor: LightThemeColors.GREY,
    activeTextColor: LightThemeColors.WHITE,
    inactiveTextColor: LightThemeColors.BLACK,
    iconBackgroundColor: LightThemeColors.WHITE,
  },

  tableCell: {
    backgroundColor: LightThemeColors.GOLDEN_PRIMARY,
    borderColor: LightThemeColors.GOLDEN_PRIMARY,
    cellContentColor: LightThemeColors.WHITE,
    titleColor: LightThemeColors.TEXT_GREY_DARK,
    subTitleColor: LightThemeColors.TEXT_GREY,
  },

  switch: {
    backgroundEnable: LightThemeColors.GOLDEN_PRIMARY,
    backgroundDisable: LightThemeColors.WHITE,
    borderEnable: LightThemeColors.GOLDEN_PRIMARY,
    borderDisable: LightThemeColors.GREY_DARK,
    thumbEnableColor: LightThemeColors.WHITE,
    thumbDisableColor: LightThemeColors.GREY_DARK,
  },

  lineSeparator: {
    backgroundColor: '#ECECED',
  },

  catalogueText: {
    textColor: '#6C7B7F',
  },

  addressText: {
    textColor: '#767676',
  },

  communityHeaderText: {
    textColor: '#676B6C',
  },

  communityText: {
    textColor: '#9AA5A7',
    aboutUsColor: '#4A5356',
    popupColour: '#ffffff',
    backgroundUnit: '#f8f8f8',
  },

  communityApartmentText: {
    textColor: '#4A5356',
  },

  carosuel: {
    backgroundColor: '#FFFFFF',
  },

  menuButton: {
    tintColour: '#CCA362',
  },

  amenitiesSummery: {
    buttonColor: '#222',
    separatorColor: '#A2A2A2',
    dayColor: '#CCA362',
  },
  amenitiesSuccess: {
    headerBackground: '#E2E2E2',
    buttonColor: '#222',
    separatorColor: '#E2E2E2',
    contentColor: '#E2E2E2',
  },
  textInputOutline: {
    backgroundColor: '#ffffff',
    enquiryOutlined: '#4A5356',
    enquiryOutlinedCondition: '#FF0000',
    enquiryOutlinedColour: '#E2E2E2',
    enquiryTextBoxColour: '#FFFFFF',
  },

  switchSelector: {
    backgroundColor: '#ffffff',
    selectedColor: LightThemeColors.GOLDEN_PRIMARY,
    unSelectedText: LightThemeColors.BLACK,
  },
  view: {
    backgroundColor: '#ffffff',
    grayBackgroundColor: '#E4E4E4',
    borderColor: '#E2E2E2',
  },
  accessCard: {
    backgroundColor: '#000000',
    menuBackground: LightThemeColors.GOLDEN_PRIMARY,
    cardBackground: '#F3F3F3',
    cardBackgroundEdit: '#909090',
    cardBorder: '#DBDBDB',
    popupOuter: 'rgba(0, 0, 0, 0.5)',
    popupBackground: '#FFFFFF',
    popupButton: '#000000',
    lineBorder: '#D3D3D3',
    activeBtnText: '#FFFFFF',
    noteBackground: '#F3F3F3',
    linkColor: '#666666',
    primaryColor: '#000000',
    primaryColorEdit: '#FFFFFF',
    secondaryColor: '#A6A9AA',
    secondaryColorEdit: '#FFFFFF',
    activatedColor: '#1DC302',
    progressColor: '#1DC302',
    buttonColor: '#CCA362',
    progressLight: '#F3AD26',
    transparent: 'transparent',
    dottedLine: 'red',
    popupBorderColor: '#808080',
    activeButtonColor: '#CCA362',
    cardValidationError: LightThemeColors.RED,
  },

  propertyList: {
    thumbnail: '#fff',
    bottomSheetContent: '#DAD8D8',
    bottomSheetBg: '#EDEDED',
    closeBtnBg: '#000',
    closeBtnLabel: '#fff',
    searchBox: '#F5F5F5',
    radioBg: '#000',
    transparent: 'transparent',
    checkBg: '#fff',
    borderBottomColor: '#ccc',
    heading: '#5B5B5B',
    border1: '#DEDEDE',
    documentIcon: '#EBEBEB',
    downloadContainer1: '#A7A7A7',
    documentBtn: '#A5A5A5',
  },

  serviceRequest: {
    icon: '#D9D9D9',
    icon1: '#888888',
    txt1: '#9A9A9A',
    closed: '#03CE03',
    open: '#FF852D',
    cancelled: '#F10808',
    closedOpacity: 'rgba(0, 226, 0, 0.1)',
    openOpacity: 'rgba(255, 133, 45, 0.15)',
    cancelledOpacity: 'rgba(241, 8, 8, 0.15)',
    white: '#fff',
    separator: '#E1E1E1',
    length: '#A6A9AA',
    locationtxt: '#626262',
    date: '#505050',
    comment: '#050505',
    black: '#000',
    subTxt: '#49454F',
    border: '#ECECED',
    inputbg: '#F2F2F2',
    placeholder: '#B7B7B7',
    gold1: '#D89325',
    gold2: '#CCA362',
    txt2: '#A6A9AA',
    delete: '#D60000',
    unread: '#58A8E0',
    popupOuter: 'rgba(0, 0, 0, 0.7)',
  },

  moveOut: {
    backgroundColor: '#AE835C',
  },

  dashboard: {
    cardBackground: '#F8F8F8',
    cardBorder: '#ECECED',
    text1: '#000000',
    text2: '#4A5356',
    placeHolder: '#414141',
    input: '#F6F6F6',
  },
  checkBox: {
    unselectedBackground: LightThemeColors.WHITE,
    selectedBackground: LightThemeColors.GOLDEN_PRIMARY,
    selectedBorder: LightThemeColors.GOLDEN_PRIMARY,
    unselectedBorder: LightThemeColors.BLACK,
    checkIcon: LightThemeColors.WHITE,
  },
  fileBrowser: {
    topBarBackground: LightThemeColors.GOLDEN_PRIMARY,
    actionButtonText: LightThemeColors.WHITE,
    seletedFileBackground: LightThemeColors.GREY_LIGHT,
    mediaItemBackground: LightThemeColors.GREY_LIGHT,
    mediaItemBorder: LightThemeColors.GREY,
    mediaItemIcon: LightThemeColors.BLACK,
    textColor: LightThemeColors.BLACK,
    fileLimitTextColor: LightThemeColors.GOLDEN_SECONDARY,
  },
  loginTheme: {
    backgroundColorLanguageSelection: '#FFF',
    backgroundColorLanguageUnSelection: '#F4F4F4',
  },

  alert: {
    backgroundColor: LightThemeColors.WHITE,
    positiveButtonBackground: LightThemeColors.BLACK,
    positiveButtonText: LightThemeColors.WHITE,
    negativeButtonBackground: LightThemeColors.WHITE,
    negativeButtonText: LightThemeColors.BLACK,
    negativeButtonBorder: LightThemeColors.GREY,
  },

  documentRequired: {
    backgroundColor: LightThemeColors.GREY_LIGHT,
    iconBackgroundColor: LightThemeColors.BLACK,
    iconColor: LightThemeColors.WHITE,
    textColor: LightThemeColors.BLACK,
    lineColor: LightThemeColors.GREY_MEDIUM,
  },

  buying: {
    green: '#338600',
    orangeOpacity: '#FFE3C9',
    text2: '#666666',
    uploadedCard: '#949494',
  },

  moveInSuccess: {
    backgroundColor: LightThemeColors.WHITE,
    imageBackground: LightThemeColors.GREY_LIGHT,
    imageContent: LightThemeColors.GREY_MEDIUM,
    titleColor: LightThemeColors.TEXT_BLACK,
    subTitleColor: LightThemeColors.TEXT_GREY_DARK,
    buttonBackground: LightThemeColors.BLACK,
    buttonText: LightThemeColors.WHITE,
    lineColor: LightThemeColors.GREY,
  },
  moveInRequestItem: {
    backgroundColor: LightThemeColors.GREY_LIGHT,
    idColor: LightThemeColors.TEXT_BLUE,
    titleColor: LightThemeColors.GREY_DARK,
    subTitleColor: LightThemeColors.BLACK,
    lineColor: LightThemeColors.GREY,
    buttonContainerColor: LightThemeColors.GREY,
    buttonCancelBackground: LightThemeColors.WHITE,
    buttonUpdateBackground: LightThemeColors.BLACK,
    buttonUpdateText: LightThemeColors.WHITE,
    buttonCancelText: LightThemeColors.BLACK,
  },

  moveOutRequestItem: {
    backgroundColor: '#F4F4F4',
    buttonBackgroundColor: '#DFDFDF',
    lineColor: '#AAAAAA',
    titleColor: '#666666',
    valueColor: '#222222',
  },
};
