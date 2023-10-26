import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Colors
import {colors} from '../assets/colors/colors';
import basicStyles from '../styles/BasicStyles';
// Components
import LeaveHistoryDataComponent from './LeaveHistoryDataComponent';

export default class LeaveHistoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item}) => <LeaveHistoryDataComponent item={item} />;

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  handleDetail = showMore => () => {
    // this.setState(prevState => ({[showMore]: !prevState[showMore]}));
    this.setState(prevState => ({showMore: !prevState.showMore}));
  };

  render() {
    const {showMore} = this.state;
    const {month, monthTotal, details, monthTotalHalf} = this.props.item;
    console.log(this.props.item);
    return (
      <View style={styles.container}>
        <View style={styles.mainListContainer}>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={this.handleDetail('showMore')}>
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
              <Text style={[styles.infoHeadTextStyle, {alignSelf: 'flex-end'}]}>
                {monthTotal}
              </Text>
            </View>
          </TouchableOpacity>
          {showMore && (
            <View>
              {details ? (
                <FlatList
                  data={details}
                  renderItem={this.renderItem}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={this.itemSeparator}
                  contentContainerStyle={styles.listContentContainerStyle}
                  showsVerticalScrollIndicator={false}
                />
              ) : null}
            </View>
          )}
        </View>
      </View>
    );
  }
}

const {lightBluePrimary, lightGreyPrimary} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
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
});
