import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 4,
    marginHorizontal: 120,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#6FBF8E",
    paddingVertical: 10,
    borderRadius: 23,
  },

  buttonlog: {
    paddingHorizontal: 4,
    marginHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    backgroundColor: "#6FBF8E",
    paddingVertical: 10,
    borderRadius: 23,
  },


  buttondelete: {
    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#E44017",
    paddingVertical: 10,
    borderRadius: 23,
  },

  buttonupdate: {
    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#ECAA1B",
    paddingVertical: 10,
    borderRadius: 23,
  },

  button1: {
    paddingHorizontal: 4,
    marginHorizontal: 56,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingVertical: 10,
    fontWeight: "600",
    fontStyle: "bold",
    fontSize: 20
  },

  textView: {
    backgroundColor: "white",
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderWidth: 3,
    marginTop: 10,
    borderColor: "#00716F",
    marginBottom: "5%"
  },



  buttonText: {
    color: "#fff",
    fontSize: 22,
  },

  buttonText3: {
    color: "black",
    fontSize: 18,
    textAlign:"center"
  },

  button2: {
    paddingHorizontal: 12,
    marginHorizontal: 36,
    alignItems: "center",
    marginVertical: 120,
    backgroundColor: "#6FBF8E",
    paddingVertical: 8,
    borderRadius: 23,
  },

  button22: {
    paddingHorizontal: 20,
    marginHorizontal: -20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    backgroundColor: "#4E3CF3",
    paddingVertical: 10,
    borderRadius: 15,
    marginLeft: "50%"
  },

  textView1: {
    backgroundColor: "white",
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    height: 130,
    color: "#000",
    justifyContent: "flex-start",
    color: Colors.primary,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderWidth: 3,
    marginTop: 10,
    borderColor: "#00716F",
    marginBottom: "5%"
  },
});

export default commonStyles;
