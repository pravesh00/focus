import React from 'react';
import {View,StyleSheet,FlatList,Text,SafeAreaView} from 'react-native';

const HistoryItem=({item,index})=>{
    if(item.status>1)
    return (
        
        <Text style={{color:'red',fontSize:20,paddingTop:10}}>{item.subject}</Text>
    );
    else{
        return (
        
            <Text style={{color:'green',fontSize:20,paddingTop:10}}>{item.subject}</Text>
        );
    }
}

export const FocusHistory=({FocusHistory, onClear})=>{

    const clearHistory=()=>{
        onClear();
    }   

    return(
        <View >
            <Text style={{alignItems:'center',textAlign:'center', fontSize:15,color:'white',paddingTop:20}}>These are the things you focused on</Text>
            
                <FlatList 
                    contentContainerStyle={{alignItems:'center'}}
                    data={FocusHistory}
                    renderItem={HistoryItem}
                    keyExtractor={(item, index) => index.toString()}
                >

                </FlatList>
            
        </View>
    );

}

const styles=StyleSheet.create({
    history:(status)=>({
        color:status>1? 'red':'green',

    })

})