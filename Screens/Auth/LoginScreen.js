import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, TextInput, Image } from "react-native";
import registerStyles from "../../Styles/register";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const loginUser = () => {
        const URL = `https://backendhostings.herokuapp.com/userss/signin`;
        axios
            .post(URL, { email: email, password: pwd })
            .then((res) => {
                Alert.alert("Login Success")
                navigation.navigate("Dashboard", {
                    userID: res.data.userId,
                    userRole: res.data.userRole,
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <View>
            <Text style={registerStyles.regHeader}>Login </Text>
            <Text style={{
                marginTop: 15,
                fontSize: 18,
                textAlign: "center",
                marginBottom: 10
            }}>Login to the Account & get your Dream Job</Text>
            <ScrollView>
                <View style={{
                    backgroundColor: "#00a46c",
                    height: "40%",
                    width: "100%",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                    marginBottom: 30,
                }}>

                    <Image source={require('../../Images/test.png')}
                        style={{
                            height: 200,
                            width: 250,
                            paddingTop: 50,
                            alignSelf: "center",
                            marginTop: 20
                        }} />
                </View>

                <Text style={registerStyles.registerInput}>Enter E-mail Address</Text>
                <TextInput
                    placeholder="E-mail Address"
                    style={registerStyles.registerField}
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                    value={email} />

                <Text style={registerStyles.registerInput}>Enter your Password</Text>
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={registerStyles.registerField}
                    onChange={(e) => setPwd(e.nativeEvent.text)}
                    value={pwd} />

                <TouchableOpacity
                    onPress={() => {
                        loginUser();
                    }}>
                    <Text style={registerStyles.RegisterBtn}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}>
                    <Text style={registerStyles.LoginBtn}>If You haven't Account? Register Here....</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;