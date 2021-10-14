import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './components/Focus';
import { Timer } from './components/Timer';


export default function App() {
  const [focusSubject,setFocusSubject]=useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (<Timer focusSubject={focusSubject} onTimerEnd={()=>setFocusSubject(null)}></Timer>):
       <Focus addSubject={setFocusSubject}></Focus>
      }
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor:'darkblue',
    paddingTop:30

  },
  titleContainer:{
    flex:0.5,
    padding: 16,
    justifyContent:'center'
  },
  title:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    marginBottom:15
  }
});
