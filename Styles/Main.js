import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    mainBG: {
        backgroundColor: "#FFF",
        flex: 1
    },

    mainCover: {
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
        fontWeight: "bold",
        marginTop: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
    },

    mainBody: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
        fontWeight: "normal",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
    },

    mainBtn: {
        color: "white",
        fontSize: 22,
        textAlign: "center",
        marginTop: 60,
        paddingHorizontal: 10,
        marginHorizontal: 90,
        marginVertical: 20,
        backgroundColor: "#00a46c",
        paddingVertical: 8,
        borderRadius: 30,
    }
});

export default mainStyles;