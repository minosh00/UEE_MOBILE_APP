import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View, TextInput } from "react-native";
import axios from "axios";
import registerStyles from "../../Styles/register";

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
    <KeyboardAvoidingView behavior="height" style={registerStyles.regPage}>
      <Text
        style={registerStyles.regHeader}>
        Register Account
      </Text>
      <Text style={{
        marginTop: 15,
        fontSize: 18,
      }}>Create account and get your dream Job</Text>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        style={{ width: "100%" }}>
        <View
          style={{
            height: "100%",
            backgroundColor: "#F4F4F4",
          }}>


          <Text style={registerStyles.registerInput}>Enter your Full Name</Text>
          <TextInput
            style={registerStyles.registerField}
            onChange={(e) => setName(e.nativeEvent.text)}
            value={name}
            placeholder="Name" />


          <Text style={registerStyles.registerInput}>Enter E-mail Address</Text>
          <TextInput
            keyboardType="email-address"
            style={registerStyles.registerField}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            value={email} />


          <Text style={registerStyles.registerInput}>Enter your Role</Text>
          <TextInput
            style={registerStyles.registerField}
            onChange={(e) => setRole(e.nativeEvent.text)}
            value={role}
            placeholder="User Role" />


          <Text style={registerStyles.registerInput}>Enter your Country</Text>
          <TextInput
            style={registerStyles.registerField}
            onChange={(e) => setcountry(e.nativeEvent.text)}
            value={country}
            placeholder="country " />


          <Text style={registerStyles.registerInput}>Enter your Age</Text>
          <TextInput
            style={registerStyles.registerField}
            onChange={(e) => setage(e.nativeEvent.text)}
            value={age}
            keyboardType="decimal-pad"
            placeholder="age" />


          <Text style={registerStyles.registerInput}>Enter Self Introduction</Text>
          <TextInput
            style={registerStyles.registerTextArea}
            onChange={(e) => setselfIntro(e.nativeEvent.text)}
            value={selfIntro}
            numberOfLines={10}
            multiline={true} />


          <Text style={registerStyles.registerInput}>Enter Password</Text>
          <TextInput
            secureTextEntry
            style={registerStyles.registerField}
            onChange={(e) => setPwd(e.nativeEvent.text)}
            value={pwd}
            placeholder="Password" />


          <Text style={registerStyles.registerInput}>Confirm Password</Text>
          <TextInput
            secureTextEntry
            style={registerStyles.registerField}
            onChange={(e) => setCpwd(e.nativeEvent.text)}
            value={cpwd}
            placeholder="Confirm Password" />


          {pwd !== cpwd && pwd !== "" && cpwd !== "" ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Passwords are not matching!
            </Text>
          ) : (
            <Text> </Text>
          )}

          <TouchableOpacity
            disabled={pwd !== cpwd}
            onPress={() => {
              registerUser();
            }}>
            <Text style={registerStyles.RegisterBtn}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={pwd !== cpwd}
            onPress={() => navigation.navigate("Login")}>
            <Text style={registerStyles.LoginBtn}>If You Have Account? Click Here....</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;