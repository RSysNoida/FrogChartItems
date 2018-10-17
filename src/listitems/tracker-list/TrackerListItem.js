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
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.listItemTrackerTitleStyle} ellipsizeMode='tail' numberOfLines={1}>
                        { this.props.tracker.subject.name}{( this.props.tracker.group ? ' - '+ this.props.tracker.group.name : '' )}
                    </Text>
                    {
                        this.props.tracker.curriculum ?
                        <Text style={styles.listItemTrackerSubTitleStyle} ellipsizeMode='tail' numberOfLines={1}>
                            {this.props.tracker.curriculum.name}
                        </Text> : null
                    }
                </View>
                    {
                        this.props.tracker.curriculum ?
                        <Image source={require('./../../assets/icons/ic_next_dark.png')} resizeMode='contain' style={styles.listClickIcon} />
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
        // paddingTop: 5,
        // paddingBottom: 5,
        paddingLeft: 15,
        // paddingRight: 10,
        backgroundColor:'#ffffff',
        height: 40
        // flexWrap: 'wrap'
    },
    listThreeSidedBorderStyle: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
    },
    listItemTrackerTitleStyle: {
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
        alignSelf: 'flex-start'
    },
    listItemTrackerSubTitleStyle: {
        color: '#000000',
        fontWeight: 'normal',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginRight: 10
    },
    listClickIcon: {
        width: 22,
        height: 22,
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginRight: 15
        // position: 'absolute',
        // right:15,
        // top:8
    },
  });
export default TrackerListItem;
