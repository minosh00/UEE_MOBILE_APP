import { StyleSheet } from "react-native";

const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D8F0DC",
        width: "100%"
    },

    card: {
        backgroundColor: "#00a46c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        paddingHorizontal: 40,
        paddingVertical: 20,
        margin: 4,
        borderRadius: 23,
        
    },

    card12: {
        backgroundColor: "#6FBF8E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 14,
        margin: 5,
        borderRadius: 33
    },

    dashIMG: {
        height: 200,
        width: "100%",
        alignSelf: "center",
        marginTop: -20,
        marginBottom: 40,
    },

    dashText: {
        fontSize: 20,
        textAlign:"center",
        color: "white",
        fontWeight: "400"
    },
});

export default dashboardStyles