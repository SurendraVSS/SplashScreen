import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import colors from "../config/colors";
import { Form, FormItem, submitForm } from 'react-native-form-component';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    const emailInput = useRef();
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    function submitForm() {

        axios
            .post("http://localhost:3000/api/v1/users/register", { "name": name, "email": email, "password": password, "phone": phone },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(data => {
                if (data.status === 200)
                {
                    navigation.navigate('login')
                }

                setEmail('')
                setName('')
                setPassword('')
                setPhone('')

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
                            label="Name"
                            isRequired
                            value={name}
                            onChangeText={(name) => setName(name)}
                            asterik
                            ref={emailInput}
                            labelStyle={{
                                color: colors['white-smoke']
                            }}
                        />

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

                        <FormItem
                            label="Phone"
                            isRequired
                            value={phone}
                            onChangeText={(phone) => setPhone(phone)}
                            asterik
                            ref={emailInput}
                            labelStyle={{
                                color: colors['white-smoke']
                            }}
                        />


                    </Form>

                    {/* <TouchableOpacity onPress={() => submitForm()}>
                    <Text>DONE</Text>
                </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}

export default SplashScreen;

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