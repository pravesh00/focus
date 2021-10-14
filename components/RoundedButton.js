import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';


export const RoundedButton = ({
    style={},
    textStyle={},
    size=125,
    ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius,style]} onPress={props.onPress}> 
        <Text style={[styles(size).text,textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles=(size) => StyleSheet.create({
  radius:{
    borderRadius:size/2,
    width:size,
    height:size,
    borderColor:'white',
    borderWidth:size/13,
    alignItems:'center',
    textAlignVertical:'center',
    justifyContent:'center'
    
  },
  text:{
      color:'#fff',
      fontSize:size/3,
      fontWeight:'bold',
      alignItems:'center'
  }
});
