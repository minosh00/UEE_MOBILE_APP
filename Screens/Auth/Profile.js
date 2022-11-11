import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import profStyles from '../../Styles/Profile';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";


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
        console.log(res.data)
        setItems(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);


  return (
    <SafeAreaView style={profStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
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

        <View style={profStyles.infoContainer}>
          <Text style={[profStyles.text, { fontWeight: "200", fontSize: 36 }]}>{items.name}</Text>
          <Text style={[profStyles.text, { color: "#000", fontSize: 14 }]}>{items.userRole}</Text>
          <Text style={[profStyles.text, { color: "#AEB5BC", fontSize: 14 }]}>{items.email}</Text>
          <Text style={[profStyles.text, { color: "#AEB5BC", fontSize: 14 }]}>{items.country}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
