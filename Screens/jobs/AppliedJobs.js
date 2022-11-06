import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { allJobsStyles } from "../styles/AllJobStyles";
import commonStyles from "../styles/common";

const AppliedJobs = ({ route, navigation }) => {
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

  const [ids, setIds] = useState([]);

  const getIds = (idArr) => {
    let tempArray = []
    idArr.forEach(element => {
      console.log(element.ApplyID)
      tempArray.push(element.ApplyID)
    });
    return tempArray
  };

  const getIDs = () => {
    axios
      .get(`https://backendhostings.herokuapp.com/JobApply/GetAllApplication?userId=${route.params.userID}`)
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

  const checkApplied = (id) => {
    id === ids[0]
  }

  return (
    <View style={{ margin: 10 }}>
      <ScrollView>
        {jobs.map((job, index) => (
          ids.map((id) => {
            if (id === job._id) {
              return (<View
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
                  style={{ flexDirection: "row", justifyContent: "space-around" }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={allJobsStyles.textStyles}>Job ID</Text>
                    <Text style={allJobsStyles.textStyles}>Job Title</Text>
                    <Text style={allJobsStyles.textStyles}>Job Period</Text>
                    <Text style={allJobsStyles.textStyles}>Company Name</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{ fontSize: 18, marginVertical: 4, fontWeight: "400" }}
                    >
                      {job.JobID}
                    </Text>
                    <Text
                      style={{ fontSize: 18, marginVertical: 4, fontWeight: "400" }}
                    >
                      {job.jobTitle}
                    </Text>
                    <Text
                      style={{ fontSize: 18, marginVertical: 4, fontWeight: "400" }}
                    >
                      {job.jobPeriod}
                    </Text>
                    <Text
                      style={{ fontSize: 18, marginVertical: 4, fontWeight: "400" }}
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
                      ...commonStyles.button,
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
                      ...commonStyles.button,
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
              )
            }
          })
        ))}
      </ScrollView>
    </View>
  );
};

export default AppliedJobs;
