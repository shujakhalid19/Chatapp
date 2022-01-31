import React from "react";
import { StyleSheet,Dimensions,FlatList,View,Image,Text,TouchableOpacity,TextInput } from "react-native";
import styles from './styles/main';



const DATA_MESSAGES=[
    {id:0,frnName:'Shuja Khalid',chats:[
      {id:1,text:'Hi',sender:'Shuja Khalid',img:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/09/09aa93bad4aef38579ab260817f2a51fa194637c.jpg'},
      {id:1,text:'Hello',sender:'Me',img:'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'},
      {id:1,text:'To style the header in React Navigation use a header object inside the navigationOptions object',sender:'Shuja Khalid',img:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/09/09aa93bad4aef38579ab260817f2a51fa194637c.jpg'},
    ]}
  ]
  
  const {width,height}=Dimensions.get('window');
  const Chats=({item}) => {
    var state=item.sender==="Me"
      return(
      <View style={[styles.pdlt10,styles.mdtp10,styles.mdbt10,styles.pdtp10,item.sender==="Me"? styles.frowrev : styles.frow,styles.jStart]}>
        <View style={state ? styles.pdlt10 : styles.pdrt10}>
          <Image style={{width:40,height:40,borderRadius:50}}
          source={{uri:item.img}} />
        </View>
        <View>
          
          <View style={[messages.Chat,state ? messages.myChat : messages.frnChat]}>
            <Text style={{lineHeight:25}}>{item.text}</Text>
          </View>
        </View>
      </View>
      )
  };
  


  const ChatScreen=(props)=>{
    const _renderMessages=({item})=>{
      return(
        <Chats item={item} />
      )
    }
    
  const headerComponent=()=>(
    <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.94)'}}>
          <View style={[{paddingBottom:20},styles.bdbtm4,styles.bdGrey,styles.pdlt10,styles.pdrt10,styles.frow,styles.jspaceBw]}>
            <View>
              <Text style={{fontSize:22,fontWeight:'bold'}}>{props.route.params.name}</Text>
              <Text style={[styles.f18,styles.clBl]}>Online</Text>
          
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Profile',props.route.params)}>
              <Image source={{uri:props.route.params.img}}
               style={{
                 width:50,
                 height:50,
                 borderRadius:50/2
               }}/>
            </TouchableOpacity>
          </View>
          </View>
  )
  
    return(
      <>
      <FlatList 
        data={DATA_MESSAGES[0].chats}
        renderItem={_renderMessages}
        keyExtractor={(item, index) => String(index)}
        ListHeaderComponent={
          headerComponent
        }
        stickyHeaderIndices={[0]}
        contentContainerStyle = {{flexGrow:1,backgroundColor:'#D3D3D388'}}
        
      />
      <View style={{width:width,height:height/12,backgroundColor:'#FFF',borderTopColor:'#d4d4d4',borderTopWidth:1,paddingTop:5}}>
            <View style={[styles.frow,styles.jspaceBw,styles.pdrt10,styles.pdlt10]}>
              <TextInput multiline={true} placeholder='type your message'
                style={{
                  height:45,
                  width:width/1.3
                }}
              />
              <TouchableOpacity style={[{justifyContent:'center'}]}>
                <Text style={[styles.fb,styles.clBl]}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
          </>
    )
  }

  const messages=StyleSheet.create({
    Chat:{maxWidth:width/2,padding:10},
    myChat:{
      backgroundColor:'#aaeedd',borderRadius:14
    },
    frnChat:{
      backgroundColor:'#aaeeaa',borderRadius:14
    }
  })

  export default ChatScreen;