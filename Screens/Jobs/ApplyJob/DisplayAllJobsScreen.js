import React, { useEffect, useState } from "react";
import {
  Alert, ScrollView, Text, TouchableOpacity, View, Image, TextInput,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import JobStyle from "../../../Styles/Jobs";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';



const DisplayAllJobsScreen = ({ route, navigation }) => {

  const [jobs, setJobs] = useState([]);
  const [filterorders, setFilterOrders] = useState([]);
  const [search, setSearch] = useState('')

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


  const searchFunc = (text) => {
    return jobs.filter((jobs) => jobs.jobTitle === text)
  }

  useEffect(() => {
    setFilterOrders(searchFunc(search))
  }, [search])



  let generatePdf = async (JobID, title, jobPeriod, CompanyName) => {

    const html = `

    <html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 500px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }
    
    .title {
      color: black;
      font-size: 38px;
    }
    
    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }
    
    a {
      text-decoration: none;
      font-size: 22px;
      color: black;
    }
    
    button:hover, a:hover {
      opacity: 0.7;
    }
    </style>
    </head>
    <body>
    
    <h2 style="text-align:center">Job Vacancy Details  </h2>
    
    <div class="card">
      <img src="https://png.pngtree.com/png-vector/20210612/ourlarge/pngtree-job-vacancy-vector-png-background-with-hand-mike-png-image_3450984.jpg" alt="John" style="width:100%">
      <p>Job ID: ${JobID} </p>
      <h1 class="title"><b>${title} </b> </h1>
      <h2> at <b>${CompanyName}</b></h2>
      <p>Time Period : ${jobPeriod}</p>

      <div style="margin: 20px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
      </div>
      <p> Thanks For Sharing...! <br/> (24x7jobs Team)</p>
      <br/>
    </div>
    
    </body>
    </html>
    
`;

    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };




  return (
    <View style={{ margin: 10 }}>
      <TextInput style={JobStyle.inputserach} placeholder='Search with Job Title' value={search} onChangeText={(text) => setSearch(text)} />
      <ScrollView>
        {(search === '' ? jobs : filterorders).map((job) => (

          <View
            key={job._id}
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              borderColor: "#000",
              borderWidth: 2.5,
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
                }}>
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
                }}>
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    fontSize: 17
                  }}>
                  Apply Job
                </Text>
                <AntDesign
                  style={{ color: "white", marginHorizontal: 1 }}
                  name="rightcircle"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <Button title="Generate Job Vacancy as PDF" onPress={() => generatePdf(job.JobID, job.jobTitle, job.jobPeriod, job.CompanyName)} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DisplayAllJobsScreen;
