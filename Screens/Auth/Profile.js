import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from "react-native";
import commonStyles from '../styles/common';
import profStyles from '../styles/profile';
import dashboardStyles from "../styles/dashboard";
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
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
            <Image source={require("../images/user.png")} style={profStyles.image} resizeMode="center"></Image>
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

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={profStyles.mediaImageContainer}>
              <Image source={require("../images/bk.png")} style={profStyles.image} resizeMode="cover"></Image>
            </View>
            <View style={profStyles.mediaImageContainer}>
              <Image source={require("../images/bk.png")} style={profStyles.image} resizeMode="cover"></Image>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D8F0DC' }}>
    //   <ScrollView style={{ display: 'flex', flexDirection: 'column' }}>
    //     {
    //       <View style={orderStyles.orderCard1} >
    //         <Entypo name="user" size={42} color="black">
    //           <Text style={{ fontWeight: '600', opacity: 0.6, textAlign: 'center' }}>{items.name} Profile </Text>
    //         </Entypo>
    //         <View style={orderStyles.items1}>
    //           <View>
    //             <Text style={{ marginVertical: 5 }}>Full Name  :</Text>
    //             <Text style={{ marginVertical: 18 }}>Email : </Text>
    //             <Text style={{ marginVertical: 15 }}>country : </Text>
    //             <Text style={{ marginVertical: 9 }}>Role :</Text>
    //           </View>
    //           <View>
    //             <Text style={{ marginVertical: 8 }}>{items.name}</Text>
    //             <Text style={{ marginVertical: 12 }}>{items.email}</Text>
    //             <Text style={{ marginVertical: 18 }}>{items.country}</Text>
    //             <Text style={{ marginVertical: 12 }}>{items.userRole}</Text>




    //             {route.params.userRole.toLocaleLowerCase().replace(/\s/g, '') === "hrmanager" && (
    //               <>
    //                 {/* hr manager  */}
    //                 <TouchableOpacity
    //                   onPress={() =>
    //                     navigation.navigate("Profile", {
    //                       userID: route.params.userID,
    //                       userRole: route.params.userRole,
    //                     })
    //                   }
    //                   style={dashboardStyles.card12}
    //                 >
    //                   <Text style={{ color: "white" }}> Applied Jobs    </Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity
    //                   onPress={() =>
    //                     navigation.navigate("Profile", {
    //                       userID: route.params.userID,
    //                       userRole: route.params.userRole,
    //                     })
    //                   }
    //                   style={dashboardStyles.card12}
    //                 >
    //                   <Text style={{ color: "white" }}>  Applied Training Programs   </Text>
    //                 </TouchableOpacity>
    //               </>
    //             )}
    //           </View>
    //         </View>
    //       </View>
    //     }
    //   </ScrollView>
    // </View>
  );
};


export default Profile;