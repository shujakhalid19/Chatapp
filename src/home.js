import React,{useState} from 'react';
import { Dimensions,TouchableOpacity,View,Text,Image,FlatList } from 'react-native';
import { FloatingMenu } from 'react-native-floating-action-menu';
import styles from './styles/main';



const items = [
  { label: 'Find People' },
  { label: 'Public Groups' },
  { label: 'Start a Group' },
  { label: 'Marketplace' },
];

const MESSAGES_LIST=[
  {id:0,img:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/09/09aa93bad4aef38579ab260817f2a51fa194637c_full.jpg',name:"Shuja Khalid",lastMessage:'Hey,how are you?'},
  {id:0,img:'https://i.pravatar.cc/150?img=2',name:"James",lastMessage:'Meet me at 4'},
  {id:0,img:'https://i.pravatar.cc/150?img=12',name:"Henry",lastMessage:'Meeting is delayed'},
  {id:0,img:'https://i.pravatar.cc/150?img=5',name:"Emily Smith",lastMessage:'Project ..'},
]
const {width,height}=Dimensions.get('window');
const Item=(d) => {
  return (
    <TouchableOpacity onPress={()=>d.cl(d.item)} style={[{flex:1,flexDirection:'row',justifyContent:'flex-start',marginBottom:5,marginTop:5},styles.pdlt10,styles.pdtp10]}>
      
        <Image source={{uri:d.item.img}}
        style={{
          width:50,
          height:50,
          borderRadius:80/2
        }}
        />
        <View style={[styles.pdlt10,{justifyContent:'center'}]}>
          <Text style={[styles.username22,styles.fb]}>{d.item.name}</Text>
          <Text style={[styles.clBl,styles.fb]}>{d.item.lastMessage}</Text>
        </View>
      </TouchableOpacity>
  )};
  
const Messages=(props)=>{
  const handleClick=(d)=>{
    props.navigation.navigate('Chat',d);
  }

  const _renderItem=({item})=>{
    return(
      <Item item={item} cl={handleClick} />
    )
  }
  const [isMenuOpen,setisMenuOpen]=useState(false);
  const handleMenuToggle =(d) =>{
    setisMenuOpen(d);
  }

const handleItemPress = (item, index) =>{

  console.log('pressed item', item);
}

  return(
    <>
      <FlatList 
        data={MESSAGES_LIST}
        renderItem={_renderItem}
        keyExtractor={(item, index) => String(index)}
        ListHeaderComponent={
          <>
          <View style={[styles.frow,styles.jspaceBw,{backgroundColor:'rgba(242,242,242,1)'}]}>
            <View style={[{flex:1,paddingBottom:20,justifyContent:'center'},styles.pdlt10]}>
              <Text style={{fontSize:32,fontWeight:'bold'}}>Messages</Text>
            </View>
            
            
          </View>
          <View style={[[styles.pdtp10,styles.pdbt5,styles.bdbtm4,styles.bdGrey,{backgroundColor:'#fff',justifyContent:'center',marginBottom:10}]]}>
            <Text style={[styles.f20,styles.fb,styles.clBl,styles.pdlt10]}>Archives</Text>
          </View>
          </>
        }
      />
        <View style={[{display:isMenuOpen ? 'flex' : 'none',position:'absolute',width:width,height:height}]}></View>
        <FloatingMenu
            items={items}
            isOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
            onItemPress={handleItemPress}
            bottom={50}
            right={25}
            innerWidth={41}
          />
      </>
  )
}

export default Messages