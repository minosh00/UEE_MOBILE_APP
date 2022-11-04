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
import commonStyles from "./styles/common";
import loginStyles from "./styles/login";

const MainScreen = ({ navigation }) => {





    return (
        <View style={loginStyles.logPage}>
            <Text style={{
                fontSize: 29,
                fontWeight: "600",
                textAlign: "center",
                color:"#2727E2",
                marginVertical: 60,
            }}
            >Welcome to the 24x7 Jobs </Text>
            <Image
                source={require("./images/jobs.png")}
                style={{ width: "100%", height: "40%" }}
                resizeMode="contain" />
            <ScrollView style={{ width: "60%" }}>



                <TouchableOpacity
                      onPress={() => navigation.navigate("Register")}
                    style={commonStyles.button2} >
                    <Text style={commonStyles.buttonText3}>Get Started</Text>

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default MainScreen;
