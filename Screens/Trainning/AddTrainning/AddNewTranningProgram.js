import React, { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import registerStyles from "../../../Styles/register";
import axios from "axios";

const AddNewTranningProgram = ({ route, navigation }) => {
    const [TrainingID, setTrainingID] = useState("");
    const [TrainingTitle, setTrainingTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [TrainingPeriod, setTrainingPeriod] = useState("");
    const [TrainingImages, setTrainingImages] = useState("");
    const [certificate, setcertificate] = useState("");
    const [TrainingOrganizer, setTrainingOrganizer] = useState("");

    const AddProgram = () => {
        const payload = {
            TrainingID: TrainingID,
            TrainingTitle: TrainingTitle,
            Description: Description,
            TrainingPeriod: TrainingPeriod,
            TrainingImages: TrainingImages,
            certificate: certificate,
            TrainingOrganizer: TrainingOrganizer,
        };

        const URL = "https://backendhostings.herokuapp.com/TrainingProgram/CreateTrainingProgram"

        axios
            .post(URL, payload)
            .then((_response) => {
                Alert.alert(
                    "Training Program 's Added!",
                    "Your program  has been created successfully!!",
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
            }}>
            <ScrollView style={{ width: "100%", margin: 2 }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "800",
                    textAlign: "center",
                    color: "#150B3D",
                    marginTop: 15,
                    marginBottom: "5%"
                }}>Add New Program</Text>


                <Text style={registerStyles.registerInput}>Enter Trainning ID</Text>
                <TextInput
                    value={TrainingID}
                    onChange={(e) => setTrainingID(e.nativeEvent.text)}
                    style={registerStyles.registerField}
                    placeholder="Enter Training ID"
                />

                <Text style={registerStyles.registerInput}>Enter Trainning Title</Text>
                <TextInput
                    value={TrainingTitle}
                    onChange={(e) => setTrainingTitle(e.nativeEvent.text)}
                    style={registerStyles.registerField}
                    placeholder="Enter Training Title "
                />

                <Text style={registerStyles.registerInput}>Enter Trainning Organizer</Text>
                <TextInput
                    value={TrainingOrganizer}
                    onChange={(e) => setTrainingOrganizer(e.nativeEvent.text)}
                    style={registerStyles.registerField}
                    placeholder="Enter Training Organizer  "
                />


                <Text style={registerStyles.registerInput}>Enter Description</Text>
                <TextInput
                    value={Description}
                    onChange={(e) => setDescription(e.nativeEvent.text)}
                    style={registerStyles.registerTextArea}
                    placeholder=" Enter  Description"
                    numberOfLines={10}
                    multiline={true}
                />

                <Text style={registerStyles.registerInput}>Enter TrainingDescription</Text>
                <TextInput
                    value={TrainingPeriod}
                    onChange={(e) => setTrainingPeriod(e.nativeEvent.text)}
                    style={registerStyles.registerField}
                    placeholder=" Enter Training Period"
                />

                <Text style={registerStyles.registerInput}>Enter Image Link</Text>
                <TextInput
                    value={TrainingImages}
                    onChange={(e) => setTrainingImages(e.nativeEvent.text)}
                    style={registerStyles.registerField}
                    placeholder=" Enter Images link"
                />

                <Text style={registerStyles.registerInput}> Do you have certificate?   </Text>
                <TextInput
                    value={certificate}
                    onChange={(e) => setcertificate(e.nativeEvent.text)}
                    style={registerStyles.registerField}
                    placeholder=" have certificate ?"
                />

                <TouchableOpacity onPress={() => AddProgram()}>
                    <Text style={registerStyles.RegisterBtn}>Publish Program</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default AddNewTranningProgram;
