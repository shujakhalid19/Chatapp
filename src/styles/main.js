'use strict';
import { StyleSheet,Dimensions } from "react-native";
const {width,height} = Dimensions.get('window');

module.exports  = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divider:{
      width:width,
      height:30,
      backgroundColor:'#d2d2d2'
    },
    flhalf:{flex:0.5},
    fl1:{flex:1},frow:{flexDirection:'row'},frowrev:{flexDirection:'row-reverse'},jStart:{justifyContent:'flex-start'},jspaceBw:{justifyContent:'space-between'},jevenSpace:{justifyContent:'space-evenly'},
    username22:{
      fontSize:20
    },
    mdtp10:{marginTop:10},
    mdtp20:{marginTop:20},
    mdbt10:{marginBottom:10},
    pdtp10:{
      paddingTop:10
    },
    pdbt5:{
      paddingBottom:10
    },
    pdlt5:{
      paddingLeft:5
    },
    pdrt10:{paddingRight:10},
    pdlt10:{
      paddingLeft:10
    },f18:{fontSize:16},f20:{fontSize:20},fb:{fontWeight:'bold'},clBl:{color:'cornflowerblue'},
    bdbtm4:{
      borderBottomWidth:1.5
    },
    bdGrey:{
      borderColor:'#d4d4d4'
    }
  });