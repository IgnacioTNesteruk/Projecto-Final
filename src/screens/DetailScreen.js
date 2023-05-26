import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import React from "react";

const DetailScreen = () => {

    const videosgames = useSelector(state =>state.games.selected)

    return (
        <View>
            <Text>{videosgames.description}</Text>
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({})