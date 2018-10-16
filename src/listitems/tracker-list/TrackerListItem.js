import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

class TrackerListItem extends React.Component {

    openObjectiveView = () => {
        this.props.navigation.navigate('Objectives', {
            tracker: this.props.tracker,
            title:  this.props.tracker.subject.name+( this.props.tracker.group ? ' - '+ this.props.tracker.group.name : '' ),
            year: this.props.year
        });
    }

    render() {
      return (
        <TouchableOpacity onPress={() => (this.props.tracker.subject.noTracker ? null : this.openObjectiveView())}>
            <View style={[styles.listItemTrackerStyle, styles.listThreeSidedBorderStyle]}>
                <View>
                    <Text style={styles.listItemTrackerTitleStyle}>
                        { this.props.tracker.subject.name}{( this.props.tracker.group ? ' - '+ this.props.tracker.group.name : '' )}
                    </Text>
                    {
                        this.props.tracker.curriculum ?
                        <Text style={styles.listItemTrackerSubTitleStyle}>
                            {this.props.tracker.curriculum.name}
                        </Text> : null
                    }
                </View>
                    {
                        this.props.tracker.curriculum ?
                        <Image source={require('./../../assets/icons/ic_next_dark.png')} resizeMode='center' style={styles.listClickIcon} />
                        : null 
                    }
            </View>
        </TouchableOpacity>
      );
    };
}

const styles = StyleSheet.create({
    listItemTrackerStyle:{
        flex:1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor:'#ffffff',
        // flexWrap: 'wrap'
    },
    listThreeSidedBorderStyle: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
    },
    listItemTrackerTitleStyle: {
        color: '#404041',
        fontWeight: 'bold',
    },
    listItemTrackerSubTitleStyle: {
        color: '#404041',
        fontWeight: 'normal',
        fontSize: 10
    },
    listClickIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        right:15,
        top:15
    },
  });
export default TrackerListItem;
