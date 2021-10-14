import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from './RoundedButton';


export const Focus = ({addSubject}) => {
  
    const [tempItem,setTempItem]=useState(null);
    
    

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>What to you want to focus on?</Text>
        </View>
        <View style={styles.textContainer}>
            <TextInput style={{flex:1}} onSubmitEditing={({nativeEvent})=>{
                setTempItem(nativeEvent.text)
            }} onChangeText={(text)=>{
              setTempItem(text)
                        }}></TextInput>
            <RoundedButton title="+" size={50} style={{alignSelf:'center',marginLeft:10}} onPress={()=>{
                addSubject(tempItem)
            }}></RoundedButton>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'darkblue'
  },
  titleContainer:{
    padding: 16,
    justifyContent:'center'
  },
  title:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  textContainer:{
    flexDirection:'row',
  }
});
