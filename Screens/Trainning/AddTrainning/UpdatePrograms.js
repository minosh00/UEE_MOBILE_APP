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


const UpdatePrograms = ({ route, navigation }) => {

    const [TrainingID, setTrainingID] = useState("");
    const [TrainingTitle, setTrainingTitle] = useState("");
    const [Description, setDescription] = useState(0);
    const [TrainingPeriod, setTrainingPeriod] = useState("");
    const [TrainingImages, setTrainingImages] = useState("");
    const [TrainingOrganizer, setTrainingOrganizer] = useState("");


    useEffect(() => {
        axios
            .get(
                `https://backendhostings.herokuapp.com/TrainingProgram/GetTrainingByID/${route.params.TrainingID}`
            )
            .then((res) => {
                setTrainingID(res.data.TrainingID);
                setTrainingTitle(res.data.TrainingTitle);
                setDescription(res.data.Description);
                setTrainingPeriod(res.data.TrainingPeriod);
                setTrainingImages(res.data.TrainingImages);
                setTrainingOrganizer(res.data.TrainingOrganizer);

            })
            .catch((e) => {
                console.log(e);
            });
    }, []);



    const updateJob = () => {
        const URL = `https://backendhostings.herokuapp.com/TrainingProgram/UpdateTrainingById/${route.params.TrainingID}`;

        const payload = {

            TrainingID: TrainingID,
            TrainingTitle: TrainingTitle,
            Description: Description,
            TrainingPeriod: TrainingPeriod,
            TrainingImages: TrainingImages,
            TrainingOrganizer: TrainingOrganizer,

        };

        axios
            .patch(URL, payload)
            .then((_response) => {
                Alert.alert(
                    "Training  Program Updated",
                    "Your Training  Program  has updated successfully!!",
                    [
                        {
                            text: "OK",
                            onPress: () =>
                                navigation.navigate("AllTrainningProgramScreen", {
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
                    " Unsuccessful",
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
      }}>

      <Text style={registerStyles.regHeader}>Update Program Details </Text>

      <ScrollView style={{ width: "100%", margin: 2 }}>
        <Text style={registerStyles.registerInput}>Enter Trainning ID</Text>
        <TextInput
          editable={false}
          value={TrainingID}
          onChange={(e) => setTrainingID(e.nativeEvent.text)}
          placeholder="enter TrainingID "
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Trainning Title</Text>
        <TextInput
              value={TrainingTitle}
              onChange={(e) => setTrainingTitle(e.nativeEvent.text)}
              placeholder="enter  Title "
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Trainning Organizer</Text>
        <TextInput
        value={TrainingOrganizer}
        onChange={(e) => setTrainingOrganizer(e.nativeEvent.text)}
        placeholder="enter  Training Organizer"
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Enter Description</Text>
        <TextInput
          value={Description}
          onChange={(e) => setDescription(e.nativeEvent.text)}
          placeholder="enter  Description "
          style={registerStyles.registerTextArea}
        />

        <Text style={registerStyles.registerInput}>Enter Trainning Period</Text>
        <TextInput
           value={TrainingPeriod}
           onChange={(e) => setTrainingPeriod(e.nativeEvent.text)}
           placeholder="enter  Period "
          style={registerStyles.registerField}
        />

        <Text style={registerStyles.registerInput}>Image Link</Text>
        <TextInput
                 value={TrainingImages}
                 onChange={(e) => setTrainingImages(e.nativeEvent.text)}
                 placeholder="enter  Images link"
          style={registerStyles.registerField}
        />





        <TouchableOpacity onPress={() => updateJob()}>
          <Text style={registerStyles.RegisterBtn}>Update Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UpdatePrograms;