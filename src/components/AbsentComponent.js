import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView, // Import ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import basicStyles from '../styles/BasicStyles';
import MonthPickerComp from './MonthPicker';
import AutoScrolling from 'react-native-auto-scrolling';

class AbsentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: new Date(),
    };
  }

  // renderItem = ({item}) => <MonthPickerComp item={item} />;
  renderItem = ({item}) => {
    const renderSlots = () => {
      if (item.type === 'Sunday') {
        return (
          // <View>
          <>
            {/* <AutoScrolling> */}
            <View style={{flexDirection: 'row'}}>
              <View style={styles.cakeContainer}>
                <Text
                  style={[
                    styles.homeText,
                    {fontWeight: '700', color: '#000', textAlign: 'center'},
                  ]}>
                  {item.type}
                </Text>
                <Text style={{marginRight: wp(2)}}></Text>
                <Text
                  style={[
                    styles.homeTextStyle,
                    {fontWeight: '700', color: '#000'},
                  ]}>
                  {item.date}
                </Text>
              </View>
            </View>
            {/* </AutoScrolling> */}
          </>
          // </View>
        );
      } else {
        // return (
        //   <View style={styles.punchinout}>
        //     <Text style={styles.infoHeadStyle}>status</Text>
        //     <Text style={styles.infoHeadTextStyle}>{type}</Text>
        //   </View>
        // );
      }
    };

    let background = '#ddd8';
    let textColor = '#333';
    if (item.type === 'Sunday') {
      background = '#FFCCCB';
      textColor = '#fff';
    }
    return (
      <View style={{flex: 1, width: '100%'}}>
        <View style={[styles.container2, {backgroundColor: background}]}>
          <View style={styles.listContainer2}>
            {item.type === 'Sunday' ? null : (
              <>
                <View
                  style={{
                    width: wp(2.5),
                    height: wp(2.5),
                    borderRadius: wp(5),
                    backgroundColor:
                      item.isPunch === true
                        ? item.isPunchOut === true
                          ? 'red'
                          : 'green'
                        : 'gray',
                    marginRight: wp(1),
                    marginTop: wp(0.5),
                  }}></View>

                <View style={{flex: 2}}>
                  <Text style={styles.infoHeadTextStyle2}>{item.date}</Text>
                </View>
                <View style={styles.punchinout}>
                  <Text style={styles.infoHeadStyle2}>In </Text>
                  <Text style={styles.infoHeadTextStyle2}>{item.in_time}</Text>
                </View>
                <View style={styles.punchinout}>
                  <Text style={styles.infoHeadStyle2}>Out </Text>
                  <Text style={styles.infoHeadTextStyle2}>{item.out_time}</Text>
                </View>

                <View style={styles.punchinout}>
                  <Text style={styles.infoHeadStyle2}>status</Text>
                  <Text style={styles.infoHeadTextStyle2}>{item.type}</Text>
                </View>
              </>
            )}
          </View>
          {renderSlots()}
        </View>
      </View>
    );
  };
  keyExtractor = (item, index) => index.toString();
  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {monthTotalHalf, monthTotal, month, details} = this.props.item;
    return (
      <View style={styles.container}>
        {/* ScrollView for "Half Day Absent" and "Month" view */}
        <ScrollView>
          {this.state.month ? (
            <View style={styles.mainListContainer}>
              <TouchableOpacity style={styles.listContainer}>
                <View>
                  <Text style={styles.infoHeadStyle}>Month</Text>
                  <Text style={styles.infoHeadTextStyle}>{month}</Text>
                </View>
                <View>
                  <Text style={styles.infoHeadStyle}>HalfDay</Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: wp(3),
                      marginRight: wp(1),
                      textAlign: 'center',
                    }}>
                    {monthTotalHalf}
                  </Text>
                </View>
                <View style={basicStyles.alignCenter}>
                  <Text style={styles.infoHeadStyle}>Absent</Text>
                  <Text
                    style={[styles.infoHeadTextStyle, {alignSelf: 'flex-end'}]}>
                    {monthTotal}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
          {/* End of ScrollView for "Half Day Absent" and "Month" view */}
          {/* FlatList for details */}
          <ScrollView style={{flex: 1, width: '100%'}}>
            {details ? (
              <FlatList
                data={details}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this.itemSeparator}
                showsVerticalScrollIndicator={false}
                refreshing={this.state.isRefreshing}
                onRefresh={this.handleListRefresh}
              />
            ) : null}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

export default AbsentComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    marginBottom: hp(15),
  },

  listContainer: {
    flex: 1,
    backgroundColor: '#0077a2',
    borderRadius: 5,
    marginBottom: hp(1),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(1),
    paddingHorizontal: wp(2.5),
  },

  listContentContainerStyle: {
    paddingHorizontal: wp(5),
  },

  infoHeadTextStyle: {
    color: '#fff',
    fontSize: wp(3),
    marginRight: wp(1),
  },
  infoHeadStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(3),
    textTransform: 'capitalize',
    marginLeft: wp(1),
  },
  separator: {
    height: hp(0.5),
  },
  container2: {
    flex: 1,
    backgroundColor: '#ddd8',
    // borderWidth: 1,
    borderRadius: wp(1.2),
    marginHorizontal: wp(1.5),
    marginBottom: wp(0.4),
    marginTop: wp(0.5),
  },

  listContainer2: {
    // marginBottom: hp(0.5),
    justifyContent: 'space-between',
    padding: wp(1),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  infoHeadTextStyle2: {
    color: '#333',
    fontSize: wp(2.5),
  },
  infoHeadStyle2: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: wp(3),
    textTransform: 'capitalize',
  },
  punchinout: {flex: 1, paddingLeft: wp(2)},
  networkIssue: {
    height: hp(50),
    aspectRatio: 1 / 1,
  },
  offlineStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainContainer: {
    flex: 1,
    // backgroundColor: '#fff5',
  },
  // eventStyle: {
  //   height: 26,
  //   width: wp(100),
  //   backgroundColor: '#0077a2',
  //   alignItems: 'center',
  //   marginBottom: wp(2),
  //   // borderRadius: wp(1),
  //   // marginTop: wp(2),
  //   elevation: 3,
  // },
  homeContainer: {
    flex: 1,
    // backgroundColor: '#ddd',
  },
  homeTextContainer: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // elevation: 5,
    // marginBottom: wp(3),
    flexDirection: 'row',
    padding: wp(3),
  },
  homeText: {
    color: '#fff',
    fontSize: wp(3),
    fontWeight: '400',
    // margin: wp(1),
  },
  homeTextStyle: {
    color: '#333',
    fontSize: wp(3),
    fontWeight: '400',
  },
  homeTextStyle2: {
    color: '#333',
    fontSize: wp(4),
    fontWeight: '700',
  },

  icStyle: {
    height: hp(4),
    aspectRatio: 1 / 1,
  },

  textCenter: {
    textAlign: 'center',
    color: '#fff',
  },

  cakeContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // alignSelf: 'center',
    // justifyContent: 'space-between',
    // marginTop: wp(1),
    alignContent: 'center',
    marginHorizontal: wp(4),
    margin: wp(2),
    textAlign: 'center',
    marginTop: wp(-0),
    marginLeft: hp(18),
  },

  listContainers: {
    borderTopWidth: 0.5,
    borderTopColor: '#ccc8',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc8',
  },

  tileContainer: {
    borderWidth: 0.5,
    borderColor: '#0077a2',
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(4),
    height: hp(20),
  },
  tileIcon: {
    height: wp(10),
    aspectRatio: 1 / 1,
    marginBottom: wp(2),
  },
});
