import { StyleSheet } from "react-native";
import Colors from "./Colors";

const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#D8F0DC",
        width: "100%"
    },
    card: {
        backgroundColor: "#1C0BB9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        paddingHorizontal: 40,
        paddingVertical: 20,
        margin: 4,
        borderRadius: 23
    },
    card12:{
        backgroundColor: "#1C0BB9",
        display: "flex",
        justifyContent: "center",
        marginLeft:"-30%",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 14,
        margin: 5,
        borderRadius: 33
    }
})

export default dashboardStyles