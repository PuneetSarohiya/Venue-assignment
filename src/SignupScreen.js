import React, { useState }from 'react';
import { View, StyleSheet,Text,TextInput, Button, TouchableOpacity } from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { ImageBackground } from 'react-native';
import { Alert } from 'react-native';

const SignupScreen = (poses) => {
    const localImage = require('../assets/background.jpg');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('')
    const app= initializeApp(firebaseConfig);
    const auth= getAuth(app);

    const handleSignup = () => {
   createUserWithEmailAndPassword(auth,email,password)
.then(userCredentials =>{
    console.log('account created')
    const user = userCredentials.user;
    console.log(user);
    poses.navigation.navigate('BannerScreen')
})
.catch(error=> {
    console.log(error)
    Alert.alert(error.message);
})
    }
    
    return(
        <ImageBackground source={localImage} style={styles.backimage}>
             <View style={styles.mainContainer}>
          <TouchableOpacity>
                 <Text style={styles.header}
                 onPress={()=> poses.navigation.navigate("HomeScreen")}
                 >
                    NETFLIX
                 </Text>
                </TouchableOpacity>
        <View style={styles.button}>
         <Button
         onPress={()=> poses.navigation.navigate("LoginScreen")}
         title="SIGN IN"
         color="red"
         />
        </View>
        <View style={styles.Signupscreen}>
          <Text style={styles.signtext}>
            SIGN UP
          </Text>
          <TextInput style={styles.input} 
          placeholder="Enter Your Name"
          />
          <TextInput style={styles.input} 
          placeholder="Enter Email"
          value={email}
          onChangeText={text => setEmail(text)}
        
          />
              <TextInput style={styles.input} 
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          />
                 <TouchableOpacity  style={styles.Signup}>
                 <Text style={styles.textsignup}
                 onPress={handleSignup}
                 >
                    Sign Up
                 </Text>
                </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>

    )
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
    button:{
        position:'absolute',
        width:120,
        padding:20,
        marginTop:10,
        marginLeft:240,
    },
    Signupscreen:{
        width:330,
        height:400,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:100,
        backgroundColor:'rgba(0,0,0,0.6)',
        borderRadius:15,
    },
    signtext:{
        fontSize:35,
        color:'white',
        fontWeight:'bold',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20,
    },
    input:{
        position:"relative",
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 2,
        fontFamily:'regular',
        fontSize:13,
        width:245,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:40,
        marginTop:30,
        backgroundColor:'white',
        color:'gray',
        textDecorationStyle:"none",
        border:"none"
    },
    textinfo:{
        marginTop:20,
        marginLeft:45,
        color:'white',
        fontSize:25,
        position:'relative',
    },
    Signupauth:{
        position:"absolute",
        marginTop:20,
        marginLeft:10,
    },
    signup:{
           fontSize:25,
           color:'red',
           marginLeft:190,
           fontWeight:'bold'

    },
            Signup:{
                fontSize:23,
                color:'white',
                backgroundColor:'red',
                width:150,
                padding:10,
                marginLeft:'auto',
                marginRight:'auto',
                borderRadius:6,
                marginVertical:20
            },
            textsignup:{
                fontSize:20,
                color:'white',
                fontWeight:'bold',
                textAlign:'center'
            },

})

export default SignupScreen;