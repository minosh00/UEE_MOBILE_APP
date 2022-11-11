import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import JobStyle from "../../../Styles/Jobs";

const AllJobs = ({ route, navigation }) => {
  const [orders, setOrders] = useState([]);

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
      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        {orders.map((order, index) => (
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
          </View>
        ))}
      </ScrollView>
      <View>
        <TouchableOpacity
          style={JobStyle.addJob}
          onPress={() => navigation.navigate("CreateJob")}
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
