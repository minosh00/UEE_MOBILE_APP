import { StyleSheet } from "react-native";

const profStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
})

export default profStyles;

// import { StyleSheet } from "react-native";

// const profileStyles = StyleSheet.create({
//     Profile: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "flex-start",
//         position: "relative",
//         paddingTop: 10,
//         paddingBottom: 0,
//         paddingLeft: 35,
//         paddingRight: 0,
//         borderRadius: 30,
//         backgroundColor: "rgba(249,249,249,1)",
//         width: 460,
//         height: 926,
//       },
//       Group238: {
//         display: "flex",
//         flexDirection: "column",
//       },
//       AboutMe: {
//         display: "flex",
//         flexDirection: "row",
//         paddingTop: 200,
//         paddingBottom: 20,
//         paddingLeft: 20,
//         paddingRight: 0,
//         marginBottom: 8,
//         backgroundColor: "white",
//         /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hd21cahepvo-1%3A2510?alt=media&token=6bf626c2-0ab4-4be7-bba8-7e68ddcc4ece) */
//       },
//       Icon: {
//         width: 24,
//         height: 24,
//         marginRight: 8,
//       },
//       Txt224: {
//         fontSize: 14,
//         fontWeight: "700",
//         color: "rgba(21,11,61,1)",
//         marginRight: 166,
//       },
//       Add: {
//         width: 24,
//         height: 24,
//       },
    
//       WorkExperience: {
//         display: "flex",
//         flexDirection: "row",
//         paddingTop: 22,
//         paddingBottom: 22,
//         paddingLeft: 19,
//         paddingRight: 19,
//         marginBottom: 8,
//         backgroundColor: "white",
//         /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hd21cahepvo-1%3A2496?alt=media&token=0a9eb71f-9c74-4ff7-b4b2-7b1fea53737a) */
//       },
//       Icon1: {
//         width: 24,
//         height: 24,
//         marginRight: 10,
//       },
//       Txt356: {
//         fontSize: 14,
//         fontWeight: "700",
//         color: "rgba(21,11,61,1)",
//         marginRight: 121,
//       },
//       Add: {
//         width: 24,
//         height: 24,
//       },
    
//       Education: {
//         display: "flex",
//         flexDirection: "row",
//         paddingTop: 20,
//         paddingBottom: 22,
//         paddingLeft: 19,
//         paddingRight: 19,
//         marginBottom: 14,
//         backgroundColor: "white",
//         /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hd21cahepvo-1%3A2522?alt=media&token=de8a35ea-8408-4776-9953-08d77f96d65b) */
//       },
//       Icon2: {
//         width: 24,
//         height: 26.45,
//         marginRight: 10,
//       },
//       Txt775: {
//         fontSize: 14,
//         fontWeight: "700",
//         color: "rgba(21,11,61,1)",
//         marginRight: 167,
//       },
//       Add: {
//         width: 24,
//         height: 24,
//       },
    
//       Skill: {
//         display: "flex",
//         flexDirection: "row",
//         paddingTop: 22,
//         paddingBottom: 22,
//         paddingLeft: 19,
//         paddingRight: 19,
//         marginBottom: 11,
//         backgroundColor: "white",
//         /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hd21cahepvo-1%3A2534?alt=media&token=06419eea-f2ea-4d09-ad42-1220f3629414) */
//       },
//       Icon1: {
//         width: 24,
//         height: 24,
//         marginRight: 10,
//       },
//       Txt195: {
//         fontSize: 14,
//         fontWeight: "700",
//         color: "rgba(21,11,61,1)",
//         marginRight: 208,
//       },
//       Add: {
//         width: 24,
//         height: 24,
//       },
    
//       Language: {
//         position: "relative",
//         width: 335,
//         height: 127.09,
//       },
//       Rectangle162: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: 335,
//         height: 70,
//       },
//       Txt271: {
//         position: "absolute",
//         top: 25,
//         left: 54,
//         fontSize: 14,
//         fontWeight: "700",
//         color: "rgba(21,11,61,1)",
//         width: 65,
//         height: 18,
//       },
//       Icon3: {
//         position: "absolute",
//         top: 23,
//         left: 20,
//         width: 30.41,
//         height: 104.09,
//       },
//       Group343: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "flex-end",
//         position: "absolute",
//         top: 2,
//         none: "0px",
//         width: 20,
//         height: 20,
//       },
//       Group261: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         position: "relative",
//       },
//       Rectangle167: {
//         width: 5,
//         height: 5,
//       },
//       Rectangle165: {
//         position: "absolute",
//         top: 9,
//         left: 9,
//         borderWidth: 1.5,
//         borderStyle: "solid",
//         borderColor: "rgba(255,146,40,1)",
//         width: 11,
//         height: 11,
//         borderRadius: 3,
//       },
    
//       Rectangle167: {
//         width: 5,
//         height: 5,
//       },
    
//       Rectangle165: {
//         position: "absolute",
//         top: 11,
//         left: 11,
//         borderWidth: 1.5,
//         borderStyle: "solid",
//         borderColor: "rgba(255,146,40,1)",
//         width: 11,
//         height: 11,
//         borderRadius: 3,
//       },
//       Vector: {
//         position: "absolute",
//         top: "93.19%",
//         bottom: "0.24%",
//         left: "78.91%",
//         right: "0.92%",
//         width: 6.13,
//         height: 6.84,
//       },
//       Txt713: {
//         position: "absolute",
//         top: 1,
//         left: 5,
//         fontSize: 8,
//         fontWeight: "700",
//         color: "rgba(255,146,40,1)",
//         width: 6,
//         height: 11,
//       },
    
//       Add1: {
//         position: "absolute",
//         top: 23,
//         left: 291,
//         width: 24,
//         height: 24,
//       },
    
//       Resume: {
//         display: "flex",
//         flexDirection: "row",
//         position: "absolute",
//         top: 580,
//         left: 40,
//         paddingTop: 22,
//         paddingBottom: 22,
//         paddingLeft: 19,
//         paddingRight: 19,
//         backgroundColor: "white",
//         /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hd21cahepvo-1%3A2591?alt=media&token=28f98570-c4b2-4f98-9e60-a4e6ca4400ca) */
//         width: 335,
//         height: 70,
//       },
//       Icon1: {
//         width: 24,
//         height: 24,
//         marginRight: 15,
//       },
//       Txt012: {
//         fontSize: 14,
//         fontWeight: "600",
//         color: "rgba(21,11,61,1)",
//         marginRight: 182,
//       },
//       Add: {
//         width: 24,
//         height: 24,
//       },
    
//       Background: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: 477,
//         height: 219,
//       },
//       Background: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: 477,
//         height: 219,
//       },
//       Group1017: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-end",
//         position: "absolute",
//         top: 26,
//         none: "0px",
//         width: 427,
//         height: 172,
//       },
//       Group778: {
//         display: "flex",
//         flexDirection: "row",
//         marginBottom: 118,
//       },
//       IconShared: {
//         width: 30.53,
//         height: 23.89,
//         marginRight: 18,
//       },
//       IconSetting: {
//         width: 30.53,
//         height: 23.89,
//       },
    
//       Group641: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "flex-end",
//       },
//       Txt616: {
//         fontSize: 16,
//         fontWeight: "400",
//         color: "rgba(255, 255, 255, 1)",
//         width: 142,
//         height: 19,
//         marginRight: 132,
//       },
//       EditProfile: {
//         display: "flex",
//         flexDirection: "row",
//         paddingTop: 10,
//         marginTop: "-40px",
//         marginRight: "0px",
//         paddingBottom: 1.86,
//         paddingLeft: 18,
//         paddingRight: 11.64,
//         backgroundColor: "red",
//       },
//       Txt901: {
//         fontSize: 12,
//         fontWeight: "400",
//         color: "rgba(255, 255, 255, 1)",
//         width: 79,
//         height: 17,
//         marginRight: 11,
//       },
//       IconSetting: {
//         width: 30.53,
//         height: 23.89,
//       },
// });

// export default profileStyles;