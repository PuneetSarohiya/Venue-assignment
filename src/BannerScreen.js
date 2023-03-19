import React from 'react'
import {ImageBackground,StyleSheet,Text } from 'react-native'

const BannerScreen=()=> {
    const localImage = require('../assets/home.jpg');
    return (

        <ImageBackground source={localImage} style={styles.backimage}>
            <Text style={styles.header}
                 >
                    NETFLIX
                 </Text>

            </ImageBackground>
    )
  
}
const styles = StyleSheet.create({
    backimage:{
        height:"100%",
        width:'100%',
        position:'relative'
    },
    header:{
        color:'red',
        fontSize:30,
        fontFamily:'regular',
        marginLeft:15,
        fontWeight:'bold',
        position:'relative',
        marginTop:20
    },
})
 export default BannerScreen;