import React from "react";
import { View, Text, FlatList,StyleSheet } from "react-native";


import TrackerListItem from "./TrackerListItem";

class YearListItem extends React.Component {

    componentWillReceiveProps(props) {

    }

    render() {
        return (
            <View>
                {
                    this.props.years.year ?
                        <Text style={styles.listItemYearHeaderStyle}>
                            {this.props.years.year.name}
                        </Text> : null
                }
                <FlatList
                    data={this.props.years.trackers}
                    keyExtractor={(item, index) => item.subject.uuid + '=' + index}
                    renderItem={({ item }) => <TrackerListItem tracker={item} navigation={this.props.navigation} />}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    listItemYearHeaderStyle:{
        padding: 10,
        backgroundColor: '#EBEBEB',
        color: '#2B2D30',
        fontSize: 14,
        fontWeight: 'bold'
    },
  });

export default YearListItem;
