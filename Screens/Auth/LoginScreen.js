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
                fontSize: 29,
                fontWeight: "600",
                textAlign: "center",
                color:"#2727E2",
                marginVertical: 20,
            }}
            >Sign In </Text>
            <Image
                source={require("../images/aaa.gif")}
                style={{ width: "100%", height: "40%" }}
                resizeMode="contain"
            />
            <ScrollView style={{ width: "80%" }}>
                <TextInput
                    keyboardType="email-address"
                    style={commonStyles.textView}
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                    value={email}
                    placeholder="E-mail Address"
                />
                <TextInput
                    secureTextEntry
                    style={commonStyles.textView}
                    onChange={(e) => setPwd(e.nativeEvent.text)}
                    value={pwd}
                    placeholder="Password"
                />

                <TouchableOpacity
                    style={commonStyles.button}
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
