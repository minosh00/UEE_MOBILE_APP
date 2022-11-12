import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import mainStyles from "../Styles/Main";

const MainScreen = ({ navigation }) => {

  return (
    <View style={mainStyles.mainBG}>

      <View style={mainStyles.mainCover}>
        <Image
          source={require('../Images/start.png')}
          style={mainStyles.mainIMG} />

        <View style={{ marginTop: "10%" }}>
          <Text style={mainStyles.mainHead}>
            Find a Perfect Job Match
          </Text>
        </View>

        <View style={{ marginTop: "10%" }}>
          <Text style={mainStyles.mainBody}>
            One place with the best job
            Companies in tech. Apply in all
            of them and get in touch with the
            hiring managers directly.
          </Text>
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}>
          <Text style={mainStyles.mainBtn}>
            Get Started&nbsp;
            <AntDesign
              style={{ color: "white", marginHorizontal: 1 }}
              name="rightcircle"
              size={22}
              color="black"
            />
          </Text>

        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MainScreen;