import { Alert } from "react-native";

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const validateEmail = (text:any) => {
    if (reg.test(text) === false) {
      return false;
    } else{
        return true

    }
}
export { validateEmail }