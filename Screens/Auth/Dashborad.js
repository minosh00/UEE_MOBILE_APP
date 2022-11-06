import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import dashboardStyles from "../styles/dashboard";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';


const Dashborad = ({ route, navigation }) => {
  useEffect(() => {
    if (!!!route.params) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <View style={dashboardStyles.container}>
      <Image
        style={{ width: "100%", height: "40%", marginTop: "-68%" }}
        resizeMode="contain"
        source={require("../images/aya.gif")}
      />
      <Text style={{
        fontSize: 39,
        fontWeight: "600",
        textAlign: "center",
        color: "#2727E2",
        marginBottom: "4%"
      }}
      >Dashboard</Text>
      {route.params.userRole.toLocaleLowerCase().replace(/\s/g, '') === "hrmanager" && (
        <>
          {/* hr manager  */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("All jobs", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <AntDesign name="book" size={24} color="white" >
              <Text style={{ color: "white" }}>All Jobs </Text>
            </AntDesign>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <Entypo name="user" size={22} color="white" style={{ marginLeft: "5%" }}>
              <Text style={{ color: "white" }}>My Profile </Text>
            </Entypo>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddProgram", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <AntDesign name="notification" size={20} color="white" >
              <Text style={{ color: "white" }}>All Training Programs   </Text>
            </AntDesign>
          </TouchableOpacity>
        </>
      )}

      {route.params.userRole.toLocaleLowerCase().replace(/\s/g, '') === "jobseeker" && (
        <>
          {/* job skeeker */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <Text style={{ color: "white" }}> My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DisplayAllJobs", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <Text style={{ color: "white" }}>Apply job  </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>
              navigation.navigate("ViewPayment", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            } style={dashboardStyles.card}>
            <Text style={{ color: "white" }}>Apply program</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Home Page", {
            userID: route.params.userID,
            userRole: route.params.userRole,
          })
        }
        style={dashboardStyles.card}
      >
        <Ionicons name="exit" size={15} color="white" >
          <Text style={{ color: "white" }}>   Exit</Text>
        </Ionicons>
      </TouchableOpacity>
    </View>
  );
};

export default Dashborad;
