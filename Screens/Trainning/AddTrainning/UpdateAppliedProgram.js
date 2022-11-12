  
 import axios from "axios";
import registerStyles from "../../../Styles/register";
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


const UpdateAppliedProgram = ({ route, navigation }) => {

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#F4F4F4"
      }}>

      <Text style={registerStyles.regHeader}>Update  Applied Program Details </Text>

      <ScrollView style={{ width: "100%", margin: 2 }}>
        <Text style={registerStyles.registerInput}> Training ID</Text>
        <TextInput
         editable={false}
         value={route.params.TrainingID}
         placeholder="Training ID"
          style={registerStyles.registerField}
        />

      

        <Text style={registerStyles.registerInput}>Enter  Full Name </Text>
        <TextInput
            value={name}
            onChange={(e) => setName(e.nativeEvent.text)}
            placeholder="Full Name"
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter email</Text>
        <TextInput
              value={email}
              onChange={(e) => setEmail(e.nativeEvent.text)}
              placeholder="E - Mail"
          style={registerStyles.registerTextArea}
        />

       





        <TouchableOpacity onPress={() => updateJob()}>
          <Text style={registerStyles.RegisterBtn}>Update Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UpdateAppliedProgram;