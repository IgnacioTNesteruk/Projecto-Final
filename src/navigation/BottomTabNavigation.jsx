import {StyleSheet, View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackNavigation from "./TrackNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import { COLORS } from "../constants/colors";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigation = () =>{
    return(
        <BottomTabs.Navigator screenOptions={{
            headerShown:false, 
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar
            }}>
            <BottomTabs.Screen name="GamesTrack" component={TrackNavigation} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="game-controller" size={35} color="black" />
                    </View>
                )
            }}/>
            <BottomTabs.Screen name="Favorite" component={FavoriteNavigation} options={{
                tabBarIcon: () => (
                    <View>
                        <AntDesign name="heart" size={35} color="red" />
                    </View>
                )
            }}/>
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: COLORS.primary,
        padding: 15,
        borderBottomEndRadius: 30,
        borderTopStartRadius: 30,
        shadowColor: "black",
        height:60,
        shadowOffset:{height:0,width:0},
        shadowOpacity: 0.2,
        shadowRadius: 5,    
        elevation:5,
    },
})