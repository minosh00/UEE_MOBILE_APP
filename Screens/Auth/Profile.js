import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import commonStyles from "../styles/common";
import orderStyles from "../styles/Jobs";
import dashboardStyles from "../styles/dashboard";
import { Entypo } from "@expo/vector-icons";

const Profile = ({ route, navigation }) => {
  useEffect(() => {
    if (!!!route.params) {
      navigation.navigate("Login");
    }
  }, []);

  const [items, setItems] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://backendhostings.herokuapp.com/userss/getUserById/${route.params.userID}`
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D8F0DC",
      }}
    >
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {
          <View style={orderStyles.orderCard1}>
            <Entypo
              name="user"
              size={42}
              color="black"
              style={{ marginLeft: "15%", marginRight: "20%" }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  opacity: 0.6,
                  textAlign: "center",
                  fontSize: 45,
                }}
              >
                My Profile{" "}
              </Text>
            </Entypo>
            <View style={orderStyles.items1}>
              <View>
                <Text style={{ marginVertical: 5, fontSize: 20 }}>
                  Full Name :
                </Text>
                <Text style={{ marginVertical: 18, fontSize: 20 }}>
                  Email :{" "}
                </Text>
                <Text style={{ marginVertical: 15, fontSize: 20 }}>
                  country :{" "}
                </Text>
                <Text style={{ marginVertical: 9, fontSize: 20 }}>
                  Role :
                </Text>
              </View>
              <View>
                <Text style={{ marginVertical: 8, fontSize: 20 }}>
                  {items.name}
                </Text>
                <Text style={{ marginVertical: 12, fontSize: 20 }}>
                  {items.email}
                </Text>
                <Text style={{ marginVertical: 18, fontSize: 20 }}>
                  {items.country}
                </Text>
                <Text style={{ marginVertical: 12, fontSize: 20 }}>
                  {items.userRole}
                </Text>

                {route.params.userRole
                  .toLocaleLowerCase()
                  .replace(/\s/g, "") === "jobseeker" && (
                  <>
                    {/* hr manager  */}

                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("AppliedJobs", {
                          userID: route.params.userID,
                          userRole: route.params.userRole,
                        })
                      }
                      style={dashboardStyles.card12}
                    >
                      <Text style={{ color: "white" }}> Applied Jobs </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("AppliedPrograms", {
                          userID: route.params.userID,
                          userRole: route.params.userRole,
                        })
                      }
                      style={dashboardStyles.card12}
                    >
                      <Text style={{ color: "white" }}>
                        {" "}
                        Applied Training Programs{" "}
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          </View>
        }
      </ScrollView>
    </View>
  );
};

export default Profile;
