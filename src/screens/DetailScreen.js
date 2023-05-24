import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DetailScreen = ({route}) => {

    const videosgames = route.params.product;

    return (
        <View>
            <Text>{videosgames.name}</Text>
            <Text>{videosgames.description}</Text>
            <Text>{videosgames.release}</Text>
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({})