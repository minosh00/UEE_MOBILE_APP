import axios from "axios";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import commonStyles from "../../../Styles/common";

const ApplyJob = ({ route, navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const applyJob = () => {
    const data = {
      ApplyID: route.params.jobID,
      FullName: name,
      Email: email,
      userId: route.params.userID,
    };

    console.log(data)

    axios
      .post("https://backendhostings.herokuapp.com/JobApply/ApplyJob", data)
      .then((_res) => {
        Alert.alert("Insertion Successful!", "Your Job Application Has Sent!", [
          { text: "okay" },
        ]);
      })
      .catch((e) => {
        Alert.alert("ERROR!", e.message, [{ text: "Check Again" }]);
      });
  };

  return (
    <View>
      <TextInput
        editable = {false}
        value = {route.params.jobID}
        placeholder="Job ID"
        style={commonStyles.textView}
      />
      <TextInput
        onChange={(e) => setName(e.nativeEvent.text)}
        placeholder="Full Name"
        style={commonStyles.textView}
      />
      <TextInput
        onChange={(e) => setEmail(e.nativeEvent.text)}
        placeholder="E - Mail"
        style={commonStyles.textView}
      />
      {/* UPLOAD CV */}
      <TouchableOpacity onPress={() => applyJob()} style={commonStyles.button}>
        <Text style={{ color: "white" }}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyJob;
