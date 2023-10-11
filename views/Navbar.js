import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import logo from '../assets/search-icon-png-1.png';
import {inputtextwallpaper} from '../atoms/wallpaperinputtext';
import {useRecoilState} from 'recoil';

const Navbar = () => {
  const [searchvalue, setSearchvalue] = useRecoilState(inputtextwallpaper);
  const onChangeTextinput = txt => {
    //console.log(txt);
    setSearchvalue(txt);
    console.log(searchvalue);
  };
  return (
    <View style={styles.container}>
      {/*<Text>Navbar</Text>*/}
      <View style={styles.searchcontainer}>
        <Image source={logo} style={styles.icon} />
        <TextInput
          style={styles.searchinput}
          placeholder="search here..."
          onChangeText={onChangeTextinput}
        />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    //flex:1,
    //marginTop:20,
    width: '100%',
    paddingVertical: 10,
    //height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent:'center'
  },
  icon: {
    width: 30,
    height: 30,
  },
  searchcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  searchinput: {
    width: '90%',
    fontSize: 20,
    paddingLeft: 10,
  },
});
