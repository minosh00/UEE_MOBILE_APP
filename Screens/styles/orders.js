import { StyleSheet } from "react-native";
import Colors from "./Colors";

const orderStyles = StyleSheet.create({
  orderCard: {
    backgroundColor: Colors.inputBG,
    marginVertical: 8,
    padding: 10,
    marginTop:10,
    backgroundColor: '#D8F0DC',
    borderRadius: 12
  },
  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4
  },
  orderID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: "#10CDEE",
    borderRadius: 12,
    padding: 4,
  },

  inputserach:{
    backgroundColor:'white',
    shadowColor:'black',
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.1,
    elevation:3,
    borderRadius:40,
    padding:10,
    marginTop:10,
    width:310,
    justifyContent:'center',
    alignItems:'center'

  }
  ,

  applyjob:{
    color: "white",
    backgroundColor: "#10CDEE",
    borderRadius: 12,
    padding: 1,
    height:"22%"
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
  }
});

export default orderStyles;
