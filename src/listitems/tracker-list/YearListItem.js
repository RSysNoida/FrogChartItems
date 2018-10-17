import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";


import TrackerListItem from "./TrackerListItem";

class YearListItem extends React.Component {

    componentWillReceiveProps(props) {
    }

    render() {
        return (
            <View >
                {
                    this.props.years.year ?
                        <Text style={styles.listItemYearTextStyle}>
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
        fontSize: 13,
        paddingLeft: 15,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'center'
    },
  });

export default YearListItem;
