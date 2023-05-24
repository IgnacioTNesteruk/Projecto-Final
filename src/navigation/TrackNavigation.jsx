import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryView from "../screens/CategoriesScreen";
import VideoGamesView from "../screens/VideoGamesScreen";
import DetailView from "../screens/DetailScreen";
import { COLORS } from "../constants/colors";


const TrackNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}>
            <Stack.Screen
                name="Home"
                component={CategoryView}
                options={{
                    title: "CATEGORIES"
                }} />
            <Stack.Screen name="VideoGames" component={VideoGamesView}
                options={({ route }) => ({
                    title: route.params.name,
                })} />
            <Stack.Screen name="Detail"
                component={DetailView}
                options={({ route }) => ({
                    title: route.params.name,
                })} />
        </Stack.Navigator>
    );
};

export default TrackNavigation

const styles = StyleSheet.create({})