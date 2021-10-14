import React, {useState} from 'react';
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { CountDown } from './CountDown';
import { RoundedButton } from './RoundedButton';

const DEFAULT_TIME=0.1;

export const Timer=({focusSubject ,onTimerEnd, onClearSubject})=>{
    const [time,setTime] =useState(DEFAULT_TIME);
    const [isStarted,setisStarted]=useState(false);
    const [progress,setProgress] =useState(1);

    const onProgress=(progress)=>{
        setProgress(progress)
    }

    const vibrate=()=>{
        if(Platform.OS==='ios'){
            const interval=setInterval(()=>Vibration.vibrate(),1000);
            setTimeout(()=>clearInterval(interval),5000);
        }else{
            Vibration.vibrate(5000);
        }
    }

    const changeTime=(time)=>{
        setTime(time);
        setisStarted(false);
        setProgress(1);
    }

    const onEnd=()=>{
        vibrate();
        changeTime(DEFAULT_TIME);
        onTimerEnd();
    }

    return(
        <View style={styles.container}>
            
            <View style={{marginTop:20,flexDirection:'column'}}>
            <CountDown isPaused={!isStarted} minutes={time} onProgress={onProgress} onEnd={onEnd}></CountDown>
            <Text style={styles.title}> You are focusing on: </Text>
            <Text style={styles.task}>
            
            {focusSubject}
            </Text>
            </View>
            <View style={{paddingTop:20}}>
            <ProgressBar color='#5E84E2' style={{height:10}} progress={progress}></ProgressBar>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',padding:30}}>
                <RoundedButton title="10" size={70} style={{marginRight:30}} onPress={()=>{
                    changeTime(10)
                }}></RoundedButton>
                <RoundedButton title="15" size={70} onPress={()=>{
                    changeTime(15)
                }}></RoundedButton>
                <RoundedButton title="20" size={70} style={{marginLeft:30}} onPress={()=>{
                    changeTime(20)
                }}></RoundedButton>
            </View>
           
            {isStarted? <RoundedButton title='Stop' size={120} onPress={()=>
                setisStarted(false)
            } style={{justifyContent:'center', alignContent:'center', alignSelf: 'center',}}></RoundedButton>:<RoundedButton title='Start' size={120} onPress={()=>
                setisStarted(true)
            } style={{justifyContent:'center', alignContent:'center', alignSelf: 'center',}}></RoundedButton>}
            <View style={{justifyContent:'center',alignSelf:'center', paddingTop:105, flex:1}}>
                <RoundedButton title='Cancel' size={50} onPress={()=>onClearSubject()} style={{width:100, borderColor:'red', color:'red',borderWidth:0}} textStyle={{color:'red'}}></RoundedButton>
            </View>
        
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'darkblue',
        justifyContent:'center',
        alignContent:'center',
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize: 20,
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        marginTop:20
    },
    task:{
        color:'white',
        fontSize:20,
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        marginTop:10
    },
    cancel:{
        
        justifyContent:'center',
        alignSelf:'center',
        paddingTop:30
    }
});