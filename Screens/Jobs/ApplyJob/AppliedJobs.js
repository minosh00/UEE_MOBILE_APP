import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import commonStyles from "../../../Styles/common";
import JobStyle from "../../../Styles/Jobs";

const AppliedJobs = ({ route, navigation }) => {
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios
      .get("https://backendhostings.herokuapp.com/jobVacancy/AllJobVacancy")
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
        `https://backendhostings.herokuapp.com/JobApply/GetAllApplication?userId=${route.params.userID}`
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

  const deleteApplication = (id) => {
    Alert.alert(
      "Are you sure?",
      "This will remove your application permenently!",
      [
        {
          text: "Confirm Delete",
          onPress: () => {
            axios
              .delete(`https://backendhostings.herokuapp.com/JobApply/deleteApplication/${id}`)
              .then((res) => {
                console.log(res.data)
                getIDs();
                getJobs()
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
            if (id.ApplyID === job._id) {
              return (
                <View
                  key={job._id}
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                    borderColor: "#000",
                    borderWidth: 2,
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
                        job.JobImages === "no-image"
                          ? "https://cdn.pixabay.com/photo/2017/10/30/18/44/hacking-2903156_960_720.jpg"
                          : job.JobImages,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={JobStyle.applyJob}>Job ID : </Text>
                      <Text style={JobStyle.applyJob}>Job Title : </Text>
                      <Text style={JobStyle.applyJob}>Job Period : </Text>
                      <Text style={JobStyle.applyJob}>Company Name : </Text>
                      <Text style={JobStyle.applyJob}>More Information : </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={JobStyle.jobData}>
                        {job.JobID}
                      </Text>
                      <Text style={JobStyle.jobData}>
                        {job.jobTitle}
                      </Text>
                      <Text style={JobStyle.jobData}>
                        {job.jobPeriod}
                      </Text>
                      <Text style={JobStyle.jobData}>
                        {job.CompanyName}
                      </Text>
                      <Text style={JobStyle.jobData}>
                        {job.jobDescription}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 24 }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("UpdateApplication", {
                          userID: route.params.userID,
                          userRole: route.params.userRole,
                          jobID: job._id,
                          id: id._id,
                          name: id.FullName,
                          email: id.Email
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
                          color: "black",
                          paddingHorizontal: 12,
                          paddingVertical: 4,
                          fontSize: 16
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
                      onPress={() => deleteApplication(id._id)}
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
                          fontSize: 16
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

export default AppliedJobs;
