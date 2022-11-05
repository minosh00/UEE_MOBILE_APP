import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "./styles/common";
import loginStyles from "./styles/login";
//import { LinearGradient } from 'expo-linear-gradient'

const MainScreen = ({ navigation }) => {

    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "#00a46c",
                height: "35%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <Image source={require('./images/start.png')}
                    style={{
                        height: 200,
                        width: 300,
                        marginTop: 50,
                        marginLeft: 60
                    }} />

                <View style={{ marginTop: "10%" }}>
                    <Text style={{
                        fontSize: 45,
                        color: "#000",
                        textAlign: "center",
                        fontWeight: "bold"
                    }}>Find a Perfect Job Match</Text>
                </View>

                <View style={{ marginTop: "10%" }}>
                    <Text style={{
                        fontSize: 20,
                        color: "#000",
                        textAlign: "center",
                        fontWeight: "normal"
                    }}>Find a Perfect Job Match Find a Perfect Job MatchFind a Perfect Job Match Find a Perfect Job Match Find a Perfect Job Match</Text>
                </View>
            </View>

            {/* <LinearGradient
                colors={["rgba(0,164,109,0.4)", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    margin: -45
                }}>
                <View style={{
                    backgroundColor: "FFF",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    borderRadius: 15,
                    marginTop: 25,
                    flexDirection: "row",
                    alignItems: "center"
                }}>

                </View>

            </LinearGradient> */}

            {/* <View style={{ width: "50%", alignItems: "flex-end" }}>
                <View style={{
                    backgroundColor: "00a46c",
                    paddingHorizontal: 50,
                    paddingVertical: 15,
                    borderRadius: 15
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        color: "FFF"
                    }}>
                        Skip
                    </Text>
                </View>
            </View> */}

            <ScrollView style={{  }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}>
                    <Text style={commonStyles.buttonText3}>Get Started</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default MainScreen;