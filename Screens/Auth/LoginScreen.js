import axios from "axios";
import React, { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import commonStyles from "../styles/common";
import loginStyles from "../styles/login";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const loginUser = () => {
        const URL = `https://backendhostings.herokuapp.com/userss/signin`;
        axios
            .post(URL, { email: email, password: pwd })
            .then((res) => {
                Alert.alert("Login success")
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
        <View style={loginStyles.logPage}>
            <Text style={{
                fontSize: 30,
                fontWeight: "800",
                textAlign: "center",
                color: "#000",
                marginVertical: 5,
            }}
            >Login </Text>
            <Text style={{
                fontWeight: "600",
                fontSize: 17,
                textAlign: "center",
                marginTop: "10%"
            }}>
                Login to your Account and get your Dream Job
            </Text>
            <Image
                source={require("../images/aaa.gif")}
                style={{ width: "100%", height: "40%" }}
                resizeMode="contain"
            />
            <ScrollView style={{ width: "80%" }}>
                <Text style={{
                    marginLeft: "7%",
                    fontWeight: "600",
                    textAlign: "left",
                    fontSize: 16

                }}>Enter your E-mail Address</Text>
                <TextInput
                    keyboardType="email-address"
                    style={commonStyles.textView}
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                    value={email}
                    placeholder="Enter your E-mail Address"
                />

                <Text style={{
                    marginLeft: "7%",
                    fontWeight: "600",
                    textAlign: "left",
                    fontSize: 16

                }}>Enter Password</Text>
                <TextInput
                    secureTextEntry
                    style={commonStyles.textView}
                    onChange={(e) => setPwd(e.nativeEvent.text)}
                    value={pwd}
                    placeholder="Enter your Password"
                />

                <TouchableOpacity
                    style={commonStyles.buttonlog}
                    onPress={() => {
                        loginUser();
                    }}
                >
                    <Text style={commonStyles.buttonText}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;
