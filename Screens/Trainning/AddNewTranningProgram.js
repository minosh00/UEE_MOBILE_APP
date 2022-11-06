
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
                backgroundColor: "#D8F0DC"
            }}
        >
            <Image style={{ height: "27%", width: "100%" }} resizeMode="cover" source={require("../images/addjobss.gif")} />
            <ScrollView style={{ width: "80%", margin: 2 }}>

                <Text style={{
                    fontSize: 19,
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#2727E2",
                    marginBottom: "4%"
                }}
                >Publish New Training Program </Text>
                <TextInput
                    value={TrainingID}
                    onChange={(e) => setTrainingID(e.nativeEvent.text)}
                    style={commonStyles.textView}
                    placeholder="Enter Training ID"
                />
                <TextInput
                    value={TrainingTitle}
                    onChange={(e) => setTrainingTitle(e.nativeEvent.text)}
                    style={commonStyles.textView}
                    placeholder="Enter Training Title "
                />


                <TextInput
                    value={TrainingOrganizer}
                    onChange={(e) => setTrainingOrganizer(e.nativeEvent.text)}
                    style={commonStyles.textView}
                    placeholder="Enter Training Organizer  "
                />



                <TextInput
                    value={Description}
                    onChange={(e) => setDescription(e.nativeEvent.text)}
                    style={commonStyles.textView1}
                    placeholder=" Enter  Description"
                    numberOfLines={10}
                    multiline={true}
                />
                <TextInput
                    value={TrainingPeriod}
                    onChange={(e) => setTrainingPeriod(e.nativeEvent.text)}
                    style={commonStyles.textView}
                    placeholder=" Enter Training Period"
                />

                <TextInput
                    value={TrainingImages}
                    onChange={(e) => setTrainingImages(e.nativeEvent.text)}
                    style={commonStyles.textView}
                    placeholder=" Enter  Images link  "
                />

                <TextInput
                    value={certificate}
                    onChange={(e) => setcertificate(e.nativeEvent.text)}
                    style={commonStyles.textView}
                    placeholder=" have certificate ? yes/no  "
                />




                <TouchableOpacity onPress={() => AddProgram()} style={commonStyles.button}>
                    <Text style={{ color: "white" }}>Publish Program</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default AddNewTranningProgram;
