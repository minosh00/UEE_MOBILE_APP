import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import JobStyle from "../../../Styles/Jobs";

const DisplayAllJobsScreen = ({ route, navigation }) => {
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios
      .get("https://backendhostings.herokuapp.com/jobVacancy/AllJobVacancy")
      .then((res) => {
        console.log(res.data)
        setJobs(res.data);
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
          cancelable: false,
        });
      });
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <View style={{ margin: 10 }}>
      <ScrollView>
        {jobs.map((job) => (
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
              resizeMode="cover"
              source={{
                uri:
                  job.JobImages === "no-image"
                    ? "https://cdn.pixabay.com/photo/2018/07/13/10/04/hiring-3535383_960_720.jpg"
                    : job.JobImages,
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1 }}>
                <Text style={JobStyle.applyJob}>Job ID</Text>
                <Text style={JobStyle.applyJob}>Job Title</Text>
                <Text style={JobStyle.applyJob}>Job Period</Text>
                <Text style={JobStyle.applyJob}>Company Name</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={JobStyle.jobData}
                >
                  {job.JobID}
                </Text>
                <Text
                  style={JobStyle.jobData}
                >
                  {job.jobTitle}
                </Text>
                <Text
                  style={JobStyle.jobData}
                >
                  {job.jobPeriod}
                </Text>
                <Text
                  style={JobStyle.jobData}
                >
                  {job.CompanyName}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 24 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ViewJob", {
                    userID: route.params.userID,
                    userRole: route.params.userRole,
                    jobID: job._id
                  })
                }
                style={{
                  ...JobStyle.applyBtn,
                  flexDirection: "row",
                  marginVertical: 4,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    fontSize: 17
                  }}
                >
                  View Job
                </Text>
                <AntDesign
                  style={{ color: "white", marginHorizontal: 1 }}
                  name="rightcircle"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ApplyJob", {
                    userID: route.params.userID,
                    userRole: route.params.userRole,
                    jobID: job._id
                  })
                }
                style={{
                  ...JobStyle.applyBtn,
                  flexDirection: "row",
                  marginVertical: 4,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    fontSize: 17
                  }}
                >
                  Apply Job
                </Text>
                <AntDesign
                  style={{ color: "white", marginHorizontal: 1 }}
                  name="rightcircle"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DisplayAllJobsScreen;
