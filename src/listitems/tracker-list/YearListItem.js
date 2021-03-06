import React from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
 
import TrackerListItem from "./TrackerListItem";
 
class YearListItem extends React.Component {
 
    componentWillReceiveProps(props) {
    }
 
    render() {
        return (
            <View >
                {
                    this.props.years.year ?
                        <Text style={styles.listItemYearTextStyle} numberOfLines={1} ellipsizeMode='tail'>
                            {this.props.years.year.name}
                        </Text>
                        : null
                }
                <FlatList
                    data={this.props.years.trackers}
                    keyExtractor={(item, index) => item.subject.uuid + '=' + index}
                    renderItem={({ item }) => <TrackerListItem tracker={item} navigation={this.props.navigation} year={this.props.years.year} />}
                />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    listItemYearTextStyle:{
        backgroundColor: '#EBEBEB',
        height: 25,
        color: '#000000',
        fontSize: 12,
        paddingLeft: 15,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingTop: Platform.select({android: 0, ios: 5}),
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#E3E3E3',
        borderBottomWidth: 1
    },
  });
 
export default YearListItem;
 
