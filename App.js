import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './components/Focus';
import { FocusHistory } from './components/FocusHistory';
import { Timer } from './components/Timer';

const STATUS={
  COMPLETE:1,
  CANCELED:2
}

export default function App() {
  const [focusSubject,setFocusSubject]=useState(null);
  const [focusItems,setFocusItems]=useState([]);

  const addFocusWithStatus=(subject,status)=>{
      setFocusItems([...focusItems,{subject,status}]);
  }
  console.log(focusItems);

  const onClear=()=>{

  }

  
  return (
    <View style={styles.container}>
      {focusSubject ? (<Timer focusSubject={focusSubject} onTimerEnd={()=>{
        addFocusWithStatus(focusSubject,STATUS.COMPLETE);
        setFocusSubject(null);
        
      }}

      onClearSubject={()=>{
        addFocusWithStatus(focusSubject,STATUS.CANCELED);
        setFocusSubject(null);
      }}
      ></Timer>):
      <View>
       <Focus addSubject={setFocusSubject}></Focus>
       
       <FocusHistory FocusHistory={focusItems} onClear={onClear}/>
       </View>
       
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
