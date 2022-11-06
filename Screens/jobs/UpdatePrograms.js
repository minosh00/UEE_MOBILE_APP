import axios from "axios";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import commonStyles from "../styles/common";

const UpdatePrograms = ({ route, navigation }) => {
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState(route.params.email);

  const updateJob = () => {
    const data = {
      ApplyID: route.params.jobID,
      FullName: name,
      Email: email,
      userId: route.params.userID,
    };

    axios
      .patch(
        `https://backendhostings.herokuapp.com/TrainingApplied/UpdateTranningAppliedById/${route.params.id}`,
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
      <TextInput
        editable={false}
        value={route.params.jobID}
        placeholder="Job ID"
        style={commonStyles.textView}
      />
      <TextInput
        value={name}
        onChange={(e) => setName(e.nativeEvent.text)}
        placeholder="Full Name"
        style={commonStyles.textView}
      />
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        placeholder="E - Mail"
        style={commonStyles.textView}
      />
      {/* UPLOAD CV */}
      <TouchableOpacity onPress={() => updateJob()} style={commonStyles.button}>
        <Text style={{ color: "white" }}>Update Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdatePrograms;
