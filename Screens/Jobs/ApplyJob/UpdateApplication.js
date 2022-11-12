import axios from "axios";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import registerStyles from "../../../Styles/register";

const UpdateApplication = ({ route, navigation }) => {
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState(route.params.email);
  const [cv, setCV] = useState();

  const updateJob = () => {
    const data = {
      ApplyID: route.params.jobID,
      FullName: name,
      Email: email,
      cv: cv,
      userId: route.params.userID,
    };

    axios
      .patch(
        `https://backendhostings.herokuapp.com/JobApply/UpdateApplyJob/${route.params.id}`,
        data
      )
      .then((_res) => {
        Alert.alert(
          "Update Successful!",
          "Your Job Application Has Successfully Updated!",
          [
            {
              text: "okay",
              onPress: () =>
                navigation.navigate("Profile", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                }),
            },
          ]
        );
      })
      .catch((e) => {
        Alert.alert("ERROR!", e.message, [{ text: "Check Again" }]);
      });
  };

  return (
    <View>
      <Text
        style={registerStyles.regHeader}>
        Update Details
      </Text>
      <Text style={registerStyles.registerInput}>Job ID</Text>
      <TextInput
        editable={false}
        value={route.params.jobID}
        placeholder="Job ID"
        style={registerStyles.registerField}
      />

      <Text style={registerStyles.registerInput}>Enter Full Name</Text>
      <TextInput
        value={name}
        onChange={(e) => setName(e.nativeEvent.text)}
        placeholder="Full Name"
        style={registerStyles.registerField}
      />

      <Text style={registerStyles.registerInput}>Enter Email Address</Text>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        placeholder="E - Mail"
        style={registerStyles.registerField}
      />

      {/* <Text style={registerStyles.registerInput}>Enter CV Link</Text>
      <TextInput
        value={cv}
        onChange={(e) => setCV(e.nativeEvent.text)}
        placeholder="Enter Valid Link"
        style={registerStyles.registerField}
      /> */}
      {/* UPLOAD CV */}
      <TouchableOpacity onPress={() => updateJob()}>
        <Text style={registerStyles.RegisterBtn}>Update Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateApplication;
