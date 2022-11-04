import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#1C0BB9",
    paddingVertical: 10,
    borderRadius: 23,
  },

  buttondelete:{

    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#E44017",
    paddingVertical: 10,
    borderRadius: 23,
    
  }

  ,

  buttonupdate:{
    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#ECAA1B",
    paddingVertical: 10,
    borderRadius: 23,
  },

  button1:{
    paddingHorizontal: 4,
    marginHorizontal: 76,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#1C0BB9",
    paddingVertical: 10,
    borderRadius: 20,

  }
  ,

  textView: {
    backgroundColor: "white",
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    color: Colors.primary,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderWidth: 2,
    marginTop: 10,
    borderColor: "#00716F",
  },
  buttonText: {
    color: "white",

    fontSize: 20,
  },

  buttonText3:{
    color: "white",

    fontSize: 24,

  },


  button2:{
    paddingHorizontal: 12,
    marginHorizontal: 36,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#1C0BB9",
    paddingVertical: 10,
    borderRadius: 23,
  },

  button22:{
    paddingHorizontal: 22,
    marginHorizontal: 26,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#4E3CF3",
    paddingVertical: 13,
    borderRadius: 13,
    marginLeft:"50%"
  }
,
  textView1: {
    backgroundColor: "white",
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    height: 130,
    justifyContent: "flex-start",

    color: Colors.primary,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderWidth: 2,
    marginTop: 10,
    borderColor: "#00716F",
  },
 
});

export default commonStyles;
