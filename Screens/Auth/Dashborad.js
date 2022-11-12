import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import dashboardStyles from "../../Styles/dashboard";

const Dashborad = ({ route, navigation }) => {
  useEffect(() => {
    if (!!!route.params) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <View style={dashboardStyles.container}>
      <Text style={{
        fontSize: 39,
        fontWeight: "600",
        textAlign: "center",
        color: "#000",
        marginBottom: "8%"
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
          
              <Text style={dashboardStyles.dashText}>All Jobs </Text>
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

            <Text style={dashboardStyles.dashText}>My Profile </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllTrainningProgramScreen", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
              <Text style={dashboardStyles.dashText}>All Training Programs   </Text>
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
            <Text style={dashboardStyles.dashText}> My Profile</Text>
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
            <Text style={dashboardStyles.dashText}>Apply Job  </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>
            navigation.navigate("AllTrainningProgramScreen", {
              userID: route.params.userID,
              userRole: route.params.userRole,
            })
          } style={dashboardStyles.card}>
            <Text style={dashboardStyles.dashText}>Apply Program</Text>
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
          <Text style={dashboardStyles.dashText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashborad;
