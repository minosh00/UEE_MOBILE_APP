import axios from "axios";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, TextInput } from "react-native";
import registerStyles from "../../../Styles/register";

const CreateJob = ({ route, navigation }) => {
  const [JobID, setJobID] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [jobPeriod, setjobPeriod] = useState("");
  const [JobImages, setJobImages] = useState("");
  const [CompanyName, setCompanyName] = useState("");


  const addVacancy = () => {
    const payload = {
      JobID: JobID,
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      jobPeriod: jobPeriod,
      JobImages: JobImages,
      CompanyName: CompanyName,
    };

    const URL = "https://backendhostings.herokuapp.com/jobVacancy/CreateJobVacancy"

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Job vacancy's Added!",
          "Your Job vacancy's  has been created successfully!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("Dashboard", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                }),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Inserting Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
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
      }}
    >


      <Text style={{
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center",
        color: "#150B3D",
        marginTop: 15,
        marginBottom: "5%"
      }}>
        Add new Job Vacancy
      </Text>
      <ScrollView style={{ width: "100%", margin: 2 }}>
        <Text style={registerStyles.registerInput}>Enter Job ID</Text>
        <TextInput
          value={JobID}
          onChange={(e) => setJobID(e.nativeEvent.text)}
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Job Title</Text>
        <TextInput
          value={jobTitle}
          onChange={(e) => setjobTitle(e.nativeEvent.text)}
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Company Name</Text>
        <TextInput
          value={CompanyName}
          onChange={(e) => setCompanyName(e.nativeEvent.text)}
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Job Period</Text>
        <TextInput
          value={jobPeriod}
          onChange={(e) => setjobPeriod(e.nativeEvent.text)}
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Image Link</Text>
        <TextInput
          value={JobImages}
          onChange={(e) => setJobImages(e.nativeEvent.text)}
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Job Description</Text>
        <TextInput
          value={jobDescription}
          onChange={(e) => setjobDescription(e.nativeEvent.text)}
          style={registerStyles.registerTextArea}
          numberOfLines={10}
          multiline={true}
        />

        <TouchableOpacity onPress={() => addVacancy()}>
          <Text style={registerStyles.RegisterBtn}>Create and Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateJob;
