import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import commonStyles from "../../Styles/common";
import JobStyle from "../../Styles/Jobs";
import axios from "axios";

const AppliedPrograms = ({ route, navigation }) => {
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios
      .get("https://backendhostings.herokuapp.com/TrainingProgram/AllTraining")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
          cancelable: false,
        });
      });
  };

  const [ids, setIds] = useState([]);

  const getIds = (idArr) => {
    let tempArray = [];
    idArr.forEach((element) => {
      console.log(element.ApplyID);
      tempArray.push(element);
    });
    return tempArray;
  };

  const getIDs = () => {
    axios
      .get(
        `https://backendhostings.herokuapp.com/TrainingApplied/AllTranningApplied?userId=${route.params.userID}`
      )
      .then((res) => {
        setIds(getIds(res.data));
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getIDs();
  }, []);

  useEffect(() => {
    getJobs();
  }, []);

  const deleteProgram = (id) => {
    Alert.alert(
      "Are you sure?",
      "This will remove your programme permenently!",
      [
        {
          text: "Confirm Delete",
          onPress: () => {
            axios
              .delete(
                `https://backendhostings.herokuapp.com/TrainingApplied/RemoveTranningApplied/${id}`
              )
              .then((res) => {
                console.log(res.data);
                getIDs();
                getJobs();
                navigation.navigate("Profile", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                });
              })
              .catch((e) => console.error(e));
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={{ margin: 10 }}>
      <ScrollView>
        {jobs.map((job, index) =>
          ids.map((id) => {
            if (id.ApplyProgramID === job._id) {
              return (
                <View
                  key={job._id}
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 10,
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                  }}
                >
                  <Image
                    style={{
                      height: 400,
                      width: "100%",
                      borderRadius: 10,
                      marginBottom: 12,
                    }}
                    resizeMode="center"
                    source={{
                      uri:
                        job.TrainingImages === "no-image"
                          ? "https://cdn.pixabay.com/photo/2017/10/30/18/44/hacking-2903156_960_720.jpg"
                          : job.TrainingImages,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={JobStyle.textStyles}>Training ID</Text>
                      <Text style={JobStyle.textStyles}>
                        Training Title
                      </Text>
                      <Text style={JobStyle.textStyles}>
                        Training Period
                      </Text>
                      <Text style={JobStyle.textStyles}>Description</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          marginVertical: 4,
                          fontWeight: "400",
                        }}
                      >
                        {job.TrainingID}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          marginVertical: 4,
                          fontWeight: "400",
                        }}
                      >
                        {job.TrainingTitle}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          marginVertical: 4,
                          fontWeight: "400",
                        }}
                      >
                        {job.TrainingPeriod}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          marginVertical: 4,
                          fontWeight: "400",
                        }}
                      >
                        {job.Description}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 24 }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("UpdateProgram", {
                          userID: route.params.userID,
                          userRole: route.params.userRole,
                          jobID: job._id,
                          id: id._id,
                          name: id.FullName,
                          email: id.Email,
                        })
                      }
                      style={{
                        ...commonStyles.buttonupdate,
                        flexDirection: "row",
                        marginVertical: 4,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          paddingHorizontal: 12,
                          paddingVertical: 4,
                        }}
                      >
                        Update My Details
                      </Text>
                      <AntDesign
                        style={{ color: "white", marginHorizontal: 1 }}
                        name="edit"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteProgram(id._id)}
                      style={{
                        ...commonStyles.buttondelete,
                        flexDirection: "row",
                        marginVertical: 4,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          paddingHorizontal: 12,
                          paddingVertical: 4,
                        }}
                      >
                        Cancel Application
                      </Text>
                      <AntDesign
                        style={{ color: "white", marginHorizontal: 1 }}
                        name="closecircle"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          })
        )}
      </ScrollView>
    </View>
  );
};

export default AppliedPrograms;
