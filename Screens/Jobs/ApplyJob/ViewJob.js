import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import commonStyles from "../../../Styles/common";
import JobStyle from '../../../Styles/Jobs'

const ViewJob = ({ route, navigation }) => {
  const [job, setJob] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://backendhostings.herokuapp.com/jobVacancy/GetJobVacancyByID/${route.params.jobID}`
      )
      .then((res) => {
        setJob(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{
          height: 400,
          width: "100%",
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
      <ScrollView
        style={{
          marginTop: -70,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "#000",
            borderWidth: 2.5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 12,
          }}
        >
          <View
            style={{
              marginVertical: 8,
              backgroundColor: "#a52a2a",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                textAlign: "center",
                color: "white",
                paddingVertical: 8,
              }}
            >
              {job.CompanyName}
            </Text>
          </View>
          <Text
            style={{ fontSize: 18, fontWeight: "400", textAlign: "center" }}
          >
            We're Hiring {job.jobTitle}s
          </Text>
          <View
            style={{
              marginVertical: 12,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.27,
              shadowRadius: 3,
              elevation: 6,
              backgroundColor: "white",
              paddingVertical: 12,
              borderRadius: 12,
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "400", textAlign: "center" }}
            >
              {job.jobDescription}
            </Text>
          </View>
          <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "500" }}>
            Time Period: {job.jobPeriod}
          </Text>
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
              paddingVertical: 8,
              flexDirection: "row",
              marginTop: 40,
            }}
          >
            <Text
              style={{
                paddingHorizontal: 12,
                paddingVertical: 2,
                color: "#fff",
                fontWeight: "800"
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
      </ScrollView>
    </View>
  );
};

export default ViewJob;
