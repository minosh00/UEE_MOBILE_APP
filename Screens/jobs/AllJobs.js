import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View ,Image} from "react-native";
import Colors from "../styles/Colors";
import orderStyles from "../styles/orders";
import commonStyles from "../styles/common";
import { Ionicons } from '@expo/vector-icons'; 


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
    Alert.alert(
      "Are you sure?",
      "This will permanently delete your order!",
      [
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
       
      ],
     
    );
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
             <Text style={{
                fontSize: 19,
                fontWeight: "600",
                textAlign: "center",
                color:"#2727E2",
                marginBottom:"4%"
            }}
            >Manage All  Jobs </Text>
      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        {orders.map((order, index) => (
          <View style={orderStyles.orderCard} key={order + index}>
          
            <Image   style={{ width: 350, height: 140 }}

   
source={require('../images/appl.png')}
/>
            <View style={orderStyles.items}>
        
              <View>
                <Text style={{ marginVertical: 2 }}>Job ID</Text>
                <Text style={{ marginVertical: 2 }}>job Title</Text>
                <Text style={{ marginVertical: 2 }}>job Period</Text>
                <Text style={{ marginVertical: 5 }}>Company Name </Text>
              </View>
              <View>
                <View style={orderStyles.orderID}>
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
          </View>
        ))}
      </ScrollView>
      <View>
  <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("NewDelivery")}>
              <Ionicons name="ios-add-circle-sharp" size={20} color="white" > 
                            <Text style = {{color: "white", paddingHorizontal: 1 , fontSize:"16"}}>Add Job</Text>
                               </Ionicons>
                        </TouchableOpacity>
  </View>
  
    </View>
  );
};

export default AllJobs;
