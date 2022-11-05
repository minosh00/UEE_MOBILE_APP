import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";
import registerStyles from "../styles/register";

const RegisterScreen = ({ navigation }) => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setage] = useState("");
  const [country, setcountry] = useState("");
  const [selfIntro, setselfIntro] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");

  const registerUser = () => {
    const URL = "https://backendhostings.herokuapp.com/userss/signup";

    const payload = {
      name: name,
      email: email,
      country: country,
      password: pwd,
      userRole: role,
      age: age,
      selfIntro: selfIntro,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        Alert.alert("done");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Registration Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={registerStyles.regPage}>
      <Text style={{
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center",
        color: "#000",
        marginVertical: 5,
      }}
      >Register Account </Text>
      {/* <Image
        source={require("../images/test.png")}
        style={{ width: "100%", height: "23%" }}
        resizeMode = "contain"
      /> */}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        style={{ width: "100%" }}
      >
        <View style={{ backgroundColor: "#fff", height: "100%", backgroundColor: "#fff" }}>

          <Text style={{
            marginLeft: "7%",
            marginTop: "10%",
            fontWeight: "600",
            textAlign: "left",
            fontSize: 16,


          }}>Enter your Full Name</Text>
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setName(e.nativeEvent.text)}
            value={name}
            placeholder="Enter your Full Name"
          />

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

          }}>Enter UserRole</Text>
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setRole(e.nativeEvent.text)}
            value={role}
            placeholder="Enter UserRole"
          />

          <Text style={{
            marginLeft: "7%",
            fontWeight: "600",
            textAlign: "left",
            fontSize: 16

          }}>Enter your Country</Text>
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setcountry(e.nativeEvent.text)}
            value={country}
            placeholder="Enter your Country"
          />

          <Text style={{
            marginLeft: "7%",
            fontWeight: "600",
            textAlign: "left",
            fontSize: 16

          }}>Enter your Age</Text>
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setage(e.nativeEvent.text)}
            value={age}
            keyboardType="decimal-pad"
            placeholder="Enter your Age"
          />

          <Text style={{
            marginLeft: "7%",
            fontWeight: "600",
            textAlign: "left",
            fontSize: 16

          }}>Enter Self Introduction</Text>
          <TextInput
            style={commonStyles.textView1}
            onChange={(e) => setselfIntro(e.nativeEvent.text)}
            value={selfIntro}
            numberOfLines={5}
            multiline={true}
            placeholder="Enter Self Introduction"
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
            placeholder="Enter Password"
          />

          <Text style={{
            marginLeft: "7%",
            fontWeight: "600",
            textAlign: "left",
            fontSize: 16

          }}>Re-Enter Password</Text>
          <TextInput
            secureTextEntry
            style={commonStyles.textView}
            onChange={(e) => setCpwd(e.nativeEvent.text)}
            value={cpwd}
            placeholder="Confirm Password"
          />
          {pwd !== cpwd && pwd !== "" && cpwd !== "" ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Passwords are not matching!
            </Text>
          ) : (
            <Text> </Text>
          )}

          <TouchableOpacity
            style={commonStyles.button}
            disabled={pwd !== cpwd}
            onPress={() => {
              registerUser();
            }}
          >
            <Text style={commonStyles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={commonStyles.button1}
            disabled={pwd !== cpwd}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{fontSize:18, textAlign:"center", marginBottom:"20%"}}>If you already have an account. Click here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;


