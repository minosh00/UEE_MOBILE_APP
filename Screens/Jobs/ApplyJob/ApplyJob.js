import axios from "axios";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import JobStyle from "../../../Styles/Jobs";
import registerStyles from '../../../Styles/register'

const ApplyJob = ({ route, navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cv, setCV] = useState();

  const applyJob = () => {
    const data = {
      ApplyID: route.params.jobID,
      FullName: name,
      Email: email,
      cv: cv,
      userId: route.params.userID,
    };

    console.log(data)

    axios
      .post("https://backendhostings.herokuapp.com/JobApply/ApplyJob", data)
      .then((_res) => {
        Alert.alert("Insertion Successful!", "Your Job Application Has Sent!", [
          { text: "okay" },
        ]);
        navigation.navigate("DisplayAllJobs", {
          userID: route.params.userID,
          userRole: route.params.userRole,
        });
      })
      .catch((e) => {
        Alert.alert("ERROR!", e.message, [{ text: "Check Again" }]);
      });
  };

  return (
    <View>
      <Text style={registerStyles.registerInput}>Job ID </Text>
      <TextInput
        editable={false}
        value={route.params.jobID}
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
        placeholder="E-Mail"
        style={registerStyles.registerField}
      />
      <Text style={registerStyles.registerInput}>Enter Portfolio Link</Text>
      <TextInput
        onChange={(e) => setCV(e.nativeEvent.text)}
        placeholder="Valid Link"
        style={registerStyles.registerField}
      />
      {/* UPLOAD CV */}
      <TouchableOpacity onPress={() => applyJob()} style={JobStyle.applyBtn}>
        <Text style={{ color: "white", fontSize: 20 }}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyJob;
