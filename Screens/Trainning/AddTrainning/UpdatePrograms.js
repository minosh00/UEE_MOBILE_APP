import axios from "axios";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import registerStyles from "../../../Styles/register";

const UpdatePrograms = ({ route, navigation }) => {
  const [TrainingID, setTrainingID] = useState("");
  const [TrainingTitle, setTrainingTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [TrainingPeriod, setTrainingPeriod] = useState("");
  const [TrainingImages, setTrainingImages] = useState("");
  const [certificate, setcertificate] = useState("");
  const [TrainingOrganizer, setTrainingOrganizer] = useState("");


  const updateJob = () => {
    const data = {
      TrainingID: TrainingID,
      TrainingTitle: TrainingTitle,
      Description: Description,
      TrainingPeriod: TrainingPeriod,
      TrainingImages: TrainingImages,
      certificate: certificate,
      TrainingOrganizer: TrainingOrganizer,
    };

    axios
      .patch(
        `https://backendhostings.herokuapp.com/TrainingApplied/UpdateTranningAppliedById/${route.params.id}`,
        data
      )
      .then((_res) => {
        Alert.alert(
          "Update Successful!",
          "This Trainning Programme Has Successfully Updated!",
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#F4F4F4"
      }}>

      <Text style={registerStyles.regHeader}>Update Program Details </Text>

      <ScrollView style={{ width: "100%", margin: 2 }}>
        <Text style={registerStyles.registerInput}>Enter Trainning ID</Text>
        <TextInput
          editable={false}
          value={TrainingID}
          placeholder="Job ID"
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Trainning Title</Text>
        <TextInput
          value={TrainingTitle}
          onChange={(e) => setName(e.nativeEvent.text)}
          placeholder="Full Name"
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Trainning Organizer</Text>
        <TextInput
          value={TrainingOrganizer}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholder="E - Mail"
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Description</Text>
        <TextInput
          value={Description}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholder="E - Mail"
          style={registerStyles.registerTextArea}
        />

        <Text style={registerStyles.registerInput}>Enter Trainning Period</Text>
        <TextInput
          value={TrainingPeriod}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholder="E - Mail"
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Image Link</Text>
        <TextInput
          value={TrainingImages}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholder="E - Mail"
          style={registerStyles.registerField}
        />


        <Text style={registerStyles.registerInput}>Certificate</Text>
        <TextInput
          value={certificate}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholder="E - Mail"
          style={registerStyles.registerField}
        />

        {/* UPLOAD CV */}
        <TouchableOpacity onPress={() => updateJob()}>
          <Text style={registerStyles.RegisterBtn}>Update Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UpdatePrograms;