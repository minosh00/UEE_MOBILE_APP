import axios from "axios";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import commonStyles from "../styles/common";

const ApplyJob = ({ route, navigation }) => {
  const [applyID, setApplyID] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const applyJob = () => {
    const data = {
      ApplyID: applyID,
      FullName: name,
      Email: email,
      creator: route.params.userID,
      cv: { type: String },
    };

    axios
      .post("https://backendhostings.herokuapp.com/JobApply/ApplyJob")
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
        onChange={(e) => setApplyID(e.nativeEvent.text)}
        placeholder="Apply ID"
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
      <TouchableOpacity style={commonStyles.button}>
        <Text style={{ color: "white" }}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyJob;
