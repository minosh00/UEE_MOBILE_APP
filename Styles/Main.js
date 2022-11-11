import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    mainBG: {
        backgroundColor: "#FFF",
        flex: 1
    },

    mainCover: {
        backgroundColor: "#00a46c",
        height: "35%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
    },

    mainIMG: {
        height: 230,
        width: 250,
        paddingTop: 50,
        alignSelf: "center",
        marginTop: 30
    },

    mainHead: {
        fontSize: 45,
        color: "#000",
        textAlign: "center",
        fontWeight: "bold"
    },

    mainBody: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
        fontWeight: "normal",
    },

    mainBtn: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
        marginTop: 350,
        paddingHorizontal: 10,
        marginHorizontal: 106,
        marginVertical: 20,
        backgroundColor: "#6FBF8E",
        paddingVertical: 8,
        borderRadius: 23,
    }
});

export default mainStyles;