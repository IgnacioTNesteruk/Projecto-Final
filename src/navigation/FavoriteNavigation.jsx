import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/favoriteScreen";

const Stack = createNativeStackNavigator();

export default FavoriteNavigation = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShadowVisible: false,
             headerTitleStyle: {
                fontWeight: "bold",
            }
        }}>
            <Stack.Screen name="Favorite" component={FavoriteScreen} />
        </Stack.Navigator>
    )
}