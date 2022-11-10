import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button
} from "react-native";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import Colors from "../styles/Colors";
import orderStyles from "../styles/orders";
import commonStyles from "../styles/common";
import { Ionicons } from "@expo/vector-icons";

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




  

  const deleteOrder = (id) => {
    Alert.alert("Are you sure?", "This will permanently delete your order!", [
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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
          textAlign: "center",
          color: "#2727E2",
          marginBottom: "4%",
        }}
      >
         All Training Program {" "}
      </Text>
      <TextInput  style={orderStyles.inputserach}  placeholder='Search for Training ID....' value={search} onChangeText={(text)=>setSearch(text)} />

      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        
        {(search === ''? Training: filterorders).map((order, index) => (
          <View style={orderStyles.orderCard} key={order + index}>
            <Image
              style={{ width: 350, height: 140 }}
              source={require("../images/appl.png")}
            />
            <View style={orderStyles.items}>
              <View>
                <Text style={{ marginVertical: 2 }}> Training ID</Text>
                <Text style={{ marginVertical: 2 }}>Training Title</Text>
                <Text style={{ marginVertical: 2 }}>Description</Text>
                <Text style={{ marginVertical: 5 }}>Training Period </Text>
              </View>
              <View>
                <View style={orderStyles.orderID}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {order.TrainingID}
                  </Text>
                </View>
                <Text style={{ marginVertical: 2 }}>{order.TrainingTitle}</Text>
                <Text style={{ marginVertical: 2 }}>{order.Description}</Text>
                <Text style={{ marginVertical: 2 }}>
                  {order.TrainingPeriod}
                </Text>
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
                  style={{ ...commonStyles.button, width: "30%" }}
                >
                  <Text style={{ color: "white" }}>Enroll</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("UpdateTrainning", {
                      userID: route.params.userID,
                      userRole: route.params.userRole,
                      JobID: order._id,
                    })
                  }
                  style={{ ...commonStyles.buttonupdate, width: "30%" }}
                >
                  <Text>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => deleteOrder(order._id)}
                  style={{ ...commonStyles.buttondelete, width: "30%" }}
                >
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
            style={commonStyles.button22}
            onPress={() => navigation.navigate("AddProgram", {
              userID: route.params.userID,
              userRole: route.params.userRole,
            })}
          >
            <Ionicons name="ios-add-circle-sharp" size={20} color="white">
              <Text
                style={{ color: "white", paddingHorizontal: 1, fontSize: 16 }}
              >
                Add Program
              </Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
      ) : <View></View>}
    </View>
  );
};

export default AllTrainningProgramScreen;
