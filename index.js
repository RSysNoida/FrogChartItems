import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import YearListItem from "./src/listitems/tracker-list/YearListItem";

class StageListItem extends React.Component {

    render(){
      return (
          <View style={[ styles.listItemMargin ]}>
              <View style={styles.listItemDarkHeaderStyle}>
                  <Text style={styles.listItemStageHeaderTextStyle}>
                      { this.props.stage.curriculum_type.name }
                  </Text>
              </View>
              
              <FlatList
                  data={this.props.stage.years}
                  keyExtractor={(item, index) => (item.year ? item.year.uuid : '' )+'='+index}
                  renderItem={({item}) => <YearListItem years={item} navigation= {this.props.navigation} />}
                />
          </View>
        )
    }
}


const styles =  StyleSheet.create({
  
    listItemMargin:{
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    listItemDarkHeaderStyle:{
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 8,
        backgroundColor: '#4b4b4c',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 35
    },
    listItemStageHeaderTextStyle:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        alignSelf: 'stretch',
    }
   
      
  });
export default StageListItem;
