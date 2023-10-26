// import React from 'react';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import SafeAreaView from 'react-native-safe-area-view';

// Colors
import {colors} from '../assets/colors/colors';

// Styles
import basicStyles from '../styles/BasicStyles';

//  Components
import HeadersComponent from '../components/HeadersComponent';
import ProfileComponent from '../components/ProfileComponent';
import CustomLoader from '../components/CustomLoader';

const PersonalDetailsScreen = props => {
  const {navigation} = props;
  const profile = navigation.getParam('profile', null);

  if (!profile) {
    return <CustomLoader />;
  }

  const {
    firstName,
    lastName,
    empId,
    designation,
    image,
    userInfo,
    contectInfo,
  } = profile;
  const basicProfileDetail = {firstName, lastName, empId, designation, image};
  const {userName, email, role, userSince, status, createdOn, dob, lastLogin} =
    userInfo;
  const {mobile} = contectInfo;

  return (
    <SafeAreaView style={styles.container}>
      <HeadersComponent nav={navigation} title="User Info." navAction="back" />

      <ProfileComponent profile={basicProfileDetail} />

      <View style={styles.mainListContainer}>
        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>
            User Name
          </Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {userName ? userName : 'N/A'}
          </Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>
            Email ID:
          </Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {email ? email : 'N/A'}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>
            Contact No
          </Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {mobile ? mobile : 'N/A'}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>
            Date Of Birth
          </Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {dob ? dob : 'N/A'}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>Role</Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {role ? role : 'N/A'}
          </Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>
            User Since
          </Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {userSince ? userSince : 'N/A'}
          </Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>Status</Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {status ? status : 'N/A'}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>
            Created On
          </Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {createdOn ? createdOn : 'N/A'}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={[basicStyles.heading, basicStyles.flexOne]}>
            Last Login
          </Text>
          <Text
            style={[
              basicStyles.heading,
              basicStyles.flexOne,
              basicStyles.textAlign,
            ]}>
            -
          </Text>
          <Text style={[basicStyles.text, basicStyles.flexTow]}>
            {lastLogin ? lastLogin : 'N/A'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalDetailsScreen;

const {lightGreyPrimary} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backButtonContainer: {
    marginTop: hp(1),
    marginHorizontal: wp(3),
    alignSelf: 'flex-start',
  },

  backButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icButtonStyle: {
    width: hp(2),
    aspectRatio: 1 / 1,
  },

  icDetailList: {
    width: hp(4),
    aspectRatio: 1 / 1,
    marginRight: wp(3),
  },

  buttonTextStyle: {
    paddingLeft: wp(3),
    color: '#222',
  },
  mainListContainer: {
    flex: 1,
    padding: wp(3),
  },
  headingTextStyle: {
    marginTop: hp(1),
    padding: wp(2),
    fontSize: wp(4),
    color: '#333',
    backgroundColor: '#f2f1f1',
    marginBottom: wp(2),
  },
  listContainer: {
    paddingVertical: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  infoTextStyle: {
    color: lightGreyPrimary,
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },

  informationTextStyle: {
    fontSize: wp(3),
    color: '#333',
  },

  editButton: {
    backgroundColor: '#0077a2',
    margin: wp(2),
    padding: wp(3),
    alignItems: 'center',
  },
  popCon: {
    width: wp(100),
    backgroundColor: '#fff',
    height: hp(100),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: wp(108),
    height: hp(104),
    // left: 0,
    position: 'absolute',
    top: hp(-3),
    left: wp(-9),
    paddingHorizontal: wp(6),
    paddingVertical: hp(2),
  },
  popupContainer: {
    padding: 0,
  },
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
    backgroundColor: '#f2f1f1',
    height: hp(5.5),
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },

  closeButton: {
    backgroundColor: '#e14c4e',
    paddingHorizontal: wp(3),
    paddingVertical: wp(2),
    borderRadius: 3,
  },
  inputField: {
    flex: 1,
    height: hp(5.5),
    paddingHorizontal: wp(4),
    borderRadius: 5,
    fontSize: wp(3),
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc8',
    marginBottom: wp(3),
  },
  fromDateFieldContainer: {
    flex: 1,
    height: hp(5.5),
    paddingHorizontal: wp(4),
    borderRadius: 5,
    fontSize: wp(3),
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc8',
    marginBottom: wp(3),
    justifyContent: 'center',
  },

  cancelButton: {
    backgroundColor: '#e14c4e',
    flex: 1,
    height: hp(5.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2),
  },

  updateButton: {
    backgroundColor: '#0077a2',
    flex: 1,
    height: hp(5.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp(2),
  },
  pickerInput: {
    fontSize: wp(3),
    width: wp(94),
    marginHorizontal: 0,
    left: wp(-5),
  },
});
