import { BASE_URL } from "./baseUrl";

export const CommonEndpoints = {
    LOGIN: `${BASE_URL}${'/login'}`,
    REGISTRATION:`${BASE_URL}${'/register'}`,
    VERIFICATION:`${BASE_URL}${'/loginOtp'}`,
    SEARCH:`${BASE_URL}${'/flights_search'}`

}