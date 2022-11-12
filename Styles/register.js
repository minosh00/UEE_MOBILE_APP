import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
    regPage: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logPage: {
        flex: 1,
        width: '100%',
        backgroundColor: '#D8F0DC',
        justifyContent: 'center',
        alignItems: 'center'
    },

    regHeader: {
        fontSize: 32,
        fontWeight: "600",
        textAlign: "center",
        color: "#000",
        marginVertical: 5,
    },

    registerInput: {
        marginLeft: "7%",
        marginTop: "6%",
        fontWeight: "600",
        textAlign: "left",
        fontSize: 16,
    },

    registerField: {
        backgroundColor: "white",
        marginVertical: 4,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        fontSize: 16,
        color: "black",
        textAlign: "left",
        marginHorizontal: 25,
        marginTop: 10,
        borderColor: "none",
    },

    registerTextArea: {
        backgroundColor: "#FFF",
        marginVertical: 4,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        fontSize: 16,
        height: 100,
        justifyContent: "flex-start",
        color: "black",
        textAlign: "left",
        marginHorizontal: 24,
        marginTop: 10,
        borderColor: "none",
    },

    RegisterBtn: {
        color: "#FFF",
        fontSize: 20,
        paddingHorizontal: 4,
        marginHorizontal: 66,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 20,
        backgroundColor: "#6FBF8E",
        paddingVertical: 10,
        borderRadius: 23,
    },

    LoginBtn: {
        color: "#6FBF8E",
        textAlign: "center",
        fontSize: 18,
        marginBottom: 40,
        fontWeight: "800",
    },
});

export default registerStyles;