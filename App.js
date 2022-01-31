import { StatusBar } from 'expo-status-bar';
import { memo, useMemo } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const MESSAGES_LIST=[
  {id:0,img:'https://i.pravatar.cc/150?img=3',name:"Shuja Khalid",lastMessage:'Hey,how are you?'},
  {id:0,img:'https://i.pravatar.cc/150?img=2',name:"John Doe",lastMessage:'Meet me at 4'},
  {id:0,img:'https://i.pravatar.cc/150?img=12',name:"Carol Smith",lastMessage:'Meeting is delayed'},
  {id:0,img:'https://i.pravatar.cc/150?img=5',name:"Henry Ford",lastMessage:'Project ..'},
]

const DATA_MESSAGES=[
  {id:0,frnName:'Shuja Khalid',messages:[
    {id:1,text:'Hi'},
    {id:1,text:'Hello'}
  ]}
]

const Item=({item}) => {
  return (
    <View style={[{flex:1,flexDirection:'row',justifyContent:'flex-start',marginBottom:5,marginTop:5},styles.pdlt10,styles.pdtp10]}>
      
        <Image source={{uri:item.img}}
        style={{
          width:50,
          height:50,
          borderRadius:80/2
        }}
        />
        <View style={[styles.pdlt10,{justifyContent:'center'}]}>
          <Text style={[styles.username22,styles.fb]}>{item.name}</Text>
          <Text style={[styles.clBl,styles.fb]}>{item.lastMessage}</Text>
        </View>
      </View>
  )};

const Messages=(props)=>{

  const _renderItem=({item})=>{
    return(
      <Item item={item} />
    )
  }

  return(
      <FlatList 
        data={MESSAGES_LIST}
        renderItem={_renderItem}
        keyExtractor={(item, index) => String(index)}
        
        ListHeaderComponent={
          <>
          <View style={[{flex:1,paddingBottom:20,justifyContent:'center',backgroundColor:'rgba(242,242,242,1)'},styles.pdlt10]}>
            <Text style={{fontSize:32,fontWeight:'bold'}}>Messages</Text>
          </View>
          <View style={[[styles.pdtp10,styles.pdbt5,styles.bdbtm4,styles.bdGrey,{backgroundColor:'#fff',justifyContent:'center',marginBottom:10}]]}>
            <Text style={[styles.f18,styles.fb,styles.clBl,styles.pdlt10]}>Archives</Text>
          </View>
          </>
        }
      />
  )
}


const ChatScreen=(props)=>{
  const _renderMessages=({item})=>{
    return(
      null
    )
  }
  
  return(
    <FlatList 
      data={DATA_MESSAGES}
      renderItem={_renderMessages}
      keyExtractor={(item, index) => String(index)}
      ListHeaderComponent={
        <View style={[{flex:1,paddingBottom:20,justifyContent:'center',backgroundColor:'rgba(242,242,242,1)'},styles.pdlt10]}>
          <Text style={{fontSize:32,fontWeight:'bold'}}>Messages</Text>
        </View>
      }
    />
  )
}

export default function App() {
  return (
    <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' && 40 }}>
      <ChatScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fl1:{flex:1},frow:{flexDirection:'row'},jStart:{justifyContent:'flex-start'},
  username22:{
    fontSize:20
  },
  pdtp10:{
    paddingTop:10
  },
  pdbt5:{
    paddingBottom:10
  },
  pdlt5:{
    paddingLeft:5
  },
  pdlt10:{
    paddingLeft:10
  },f18:{fontSize:20},fb:{fontWeight:'bold'},clBl:{color:'cornflowerblue'},
  bdbtm4:{
    borderBottomWidth:1.5
  },
  bdGrey:{
    borderColor:'#d4d4d4'
  }
});
