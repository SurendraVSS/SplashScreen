import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Form, FormItem } from 'react-native-form-component';
import colors from "../config/colors";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

const LoginScreen = () => {

    const navigation = useNavigation();
    const emailInput = useRef();
    const [email, setEmail] = useState('')
   
    const [password, setPassword] = useState('')
    function submitForm() {
        console.log(email,password);
        axios
            .post("http://localhost:3000/api/v1/users/login", {  "email": email, "password": password},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(res => {
                console.log(res.data);

                if (res.status === 200) {
                    navigation.navigate('Main')
                }
            })
            .catch(error => console.log(error));
    };

  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text>Header</Text>
          </View>
          <View style={styles.footer}>
              <View>
                  <Form onButtonPress={() => submitForm()}>
                    
                      <FormItem
                          label="Email"
                          isRequired
                          value={email}
                          onChangeText={(email) => setEmail(email)}
                          asterik
                          ref={emailInput}
                          labelStyle={{
                              color: colors['white-smoke']
                          }}
                      />

                      <FormItem
                          label="Password"
                          isRequired
                          value={password}
                          onChangeText={(password) => setPassword(password)}
                          asterik
                          ref={emailInput}
                          labelStyle={{
                              color: colors['white-smoke']
                          }}
                      />
                  </Form>

                  
              </View>
          </View>
      </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors['white-smoke']
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: colors.darkLight,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    }
})