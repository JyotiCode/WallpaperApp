import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {inputtextwallpaper} from '../atoms/wallpaperinputtext';
import {useRecoilState} from 'recoil';

const Screen2 = ({route}) => {
  const {clickedimage} = route.params;
  const [searchvalue, setSearchvalue] = useRecoilState(inputtextwallpaper);
  const [imagedata, setImagedata] = useState();
  useEffect(() => {
    setImagedata(JSON.parse(clickedimage));
  }, []);
  // console.log(typeof (imagedata));  

  const getpermission=async()=>{

  }
  const shownextimage=async()=>{
     //console.log(searchvalue);
     //const data=await fetch(``)
     //console.log(data.url);

  }
  return (
    <View style={styles.imagecontainer}>
      {typeof imagedata == 'object' && (
        <Image
          source={{uri: imagedata.cover_photo.urls.regular}}
          style={styles.image}
        />
        
      )}
      <TouchableOpacity style={styles.dwnload} onPress={getpermission}>
          <Text style={styles.dwnloadtxt}>Download</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextbtn} onPress={shownextimage}>
          <Text style={styles.nextbtntxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  imagecontainer: {
    width: '100',
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dwnload:{
     position:'absolute',
     bottom:10,
     left:80,
     backgroundColor:'#000',
     paddingHorizontal:20,
     paddingVertical:10,
     borderRadius:10,
     elevation:10,


  },
  dwnloadtxt:{
     color:'#fff',
     fontSize:20,
     //fontWeight:'bold'
  },
  nextbtn:{
     position:'absolute',
     bottom:10,
     right:80,
     backgroundColor:'#fff',
     paddingHorizontal:20,
     paddingVertical:10,
     borderRadius:10,
     elevation:10,


  },
  nextbtntxt:{
     color:'#000',
     fontSize:20,
     //fontWeight:'bold'
  }
});
