import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, Image ,TextInput,Button} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import trainningStyles from "../../../Styles/Trainning";
import commonStyles from "../../../Styles/common";
import JobsStyle from "../../../Styles/Jobs";
import JobStyle from "../../../Styles/Jobs";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const AllTrainningProgramScreen = ({ route, navigation }) => {

  const [Training, setTraining] = useState([]);
  const [filterorders, setFilterOrders] = useState([]);
  const [search, setSearch] = useState('')

  const getOrders = () => {
    axios
      .get("https://backendhostings.herokuapp.com/TrainingProgram/AllTraining")
      .then((res) => {
        setTraining(res.data);
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
          cancelable: false,
        });
      });
  };

  const deleteOrder = (id) => {
    Alert.alert("Are you sure?", "This will permanently delete this Trainning Programme!", [
      {
        text: "OK",
        onPress: () => {
          axios
            .delete(
              `https://backendhostings.herokuapp.com/jobVacancy/RemoveJob/${id}`
            )
            .then((res) => {
              getOrders();
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
    ]);
  };



  useEffect(() => {
    getOrders();
  }, []);



  
  const searchFunc = (text) => {
    return Training.filter((order) => order.TrainingID === text)
  }

  useEffect(() => {
    setFilterOrders(searchFunc(search))
  }, [search])



  

  let generatePdf = async (TrainingID,Description,TrainingPeriod) => {

    const html = `

    <html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }
    
    .title {
      color: grey;
      font-size: 18px;
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
      <img src="https://trainingindustry.com/content/uploads/2019/04/On-the-job-Training-and-Coaching-5.2.19.jpg" alt="John" style="width:100%">
      <h1>Training ID: ${TrainingID} </h1>
      <p class="title">Training Period :${TrainingPeriod}  </p>
      <p> Training  Description  : ${Description}</p>
      <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
      </div>

      <p> Thanks For view Our  Training Programs  (24x7jobs team)</p>

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
          textAlign: "center",
          color: "#150B3D",
          marginTop: 15,
          marginBottom: "5%"
        }}>
         Trainning Programs
      </Text>

      <TextInput  style={JobsStyle.inputserach}  placeholder='Search for Training ID....' value={search} onChangeText={(text)=>setSearch(text)} />


      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        {Training.map((order, index) => (
          <View style={JobsStyle.jobCard} key={order + index}>
            <Image
              style={{ width: "100%", height: 140 }}
              source={require("../../../Images/t.jpg")}
            />
            <View style={JobsStyle.JobItems}>
              <View>
                <Text style={{ marginVertical: 2 }}>TrainingID</Text>
                <Text style={{ marginVertical: 2 }}>Training Title</Text>
                <Text style={{ marginVertical: 2 }}>Description</Text>
                <Text style={{ marginVertical: 5 }}>Training Period </Text>
              </View>
              <View>
                <View style={JobsStyle.JobID}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {order.TrainingID}
                  </Text>
                </View>
                <Text style={{ marginVertical: 2 }}>{order.TrainingTitle}</Text>
                <Text style={{ marginVertical: 2 }}>{order.Description}</Text>
                <Text style={{ marginVertical: 2 }}>{order.TrainingPeriod}</Text>
              </View>
            </View>

            {route.params.userRole.toLocaleLowerCase().replace(/\s/g, "") ===
              "jobseeker" ? (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ApplyProgram", {
                      userID: route.params.userID,
                      userRole: route.params.userRole,
                      programID: order._id,
                    })
                  }
                  style={{ ...JobStyle.applyBtn, width: "50%" }}
                >
                  <Text style={{ color: "white", fontSize:18 }}>Enroll</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("UpdateProgram", {
                      userID: route.params.userID,
                      userRole: route.params.userRole,
                      TrainingID: order._id,
                    })
                  }
                  style={{ ...commonStyles.buttonupdate, width: "30%" }}>
                  <Text>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => deleteOrder(order._id)}
                  style={{ ...commonStyles.buttondelete, width: "30%" }}>
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
        <Button  title="Generate PDF" onPress={() => generatePdf(order.TrainingID,order.TrainingTitle , order.Description ,order.TrainingPeriod)} />

          </View>
        ))}
      </ScrollView>
      {route.params.userRole === "hrmanager" ? (
        <View>
          <TouchableOpacity
            style={trainningStyles.addtrainning}
            onPress={() => navigation.navigate("AddProgram")}
          >
            <Ionicons name="ios-add-circle-sharp" size={20} color="white">
              <Text>
                &nbsp;Add Program
              </Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
      ) : <View></View>}
    </View>
  );
};

export default AllTrainningProgramScreen;