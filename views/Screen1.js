import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {inputtextwallpaper} from '../atoms/wallpaperinputtext';
import {useRecoilState} from 'recoil';
import Navbar from './Navbar';

const Screen1 = ({navigation}) => {
  const access_key = '9kN81Xxd83LddUVUxLfiO1QfRyPWKdWAme2QHfGSGeI';
  const [searchvalue, setSearchvalue] = useRecoilState(inputtextwallpaper);
  const [imagecollection, setImagecollection] = useState([]);
  //console.log(searchvalue);

  useEffect(() => {
    const getimagecollection = async () => {
      let data = await fetch(
        `https://api.unsplash.com/search/collections?page=1&query=${searchvalue}&client_id=${access_key}`,
      );
      let jsondata = await data.json();
      setImagecollection(jsondata);
      //console.log(jsondata);
    };
    getimagecollection();
  }, [searchvalue]);

  //console.log(imagecollection);
  imagecollection.total == 0 && setSearchvalue('all');

  const ShowWallpaper = item => {
    //console.log(item);
    navigation.navigate('S2', {clickedimage: `${JSON.stringify(item)}`});
  };

  return (
    <View style={styles.container}>
      {/*<Text>showing results for {searchvalue}</Text>*/}
      <Navbar />
      <FlatList
        numColumns={2}
        data={imagecollection.results}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => ShowWallpaper(item)}>
            <View style={styles.imagecontainer}>
              {/*<Text>{item.title}</Text>*/}
              <Image
                source={{uri: item.cover_photo.urls.regular}}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    //flex:1,
    //marginTop:20,
    width: '100%',
    height: '100%',
    //backgroundColor: 'yellow',
    alignItems: 'center',
    //justifyContent:'center'
  },
  imagecontainer: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
