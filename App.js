import { useFonts } from 'expo-font';
import { StyleSheet, } from 'react-native';
import TrackNavigation from './src/navigation/TrackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

export default function App() {

  const [loaded] = useFonts({
    FolditBlack: require("./src/assets/fonts/Foldit-Black.ttf"),
    FolditBold: require("./src/assets/fonts/Foldit-Bold.ttf"),
  })

  return (

    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
