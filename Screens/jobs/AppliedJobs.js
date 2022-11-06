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
  let temArr = [];

  const getJob = (id) => {
    axios
      .get(
        `https://backendhostings.herokuapp.com/jobVacancy/GetJobVacancyByID/${id}`
      )
      .then((res) => {
        console.log("job", res.data);
        temArr.push(res.data);
        return temArr
      })
      .catch((e) => console.error(e));
  };

  const getJobs = () => {
    axios
      .get("https://backendhostings.herokuapp.com/JobApply/GetAllApplication")
      .then((res) => {
        console.log("array", res.data);

        res.data
          .filter((item) => item.creator === route.params.userID)
          .forEach((element) => {
            console.log("id", element.ApplyID);
            getJob(element.ApplyID);
          });
      })
      .catch((e) => console.error(e));
  };

  // const getJobs = () => {
  //   let tempArr = [];
  //   axios
  //     .get("https://backendhostings.herokuapp.com/JobApply/GetAllApplication")
  //     .then((res) => {
  //       res.data.forEach((element) => {
  //         if (element.creator === route.params.userID) {
  //           axios
  //             .get(
  //               `https://backendhostings.herokuapp.com/jobVacancy/GetJobVacancyByID/${element.ApplyID}`
  //             )
  //             .then((res) => {
  //               tempArr.push(res.data);
  //               setJob(tempArr);
  //             })
  //             .catch((e) => {
  //               console.error(e);
  //             });
  //         }
  //       });
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //       Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
  //         cancelable: false,
  //       });
  //     });
  // };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <View style={{ margin: 10 }}>
      <Text>{JSON.stringify(jobs)}</Text>
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
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AppliedJobs;
