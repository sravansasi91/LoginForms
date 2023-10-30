import {combineReducers} from 'redux';
import sample from './sample';
import login from './login';
import forgotPassword from './forgotPassword';
import forgotPasswordOtp from './forgotPasswordOtp';
import registration from './registration';
import registrationOTP from './registrationOtp';
import authReducer from './authReducer';
import countries from './countryReducer';
import dialCodes from './dailCode';
import splash from './splashReducer';
import amenitiesList from './amenitiesList';
import commonMasterCommunity from './commonMasterCommunity';
import commonCommunity from './commonCommunity';
import commonTower from './commonTower';
import commonUnit from './commonUnit';
import commonUnitDetail from './commontUnitDetail';
import tenantCreate from './tenantCreate';
import tenantUpdate from './tenantUpdate';
import companyCreate from './companyCreate';
import companyUpdate from './companyUpdate';
import ownerCreate from './ownerCreate';
import ownerUpdate from './ownerUpdate';
import userRole from './userRoles';
import unitOwnerCreate from './unitOwnerCreate';
import unitOwnerUpdate from './unitOwnerUpdate';
import catalogueMasterCommunity from './catalogueMasterCommunity';
import catalogueCommunity from './catalogueCommunity';
import bookingSlots from './bookingSlots';
import imageUpload from './imageUpload';
import moveInList from './moveInList';
import myMoveInList from './myMoveInList';
import moveInDetail from './moveInDetail';
import accessCardCommunity from './accessCardCommunity';
import accessCardParkingBay from './accessCardParkingBay';
import moveInRequestCancel from './moveInRequestCancel';
import filterUnits from './filterUnits';
import catalogueWholeCommunity from './catalogueWholeCommunity';
import newpassword from './newPassword';
import serviceRequestUnitList from './serviceRequestUnitList';
import serviceRequestCommunityList from './serviceRequestCommunityList';
import moveOutList from './moveOutList';
import moveOutRequestCancel from './moveOutRequestCancel';
import promotions from './promotions';
import changePassGenOTP from './changePassGenOTP';
import resendOtp from './resendOtp';
import permanentAddress from './permanentAddress';
import userProfile from './userProfile';
import myPropertyDetails from './myPropertyDetails';
import defaultProperty from './defaultProperty';
import catalogueUnitCommunity from './catalogueUnitCommunity';
import tenantRenewal from './tenatRenewalCreate';
import companyRenewal from './companyRenewalCreate';
import unitOwnerRenewal from './unitOwnerRenewalCreate';
import accountRenewalList from './accountRenewalList';
import renewalRequestCancel from './renewalRequestCancel';
import notificationCount from './notificationCount';
import restrictionService from './restrictionService';
import searchItemsReducer from './searchItems';
import mainHeaderReducer from './mainHeader';
import {burgerListReducer} from './commonReducer';

const RootReducer = combineReducers({
  login,
  forgotPassword,
  forgotPasswordOtp,
  sample,
  registration,
  registrationOTP,
  authReducer,
  countries,
  dialCodes,
  splash,
  amenitiesList,
  commonUnit,
  commonUnitDetail,
  commonTower,
  commonCommunity,
  commonMasterCommunity,
  tenantCreate,
  tenantUpdate,
  companyCreate,
  companyUpdate,
  ownerCreate,
  ownerUpdate,
  userRole,
  unitOwnerCreate,
  unitOwnerUpdate,
  catalogueMasterCommunity,
  catalogueCommunity,
  bookingSlots,
  imageUpload,
  moveInList,
  myMoveInList,
  moveInDetail,
  accessCardCommunity,
  accessCardParkingBay,
  moveInRequestCancel,
  filterUnits,
  catalogueWholeCommunity,
  newpassword,
  serviceRequestUnitList,
  serviceRequestCommunityList,
  moveOutList,
  moveOutRequestCancel,
  promotions,
  changePassGenOTP,
  resendOtp,
  permanentAddress,
  userProfile,
  myPropertyDetails,
  defaultProperty,
  catalogueUnitCommunity,
  tenantRenewal,
  companyRenewal,
  unitOwnerRenewal,
  accountRenewalList,
  renewalRequestCancel,
  notificationCount,
  restrictionService,
  searchItemsReducer,
  mainHeaderReducer,
  burgerListReducer,
});

export default RootReducer;
