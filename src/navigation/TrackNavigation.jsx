import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import MoviesView from "../screens/CategoryMovieScreen";
import SeriesView from "../screens/CategorySerieScreen";
import VideoGamesView from "../screens/CategoryVideoGamesScreen";
import BooksView from "../screens/CategoryBooksScreen";
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
                        title:"CATEGORIES",
                    }}
                />
                <stack.Screen name="MovieScreen" component={MoviesView} />
                <stack.Screen name="SerieScreen" component={SeriesView} />
                <stack.Screen name="VideoGamesScreen" component={VideoGamesView} />
                <stack.Screen name="BooksScreen" component={BooksView} />
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