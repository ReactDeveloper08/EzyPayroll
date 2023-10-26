// API
import {BASE_URL, makeRequest} from '../api/ApiInfo';
// User Preference
import {getUniqueId} from 'react-native-device-info';
import {KEYS, getData, storeData} from '../api/UserPreference';

const uploadToken = async fcmToken => {
  try {
    // fetching userInfo from local storage
    const userInfo = await getData(KEYS.USER_INFO);
    // console.log('>>>><<<<<>>>>><<<<<', userInfo);
    if (userInfo) {
      let uniqueId = getUniqueId();
      const {ezypayrollId, user} = userInfo;
      const {id: userId} = user;
      // const {userId: admin} = admin;

      // preparing params
      const params = {
        ezypayrollId,
        userId,
        // admin,
        uniqueDeviceId: uniqueId,
        token: fcmToken,
      };
      // console.log('5555', params);
      // calling api
      const response = await makeRequest(BASE_URL + 'uploadToken', params);
      // console.log('>>>>>>>>>', response);
      if (response.success) {
        const deviceId = response.userInfo.deviceId;
        await storeData(KEYS.DEVICE_UNIQUE_ID, deviceId);
      }
      // return response;
    }
  } catch (error) {
    console.log('error', error.message);
    return null;
  }
};

export default uploadToken;
