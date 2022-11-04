 

import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View ,Image} from "react-native";
import Colors from "../styles/Colors";
import orderStyles from "../styles/orders";
import commonStyles from "../styles/common";
import { AntDesign } from '@expo/vector-icons';


const DisplayAllJobsScreen = ({ route, navigation }) => {
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
            > All  Jobs </Text>
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

                <View style={orderStyles.applyjob}>
                <TouchableOpacity   style={{ marginVertical: 6 }}  onPress={() => navigation.navigate("apply")}>
              
                <AntDesign name="rightcircle" size={20} color="white" >
                <Text style={{ marginVertical: 13 }}>View Job </Text>
                          
                               </AntDesign> 

            </TouchableOpacity>
            </View>


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


   <View style={orderStyles.applyjob}>
                <TouchableOpacity   style={{ marginVertical: 6 }}  onPress={() => navigation.navigate("apply")}>
              
                <AntDesign name="rightcircle" size={20} color="white" >
                <Text style={{ marginVertical: 13 }}>Apply Job</Text>
                          
                               </AntDesign> 

            </TouchableOpacity>
            </View>
              </View>
            </View>
       
          </View>
        ))}
      </ScrollView>
      <View>

  </View>
  
    </View>
  );
};

export default DisplayAllJobsScreen;
