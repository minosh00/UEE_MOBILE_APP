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
      <Text
        style={{
          fontSize: 29,
          fontWeight: "600",
          textAlign: "center",
          color: "#2727E2",
          marginVertical: 5,
        }}
      >
        Sign Up{" "}
      </Text>
      {/* <Image
        source={require("../images/test.png")}
        style={{ width: "100%", height: "23%" }}
        resizeMode = "contain"
      /> */}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        style={{ width: "100%" }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            backgroundColor: "#D8F0DC",
          }}
        >
          <TextInput
            keyboardType="email-address"
            style={commonStyles.textView}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            value={email}
            placeholder="E-mail Address"
          />

          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setName(e.nativeEvent.text)}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setRole(e.nativeEvent.text)}
            value={role}
            placeholder="User Role"
          />
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setcountry(e.nativeEvent.text)}
            value={country}
            placeholder="country "
          />

          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setage(e.nativeEvent.text)}
            value={age}
            keyboardType="decimal-pad"
            placeholder="age"
          />

          <TextInput
            style={commonStyles.textView1}
            onChange={(e) => setselfIntro(e.nativeEvent.text)}
            value={selfIntro}
            numberOfLines={10}
            multiline={true}
            placeholder="Enter self introduction"
          />

          <TextInput
            secureTextEntry
            style={commonStyles.textView}
            onChange={(e) => setPwd(e.nativeEvent.text)}
            value={pwd}
            placeholder="Password"
          />
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

          <Text style={{ textAlign: "center" }}>OR</Text>

          <TouchableOpacity
            style={commonStyles.button1}
            disabled={pwd !== cpwd}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={commonStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
