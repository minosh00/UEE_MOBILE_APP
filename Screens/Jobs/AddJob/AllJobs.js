import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Alert,
  ScrollView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image,
  InputAccessoryView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import JobStyle from "../../../Styles/Jobs";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';


const AllJobs = ({ route, navigation }) => {

  const [orders, setOrders] = useState([]);
  const [filterorders, setFilterOrders] = useState([]);
  const [search, setSearch] = useState('')
  const getOrders = () => {
    axios
      .get("https://backendhostings.herokuapp.com/jobVacancy/AllJobVacancy")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
          cancelable: false,
        });
      });
  };

  const searchFunc = (text) => {
    return orders.filter((order) => order.JobID === text)
  }

  useEffect(() => {
    setFilterOrders(searchFunc(search))
  }, [search])


  
  let generatePdf = async (JobID,title,jobPeriod,CompanyName) => {

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
      <img src="https://job4youindia.com/wp-content/uploads/2022/07/Job.png" alt="John" style="width:100%">
      <h1>Job ID: ${JobID} </h1>
      <p class="title">Job Tittle:${title}  </p>
      <p>Job Period : ${jobPeriod}</p>
      <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
      </div>
      <p> Company Name : ${CompanyName}</p>
      <p> Thanks For view Our Jobs (24x7jobs team)</p>

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
    Alert.alert("Are you sure?", "This will permanently delete this Job!", [
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
          fontSize: 30,
          fontWeight: "800",
          textAlign: "center",
          color: "#150B3D",
          marginTop: 15,
          marginBottom: "5%"
        }}>
        All Job Vacancy
      </Text>
      <TextInput  style={JobStyle.inputserach}  placeholder='Search for JobID....' value={search} onChangeText={(text)=>setSearch(text)} />

      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        {(search === ''? orders: filterorders).map((order, index) => (
          <View style={JobStyle.jobCard} key={order + index}>
            <Image
              style={{ width: 350, height: 140 }}
              source={require("../../../Images/appl.png")}
            />
            <View style={JobStyle.JobItems}>
              <View>
                <Text style={{ marginVertical: 2 }}>Job ID</Text>
                <Text style={{ marginVertical: 2 }}>job Title</Text>
                <Text style={{ marginVertical: 2 }}>job Period</Text>
                <Text style={{ marginVertical: 5 }}>Company Name </Text>
              </View>
              <View>
                <View style={JobStyle.JobID}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {order.JobID}
                  </Text>
                </View>
                <Text style={{ marginVertical: 2 }}>{order.jobTitle}</Text>
                <Text style={{ marginVertical: 2 }}>{order.jobPeriod}</Text>
                <Text style={{ marginVertical: 2 }}>{order.CompanyName}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("UpdateJobVacancy", {
                    userID: route.params.userID,
                    userRole: route.params.userRole,
                    JobID: order._id,
                  })
                }
                style={{ ...JobStyle.updateBtn, width: "30%" }}
              >
                <Text>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteOrder(order._id)}
                style={{ ...JobStyle.deleteBtn, width: "30%" }}
              >
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
            <Button  title="Generate PDF" onPress={() => generatePdf(order.JobID,order.jobTitle , order.jobPeriod ,order.CompanyName)} />

          </View>
        ))}
      </ScrollView>
      <View>
        <TouchableOpacity
          style={JobStyle.addJob}
          onPress={() => navigation.navigate("CreateJob",{
          
          userID: route.params.userID,
          userRole: route.params.userRole,
           } )}
          
        >
          <Ionicons name="ios-add-circle-sharp" size={20} color="white">
            <Text
              style={{ color: "white", paddingHorizontal: 1, fontSize: 16 }}
            >
              Add Job
            </Text>
          </Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllJobs;
