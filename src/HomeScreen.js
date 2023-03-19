import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';



    const HomeScreen =(poses) =>{
        const localImage = require('../assets/background.jpg');
        return(
            <ImageBackground source={localImage} style={styles.backimage}>
            <View style={styles.mainContainer}>
                 <Text style={styles.header}
                 onPress={()=> poses.navigation.navigate("BannerScreen")}
                 >
                    NETFLIX
                 </Text>

               <View style={styles.button}>
                <Button
                onPress={()=> poses.navigation.navigate("LoginScreen")}
                title="SIGN IN"
                color="red"
                />
               </View>
               <View style={styles.heading}>
                <Text style={styles.text1}>
                Unlimited films, TV Shows, Programmes and more.
                    </Text>
                    <Text style={styles.text2}>
                    Watch anywhere. Cancel anytime
                    </Text>
                    <Text style={styles.text3}>
                    Ready to watch? Enter your email to create or restart your membership.
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.inputstyle} 
                    placeholder="Email Address"/>
                  <View style={styles.subscription}>
                <TouchableOpacity style={styles.button1}>
                 <Text style={styles.textbutton}
                 onPress={()=> poses.navigation.navigate("LoginScreen")}
                 >
                    GET STARTED
                 </Text>
                </TouchableOpacity>
               </View>  
                </View>
            </View>
         </ImageBackground>
        );
    }

    const styles = StyleSheet.create({
        backimage:{
            height:"100%",
            width:'100%'
        },
        mainContainer:{
            height:'100%',
            paddingHorizonta:30,
            paddingTop:30,
        },
        header:{
            color:'red',
            fontSize:30,
            fontFamily:'regular',
            marginLeft:30,
            fontWeight:'bold',
            position:'relative',
        },
        heading:{
            marginTop:90,
        },
        text1:{
            fontSize:37,
            fontFamily:'regular',
            width:"98%",
            textAlign:'center',
            color:'white',
            fontWeight:'bold',
        },
        text2:{
            fontSize:30,
            fontFamily:'regular',
            width:"98%",
            textAlign:'center',
            marginTop:25,
            color:'white',
            fontWeight:'bold',
        },
        text3:{
            fontSize:22,
            fontFamily:'regular',
            width:"98%",
            textAlign:'center',
            marginTop:25,
            color:'white',
            fontWeight:'bold',
        },
        inputstyle:{
            position:"relative",
            paddingHorizontal: 7,
            paddingVertical: 8,
            borderRadius: 2,
            fontFamily:'regular',
            fontSize:18,
            width:140,
            justifyContent:'center',
            alignItems:'center',
            marginLeft:40,
            marginTop:30,
            backgroundColor:'white',
        },
        tttt:{
            position:"absolute",
            marginTop:29,
            marginLeft:180,
            backgroundColor:'red',
            fontSize:20,
            fontWeight:600,
            paddingLeft:10,
            color:'white',
            padding:12,
            width:150,
        },
        button:{
            position:'absolute',
            width:120,
            padding:20,
            marginTop:10,
            marginLeft:240,
        },
        subscription:{
            position:'absolute',
            marginTop:30
          },
        button1:{
            backgroundColor:'red',
            borderRadius:2,
            width:130,
            paddingVertical:11.5,
            marginLeft:180,
        },
        textbutton:{
            color:'white',
            fontSize:20,
            fontWeight:'bold',
            marginLeft:10,
        }

    })

    export default HomeScreen;