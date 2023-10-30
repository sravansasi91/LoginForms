import type {NativeStackScreenProps} from '@react-navigation/native-stack';



export type StackParamList = {
    LoginScreen: undefined;
    RegistrationScreen: undefined;
    VerificationScreen:{userid?: string};
    HomeScreen: undefined;
    ListScreen: {searchData?: any[]};
    List: {searchData?: any[]};
};

export type ScreenProp = NativeStackScreenProps<StackParamList>;