import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer:{
        flex: 1,
        borderRadius: 10,
        padding: 20,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width:0, height:2},
        shadowRadius: 10,
        elevation: 5,
    },
    imageContainer:{
        height: "50%",
    },
    image:{
        width:"100%",
        height:"100%",
     },
    textContainer:{
        height:"50%",
    },
});

export default styles;