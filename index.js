import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import YearListItem from "./src/listitems/tracker-list/YearListItem";

class StageListItem extends React.Component {

    render(){
      return (
          <View style={[ styles.listItemMargin ]}>
              <View style={styles.listItemDarkHeaderStyle}>
                  <Text style={styles.listItemStageHeaderTextStyle} numberOfLines={1} ellipsizeMode='tail'>
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
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
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
        fontFamily: 'Arial',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        // flex: 1,
         alignSelf: 'center',
        textAlignVertical:'center',
      //  backgroundColor:'red'
    }
   
      
  });
export default StageListItem;
