import React from "react";
import {Dimensions, ScrollView,View,Text,Image,TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import styles from './styles/main';
const {width,height} = Dimensions.get('window');

const Profile=(props)=>{

    return(
      <ScrollView>
      <View style={styles.fl1}>
         <View style={styles.fl1}>
            <Image style={{width:width,height:height/3}} source={{uri:props.route.params.img}}></Image>
         </View>
         <View style={[styles.frow,styles.jspaceBw]}>
             <View style={[styles.fl1,styles.pdlt10,styles.pdtp10]}>
               <Text style={[styles.username22]}>{props.route.params.name}</Text>
               <Text style={[styles.f18,styles.clBl]}>Available</Text>
             </View>
             <View style={[styles.fl1,styles.pdlt10,styles.pdtp10,styles.pdrt10,{alignItems:'flex-end'}]}>
               <TouchableOpacity style={{
                 width:100,
                 height:40,
                 backgroundColor:'#ddaaee',
                 justifyContent:'center',
                 alignItems:'center',
                 borderRadius:14
               }}>
                 <Text>Following</Text>
               </TouchableOpacity>
             </View>
         </View>
         <View style={[styles.frow,styles.jevenSpace,{marginTop:30,marginBottom:30}]}>
               <View style={[styles.fl1,{alignItems:'center'}]}>
                 <Icon name="message-square" size={32} />
               </View>
               <View style={[styles.fl1,{alignItems:'center'}]}>
                 <Icon name="phone" size={32} />
               </View>
               <View style={[styles.fl1,{alignItems:'center'}]}>
                 <Icon name="video" size={32} />
               </View>
               <View style={[styles.fl1,{alignItems:'center'}]}>
                 <Icon name="info" size={32} />
               </View>
         </View>
         <View style={styles.divider}></View>
      </View>
      </ScrollView>
    ) 
 }

 export default Profile;