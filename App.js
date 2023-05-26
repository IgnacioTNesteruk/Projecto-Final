import { useFonts } from 'expo-font';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {

  const [loaded] = useFonts({
    FolditBlack: require("./src/assets/fonts/Foldit-Black.ttf"),
    FolditBold: require("./src/assets/fonts/Foldit-Bold.ttf"),
  })

  return (
    <Provider store={store}>
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
    </Provider>
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
