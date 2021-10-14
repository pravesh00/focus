import React, { useState, useEffect } from 'react';
import {Text,View, StyleSheet} from 'react-native';


const minutesToMillis =(min)=>{
   return min*1000*60;
}

const formatTime= (time) => time<10 ? `0${time}` :time;

export const CountDown =({
    minutes=20,
    isPaused=true,
    onProgress,
    onEnd
})=>{

    const [millis,setMillis] =useState(minutesToMillis(minutes));

    const min=Math.floor(millis/1000/60)%60;
    const sec=Math.floor(millis/1000)%60;

    const interval= React.useRef(null);
    const CountDown =()=>{
        setMillis((time)=>{
            if(time==0){
                clearInterval(interval.current);
                onEnd();
                return time;
            }
            const timeLeft=time-1000;
            onProgress(timeLeft/minutesToMillis(minutes));
            return timeLeft;
        })
    }

    useEffect(()=>{
        setMillis(minutesToMillis(minutes));

    },[minutes])

    useEffect(()=>{
        if(isPaused)
        return;
        interval.current=setInterval(CountDown,1000);

        return ()=> clearInterval(interval.current)
    },[isPaused])

    return (
        <Text style={styles.text}>{formatTime(min)}:{formatTime(sec)}</Text>
    );
}

const styles=StyleSheet.create({
    text:{
        fontSize:80,
        color:'white',
        fontWeight:'bold',
        padding:20,
        backgroundColor:'rgba(94,132,226,0.3)',
        textAlign:'center'
    }
})