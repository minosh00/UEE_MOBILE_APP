import axios from "axios";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import commonStyles from "../../Styles/common";
import registerStyles from "../../Styles/register";


const ApplyProgram = ({ route, navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const applyJob = () => {
    const data = {
      ApplyProgramID: route.params.programID,
      FullName: name,
      Email: email,
      UserID: route.params.userID,
    };

    console.log(data);

    axios
      .post(
        "https://backendhostings.herokuapp.com/TrainingApplied/CreateTranningApply",
        data
      )
      .then((_res) => {
        Alert.alert("Insertion Successful!", "Your Job Application Has Sent!", [
          { text: "okay",
          onPress: () =>
          navigation.navigate("Profile", {
            userID: route.params.userID,
            userRole: route.params.userRole,
          }), },

        ]);
      })
      .catch((e) => {
        Alert.alert("ERROR!", e.message, [{ text: "Check Again" }]);
      });
  };

  return (
    <View>

      <Text style={registerStyles.registerInput}>Trainning ID</Text>
      <TextInput
        editable={false}
        value={route.params.programID}
        placeholder="Job ID"
        style={registerStyles.registerField}
      />

<Text style={registerStyles.registerInput}>Enter Full Name</Text>
      <TextInput
        onChange={(e) => setName(e.nativeEvent.text)}
        placeholder="Full Name"
        style={registerStyles.registerField}
      />

<Text style={registerStyles.registerInput}>Enter E-mail Address</Text>
      <TextInput
        onChange={(e) => setEmail(e.nativeEvent.text)}
        placeholder="E - Mail"
        style={registerStyles.registerField}
      />
      <TouchableOpacity onPress={() => applyJob()} style={registerStyles.RegisterBtn}>
        <Text style={{ color: "white", fontSize:18 }}>Enroll Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyProgram;
