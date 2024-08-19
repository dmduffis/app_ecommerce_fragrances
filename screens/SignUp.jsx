import React, {useState} from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image, TextInput, Alert, SafeAreaView  } from 'react-native'
import BackBtn from '../components/BackBtn';
import { Button } from '../components';
import styles from './login.style';
import { Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants/theme';
import axios from 'axios';


const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
    email: Yup.string()
        .email('Provide a valid email address')
        .required('Required'),
    location: Yup.string()
        .min(3, 'Provide a valid location')
        .required('Required'),
    username: Yup.string()
        .min(3, 'Provide a valid username')
        .required('Required'),
  });

export default SignUp = ({navigation}) => {

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

const registerUser = async (values) => {
    setLoading(true);

    try {
        const endpoint ="https://fragrance-ecommerce-backend.up.railway.app/api/register";
        const data = values;
        const response = await axios.post(endpoint, data)

        if(response.status === 201) {
            navigation.replace('Login')
        }
    } 

    catch(error) {
        console.log(error)
    }
}

return (
    <ScrollView>
    <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
            <BackBtn onPress={()=> navigation.goBack()}/>
            <Image 
            source={require("../assets/images/bk.png")}
            style={styles.coverRegistration}
            />
            <Text style={styles.title}>
                Latina Botique
            </Text>

            <Formik 
            initialValues={{ email: '', password: '', location: '', username: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => registerUser(values)}
            >
                  {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched, setFieldTouched }) => (
                <View>
                
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Username</Text>
                    <View style={styles.inputWrapper(touched.email ? COLORS.primary : COLORS.offwhite)}>
                        <MaterialCommunityIcons 
                        name="face-man-profile"
                        size={20}
                        color= {COLORS.gray}
                        style={styles.iconStyle}
                        />

                        <TextInput
                        placeholder="Enter username" 
                        onFocus={() => {setFieldTouched('username')}}
                        onBlur={() => {setFieldTouched('username', '')}}
                        value={values.username}
                        onChangeText={handleChange('username')}
                        autoCapitalize="none"
                        autoCorrect="false"
                        style={{flex: 1}}
                        />
                    </View>

                    {touched.username && errors.username && (
                        <Text style={styles.errorMessage}>{errors.username}</Text>
                    )}
                </View>

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
                    <Text style={styles.label}>Location</Text>
                    <View style={styles.inputWrapper(touched.location ? COLORS.primary : COLORS.offwhite)}>
                        <Ionicons
                        name="location-outline"
                        size={20}
                        color= {COLORS.gray}
                        style={styles.iconStyle}
                        />

                        <TextInput
                        placeholder="Enter location" 
                        onFocus={() => {setFieldTouched('location')}}
                        onBlur={() => {setFieldTouched('location', '')}}
                        value={values.location}
                        onChangeText={handleChange('location')}
                        autoCapitalize="none"
                        autoCorrect="false"
                        style={{flex: 1}}
                        />
                    </View>

                    {touched.location && errors.location && (
                        <Text style={styles.errorMessage}>{errors.location}</Text>
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

                <Button title={"S I G N U P"} 
                onPress={isValid ? handleSubmit : () => invalidForm()} 
                isValid={isValid}
                loading={loading}/>
                
                <Text style={styles.registration} onPress={()=> navigation.navigate("Login")}>Login</Text>
                </View>
                    )}

            </Formik>
            
        </View>
    </SafeAreaView>
</ScrollView>
  )
}
