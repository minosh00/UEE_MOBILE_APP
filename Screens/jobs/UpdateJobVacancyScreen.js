 

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../styles/Colors";
import commonStyles from "../styles/common";
import newOrderStyles from "../styles/newOrder";

const UpdateJobVacancyScreen = ({ route, navigation }) => {

  const [JobID, setJobID] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState(0);
  const [jobPeriod, setjobPeriod] = useState("");
  const [JobImages, setJobImages] = useState("");
  const [CompanyName, setCompanyName] = useState("");


  useEffect(() => {
    axios
      .get(
        `https://backendhostings.herokuapp.com/jobVacancy/GetJobVacancyByID/${route.params.JobID}`
      )
      .then((res) => {
        setJobID(res.data.JobID);
        setjobTitle(res.data.jobTitle);
        setjobDescription(res.data.jobDescription);
        setjobPeriod(res.data.jobPeriod);
        setJobImages(res.data.JobImages);
        setCompanyName(res.data.CompanyName);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

 

  const createOrder = () => {
    const URL = `https://backendhostings.herokuapp.com/jobVacancy/UpdateJobVacancyById/${route.params.JobID}`;

    const payload = {

        JobID: JobID,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        jobPeriod: jobPeriod,
        JobImages: JobImages,
        CompanyName: CompanyName,

    };

    axios
      .patch(URL, payload)
      .then((_response) => {
        Alert.alert(
          "JobVacancy Updated",
          "Your Jobs has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("All jobs", {
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
    <View>

<Text style={{
                fontSize: 29,
                fontWeight: "600",
                textAlign: "center",
                color:"#2727E2",
                marginVertical: 20,
            }}
            >Update job  </Text>
<Image
                source={require("../images/update.gif")}
                style={{ width: "100%", height: "40%" }}
                resizeMode="contain"
            />
      <ScrollView>
      
        <TextInput
          value={JobID}
          onChange={(e) => setJobID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter Job ID "
        />
        <TextInput
          value={jobTitle}
          onChange={(e) => setjobTitle(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter job Title "
        />
        <TextInput
          value={jobDescription}
          onChange={(e) => setjobDescription(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter job Description "
        />
        <TextInput
          value={jobPeriod}
          onChange={(e) => setjobPeriod(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter job Period "
        />
        <TextInput
       
          value={JobImages}
          onChange={(e) => setJobImages(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter Job Images link"
        />
        <TextInput
          value={CompanyName}

          onChange={(e) => setCompanyName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter Company Name"
        />
      
      

        <TouchableOpacity
          onPress={() => createOrder()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Update Job Vacancy</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UpdateJobVacancyScreen;
