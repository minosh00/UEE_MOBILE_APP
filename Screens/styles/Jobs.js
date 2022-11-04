import { StyleSheet } from "react-native";
import Colors from "./Colors";

const JobsStyle = StyleSheet.create({
  orderCard: {
    backgroundColor: Colors.inputBG,
    marginVertical: 8,
    padding: 10,
    borderRadius: 7
  },

  orderCard123:{
    backgroundColor:"#D8F0DC",
    marginVertical: 15,
    padding: 60,
    borderRadius: 7
    
  }
  ,

  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6
  },

  items1:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 70,
    height:'160%'
  },

  orderID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 4,
  },
  status: {
    marginVertical: 2,
    color: "white",
    textAlign: "center"
  },
  ok: {
    backgroundColor: "#196e02",
    borderRadius: 12
  },
  declined: {
    backgroundColor: "#820101",
    borderRadius: 12
  },
  pending: {
    backgroundColor: "#997603",
    borderRadius: 12
  },

  orderID1: {
    marginVertical: 2,
    color: "white",
    backgroundColor:  "#16549B",
    borderRadius: 12,
  
    padding: 12,
  },

  orderCard1: {
   //backgroundColor: Colors.inputBG,
    marginVertical: 83,
    padding: 2,
    borderRadius: 5
  },

});

export default JobsStyle;
