 

import axios from "axios";
import React, { useState } from "react";
import {
    Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";

const CreateJob = ({ route, navigation }) => {
  const [JobID, setJobID] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [jobPeriod, setjobPeriod] = useState("");
  const [JobImages, setJobImages] = useState("");
  const [CompanyName, setCompanyName] = useState("");


  const addVacancy = () => {
    const payload = {
        JobID:JobID,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        jobPeriod: jobPeriod,
        JobImages: JobImages,
        CompanyName:CompanyName,
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
        backgroundColor:"#D8F0DC"
      }}
    >
        <Image style = {{height: "27%", width: "100%"}} resizeMode = "cover" source={require("../images/addjobss.gif")} />
      <ScrollView style={{ width: "80%", margin: 2 }}>
        
      <Text style={{
                fontSize: 19,
                fontWeight: "600",
                textAlign: "center",
                color:"#2727E2",
                marginBottom:"4%"
            }}
            >Publish New Jobs </Text>
        <TextInput
          value={JobID}
          onChange={(e) => setJobID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter Job ID"
        />
        <TextInput
          value={jobTitle}
          onChange={(e) => setjobTitle(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter job Title "
        />
        <TextInput
          value={jobDescription}
          onChange={(e) => setjobDescription(e.nativeEvent.text)}
          style={commonStyles.textView1}
          placeholder=" Enter job Description"
          numberOfLines={10}
          multiline={true}
        />
        <TextInput
          value={jobPeriod}
          onChange={(e) => setjobPeriod(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter job Period"
        />

<TextInput
          value={JobImages}
          onChange={(e) => setJobImages(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Job Images link  "
        />

<TextInput
          value={CompanyName}
          onChange={(e) => setCompanyName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Company Name"
        />




        <TouchableOpacity onPress={() => addVacancy()} style={commonStyles.button}>
          <Text style={{ color: "white" }}>Publish vacancy</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateJob;
