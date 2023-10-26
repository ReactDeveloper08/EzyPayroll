import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Icons
import ic_close from '../assets/icons/ic_close.png';
import ic_checked from '../assets/icons/ic_checked.png';

// Colors
import {colors} from '../assets/colors/colors';
import basicStyles from '../styles/BasicStyles';

const AdminLeavesApproveComponent = props => {
  const {id, emp_name, appliedOn, from, to, totalDays, leaveType, reason} =
    props.item;

  const {handleApproveReject} = props;

  const handleApprove = () => {
    Alert.alert(
      'Leave Request',
      'Approve This Request!',
      [
        {text: 'NO', style: 'cancel'},
        {text: 'YES', onPress: onApprovePress},
      ],
      {
        cancelable: false,
      },
    );
  };

  const handleDecline = () => {
    Alert.alert(
      'Leave Request',
      'Reject This Request!',
      [
        {text: 'NO', style: 'cancel'},
        {text: 'YES', onPress: onDeclinePress},
      ],
      {
        cancelable: false,
      },
    );
  };

  const onApprovePress = async () => {
    await handleApproveReject(id, 'approved');
  };

  const onDeclinePress = async () => {
    await handleApproveReject(id, 'rejected');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleApprove}
          style={[basicStyles.marginRight, basicStyles.marginVentricleHalf]}>
          <Image source={ic_checked} style={styles.iconColumn} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDecline}>
          <Image source={ic_close} style={styles.iconColumn} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.infoHeadStyle, basicStyles.headingLarge]}>
        {emp_name}
      </Text>

      <View style={styles.listContainer}>
        <Text style={styles.infoHeadStyle}>
          {from}
          <Text style={basicStyles.textBold}> - </Text>
          {to}
          <Text style={basicStyles.textBold}>({totalDays})</Text>
        </Text>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.infoHeadStyle}>{leaveType}</Text>
        {/* <Text style={styles.infoHeadTextStyle}>
          {totalDays} Day (10 July - 11 July)
        </Text> */}
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.infoHeadStyle}>
          <Text style={basicStyles.textBold}>Note : </Text> {reason}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wp(3),
        }}>
        <Text
          style={[
            styles.dateTextStyle,
            {marginTop: wp(2), marginBottom: wp(-1.5)},
          ]}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>ID :</Text> {id}
        </Text>
        <Text
          style={[
            styles.dateTextStyle,
            {marginTop: wp(2), marginBottom: wp(-1.5)},
          ]}>
          <Text style={basicStyles.textBold}>Applied On :</Text> {appliedOn}
        </Text>
      </View>
    </View>
  );
};

export default AdminLeavesApproveComponent;
const {lightBluePrimary, lightGreyPrimary} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: hp(2),
    backgroundColor: '#fff',
    padding: wp(3),
    margin: wp(1.5),
    elevation: 3,
    borderRadius: wp(1.5),
    borderLeftWidth: wp(1.2),
    borderLeftColor: '#0077a2',
    paddingRight: wp(10),
  },

  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: wp(0.5),
    // marginLeft: wp(2),
  },

  infoHeadTextStyle: {
    flex: 1,
    color: '#333',
    fontSize: wp(3.3),
  },
  infoHeadStyle: {
    flex: 1,
    color: '#333',
    fontSize: wp(3.3),
    textTransform: 'capitalize',
  },
  // infoHeadStyle: {
  //   flex: 2,
  //   color: '#333',
  //   fontSize: wp(3.2),
  //   fontWeight: '700',
  //   textTransform: 'capitalize',
  // },
  // infoDashStyle: {
  //   flex: 1,
  //   color: '#333',
  //   fontSize: wp(3.2),
  //   fontWeight: '700',
  //   textTransform: 'capitalize',
  // },
  iconColumn: {
    height: hp(3),
    aspectRatio: 1 / 1,
  },
  dateTextStyle: {
    color: '#777',
    fontSize: wp(3),
  },
  buttonContainer: {
    // flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    top: wp(3.5),
    zIndex: 2,
    // right: wp(0),
  },
});