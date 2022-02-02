import React,{useState,useRef} from "react";
import {Animated,Dimensions, ScrollView,View,Text,Image,TouchableOpacity } from "react-native";
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Icon from "@expo/vector-icons/Feather";
import styles from './styles/main';
const {width,height} = Dimensions.get('window');
const HEADER_HEIGHT_EXPANDED=height/2;

const Profile=(props)=>{
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
    return(
      <View style={styles.container}>
           <Animated.View  style={{
             flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          zIndex: 2,
          position: 'absolute',
          top: insets.top,
          left:0,
          right: 10,
          backgroundColor:'#FFF',
          opacity: scrollY.interpolate({
            inputRange: [90, 110],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [90, 120],
                outputRange: [15, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>

            <View style={[styles.flsemi,styles.pdlt10,styles.pdtp10]}>
              <Image source={{uri:props.route.params.img}} style={{width:50,height:50,borderRadius:50/2}} />
            </View>
           <View style={[styles.fl1,styles.pdlt10,styles.pdtp10]}>
               <Text style={[styles.f18]}>{props.route.params.name}</Text>
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
        </Animated.View>
      <Animated.ScrollView  showsVerticalScrollIndicator={false}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: { y: scrollY },
            },
          },
        ], {useNativeDriver: false}
      )}>
     
      <View style={styles.fl1}>
            <Animated.Image style={{
              width:width,
              height:HEADER_HEIGHT_EXPANDED,
              opacity: scrollY.interpolate({
                inputRange: [90, 110],
                outputRange: [1, 0],
              }),
              borderRadius: scrollY.interpolate({
                inputRange: [50, 80],
                outputRange: [1, width/2],
              }),
              transform: [
                {
                  scale: scrollY.interpolate({
                    inputRange: [0, 50,100],
                    outputRange: [1, 0.5,0.2],
                    extrapolateLeft: 'extend',
                    extrapolateRight: 'clamp',
                  }),
                },
                  { translateX:scrollY.interpolate({
                    inputRange: [0, 50,100],
                    outputRange: [0, -50, -600],
                    extrapolateLeft: 'extend',
                    extrapolate: 'clamp',
                  }) },
                  { translateY:scrollY.interpolate({
                    inputRange: [0, 50,100],
                    outputRange: [0, -50, -200],
                    extrapolateLeft: 'extend',
                    extrapolate: 'clamp',
                  }) }
              ],

            }} source={{uri:props.route.params.img}}></Animated.Image>
         </View>   
      <View style={styles.fl1}>
      
         <Animated.View style={[styles.frow,styles.jspaceBw,{ opacity: scrollY.interpolate({
                inputRange: [90, 110],
                outputRange: [1, 0],
              }),}]}>
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
         </Animated.View>
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
         <View style={{flex:1,height:800}}>
           <Text>Menu Needed for this section</Text>
         </View>
      </View>
      </Animated.ScrollView>
      </View>
    ) 
 }

 export default Profile;