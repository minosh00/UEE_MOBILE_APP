import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ScrollView, Image, SafeAreaView } from "react-native";
import profStyles from "../../Styles/Profile"
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
    <SafeAreaView style={profStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center", marginTop: 20 }}>
          <Text
            style={{
              fontWeight: "600",
              opacity: 0.6,
              textAlign: "center",
              fontSize: 35,
              marginTop: 20
            }}>
            My Profile
          </Text>
          <View style={profStyles.profileImage}>
            <Image source={require("../../Images/user.png")} style={profStyles.image} resizeMode="center"></Image>
          </View>
          <View style={profStyles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
          </View>
          <View style={profStyles.active}></View>
          <View style={profStyles.add}>
            <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
          </View>
        </View>
        {

          <View style={profStyles.profDetails}>
            <View style={profStyles.profContent}>
              <View>
                <Text style={profStyles.inputValue}>
                  Full Name :
                </Text>
                <Text style={profStyles.inputValue}>
                  Email :
                </Text>
                <Text style={profStyles.inputValue}>
                  Country :
                </Text>
                <Text style={profStyles.inputValue}>
                  Role :
                </Text>
              </View>
              <View>
                <Text style={profStyles.outputValue}>
                  {items.name}
                </Text>
                <Text style={profStyles.outputValue}>
                  {items.email}
                </Text>
                <Text style={profStyles.outputValue}>
                  {items.country}
                </Text>
                <Text style={profStyles.outputValue}>
                  {items.userRole}
                </Text>

                {
                  route.params.userRole
                    .toLocaleLowerCase()
                    .replace(/\s/g, "") === "jobseeker" && (
                    <>
                      {/* hr manager  */}
                      <TouchableOpacity
                      style={{marginBottom: -28}}
                        onPress={() =>
                          navigation.navigate("AppliedJobs", {
                            userID: route.params.userID,
                            userRole: route.params.userRole,
                          })
                        }>
                        <Text style={profStyles.ProfileBtn}> My Applied Jobs </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("AppliedPrograms", {
                            userID: route.params.userID,
                            userRole: route.params.userRole,
                          })
                        }
                      >
                        <Text style={profStyles.ProfileBtn}>
                          My Applied Trainning Program
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
              </View>
            </View>
          </View>
        }
      </ScrollView >
    </SafeAreaView>
  );
};

export default Profile