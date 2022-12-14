import { StyleSheet } from "react-native";
import Colors from "./Colors";

const JobStyle = StyleSheet.create({
  orderCard: {
    backgroundColor: Colors.inputBG,
    marginVertical: 8,
    padding: 10,
    borderRadius: 7
  },

  addJob: {
    paddingHorizontal: 16,
    marginHorizontal: 21,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    backgroundColor: "#00a46c",
    paddingVertical: 5,
    borderRadius: 15,
    paddingVertical: 10,
    marginLeft: "60%"
  },

  inputserach: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputserach1: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    width: 380,
    justifyContent: 'center',
    alignItems: 'center'

  }
  ,


  jobCard: {
    backgroundColor: Colors.inputBG,
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#D8F0DC',
    borderRadius: 12
  },

  JobItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },

  JobID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: "#10CDEE",
    borderRadius: 12,
    padding: 4,
  },

  deleteBtn: {
    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#E44017",
    paddingVertical: 10,
    borderRadius: 23,
  },

  updateBtn: {
    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#ECAA1B",
    paddingVertical: 10,
    borderRadius: 23,
  },

  textStyles: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 4
  },

  orderCard123: {
    backgroundColor: "#D8F0DC",
    marginVertical: 15,
    padding: 60,
    borderRadius: 7
  },

  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6
  },

  

  applyJob: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 4,
    marginLeft: 10,
  },

  jobData: {
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 4,
    marginLeft: -10,
  },

  applyBtn: {
    paddingHorizontal: 4,
    marginHorizontal: 90,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    backgroundColor: "#00a46c",
    paddingVertical: 5,
    borderRadius: 25,
  },

  items1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 70,
    height: '160%'
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
    backgroundColor: "#16549B",
    borderRadius: 12,
    padding: 12,
  },

  orderCard1: {
    marginVertical: 83,
    padding: 2,
    borderRadius: 5
  },

});

export default JobStyle;
