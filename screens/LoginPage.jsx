import React, {useState} from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BackBtn from '../components/BackBtn';
import { Button } from '../components';
import styles from './login.style';
import { Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { COLORS } from '../constants/theme';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
    email: Yup.string().email('Provide a valid email address').required('Required'),
  });

export default LoginPage = ({navigation}) => {

    const [loading, setLoading] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [obscureText, setObscureText] = useState(false)

    const invalidForm = () => {
        Alert.alert(
          "Invalid Form",
          "Please provide all required fields",
          [
            {
              text: "Continue", onPress: ()=> {}
            }
          ]
        )
      }
    
    const login = async (values) => {
      setLoading(true)
      
      try {
        const endpoint = "http://localhost:3000/api/login"
        const data = values;

        const response = await axios.post(endpoint, data)
        if(response.status === 200){
          setLoading(false);
          setResponseData(response.data)
          await AsyncStorage.setItem(
            `user${responseData._id}`, JSON.stringify(responseData))
          await AsyncStorage.setItem(
            'id', JSON.stringify(responseData._id))
          await AsyncStorage.setItem(
            'token', JSON.stringify(responseData.token))
          navigation.replace('Bottom Navigation')
        } 
        else {
          Alert.alert(
            "Error Logging in",
            "Please provide valid credentials",
            [
              {
                text: "Continue", onPress: ()=> {}
              }
            ]
          )
          
        }
      } 
      
      catch(error){
        Alert.alert(
          "Error",
          "Oops. There was an error logging in. Please try again.",
          [
            {
              text: "Continue", onPress: ()=> {}
            }
          ]

     )} 
     
     finally {
      setLoading(false);
     }
    }

    return (
        <ScrollView>
            <SafeAreaView style={{marginHorizontal: 20}}>
                <View>
                    <BackBtn onPress={()=> navigation.goBack()}/>
                    <Image 
                    source={require("../assets/images/bk.png")}
                    style={styles.cover}
                    />
                    <Text style={styles.title}>
                        Para Tu Cuidado Personal
                    </Text>

                    <Formik 
                    initialValues={{ email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => login(values)}
                    >
                          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched, setFieldTouched }) => (
                        <View>
                        
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputWrapper(touched.email ? COLORS.primary : COLORS.offwhite)}>
                                <MaterialCommunityIcons 
                                name="email-outline"
                                size={20}
                                color= {COLORS.gray}
                                style={styles.iconStyle}
                                />

                                <TextInput
                                placeholder="Enter email" 
                                onFocus={() => {setFieldTouched('email')}}
                                onBlur={() => {setFieldTouched('email', '')}}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                autoCapitalize="none"
                                autoCorrect="false"
                                style={{flex: 1}}
                                />
                            </View>

                            {touched.email && errors.email && (
                                <Text style={styles.errorMessage}>{errors.email}</Text>
                            )}
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputWrapper(touched.password ? COLORS.primary : COLORS.offwhite)}>
                                <MaterialCommunityIcons 
                                name="lock-outline"
                                size={20}
                                color= {COLORS.gray}
                                style={styles.iconStyle}
                                />

                                <TextInput
                                secureTextEntry={obscureText}
                                placeholder="Password" 
                                onFocus={() => {setFieldTouched('password')}}
                                onBlur={() => {setFieldTouched('password', '')}}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                autoCapitalize="none"
                                autoCorrect="false"
                                style={{flex: 1}}
                                />
                            <TouchableOpacity onPress={() => setObscureText(!obscureText)}>
                                <MaterialCommunityIcons 
                                name={obscureText ? "eye-outline" : "eye-off-outline"}
                                size={18}
                                />
                            </TouchableOpacity>

                            </View>

                            {touched.password && errors.password && (
                                <Text style={styles.errorMessage}>{errors.password}</Text>
                            )}
                        </View>

                        <Button title={"L O G I N"} onPress={isValid ? handleSubmit : () => invalidForm()} isValid={isValid} loading={loading}/>
                        
                        <Text style={styles.registration} onPress={()=> navigation.navigate("SignUp")}>Register</Text>
                        </View>
                            )}

                    </Formik>
                    
                </View>
            </SafeAreaView>
        </ScrollView>
    )
  }
