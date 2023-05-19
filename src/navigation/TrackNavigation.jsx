import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMovieScreen from "../screens/CategoryMovieScreen";
import CategorySerieScreen from "../screens/CategorySerieScreen";
import CategoryVideoGamesScreen from "../screens/CategoryVideoGamesScreen";
import CategoryBooksScreen from "../screens/CategoryBooksScreen";
import { COLORS } from "../constants/colors";

const TrackNavigation = () => {
    const stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.secondary,

                },
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    fontFamily: "FolditBold",
                },
            }}>
                <stack.Screen
                    name="Home"
                    component={CategoriesScreen}
                    options={{
                        title:"categories",
                    }}
                />
                <stack.Screen name="MovieScreen" component={CategoryMovieScreen} />
                <stack.Screen name="SerieScreen" component={CategorySerieScreen} />
                <stack.Screen name="VideoGamesScreen" component={CategoryVideoGamesScreen} />
                <stack.Screen name="BooksScreen" component={CategoryBooksScreen} />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default TrackNavigation;

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.secondary,
    }
})