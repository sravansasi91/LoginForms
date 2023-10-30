import { CommonEndpoints } from "./endPoints";


export const registraionRequest = async (firstName:string,lastName:string,email:string,password:string,phone:string) => { 
    
    let request=  fetch(CommonEndpoints.REGISTRATION, {
       method: 'POST',
       headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
       },
      body: JSON.stringify({
        "firstName" : firstName,
        "lastName" : lastName,
        "email" : email,
        "phone" : phone,
        "password" : password,
        "refer_user" : "",
    })
      }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson
                console.log(responseJson);
                

     });
     return request
} 

export const loginRequest = async (email:string,password:string) => { 
    
    let request=  fetch(CommonEndpoints.LOGIN, {
       method: 'POST',
       headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
       },
      body: JSON.stringify({
        "email" : email,
        "password" : password})
      }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson
                console.log(responseJson);
                

     });
     return request
} 

export const verificationRequest = async (user_id:any,otp:string,device_type:string) => { 
    
    let request=  fetch(CommonEndpoints.VERIFICATION, {
       method: 'POST',
       headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
       },
      body: JSON.stringify({
        "user_id" : user_id,
        "otp" : otp,
        "app":'mobile',
        "device_type":device_type
    })
      }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson
                console.log(responseJson);
                

     });
     return request
} 

export const searchRequest = async (from:string,to:string,deptDate:string,adult:string,child:string) => { 
  const formData = new FormData();
  formData.append('journeyType', 'Return');
  formData.append('OriginDestinationInfo[0][departureDate]', '2024-02-01');
  formData.append('OriginDestinationInfo[0][returnDate]', '2024-03-01');
  formData.append('OriginDestinationInfo[0][airportOriginCode]', from);
  formData.append('OriginDestinationInfo[0][airportDestinationCode]', to);
  formData.append('class', 'Economy');
  formData.append('adults', 1);
  formData.append('childs', 1);
  formData.append('infants', 1);
  formData.append('directFlight', 0);

  console.log("url end ----",CommonEndpoints.SEARCH);

  let request=  fetch(CommonEndpoints.SEARCH, {
     method: 'POST',
     headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
     },
    body:JSON.stringify(formData),

    }).then((response) => response.json())
    .then((responseJson) => {
      console.log("resssspoooonseeee----",responseJson);

      return responseJson
              

   })
   .catch((error) => {
    console.log('Error:', error);
  });;
   return request
} 