import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import TrackNavigation from './src/navigation/TrackNavigation';


export default function App() {

  const [isPortrait, setIsPortrait] = useState(true)

  const statePortrait = () => setIsPortrait(onPortrait)

  const onPortrait = () => {
    const dim = Dimensions.get("screen")
    return dim.height > dim.width
  }
  //console.log(isPortrait);

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait)
    return () => {
      Dimensions.removeEventListener("change", statePortrait)
    }
  }, [])


  const [Loaded] = useFonts({
    FolditBlack: require("./src/assets/fonts/Foldit-Black.ttf"),
    FolditBold: require("./src/assets/fonts/Foldit-Bold.ttf"),
  })

  if (!Loaded) return null

  return (
   <TrackNavigation/>
   /*  <View style={styles.container}>

    {
        isPortrait ?
          <Text style={styles.title}>GOLDENTRACK</Text>
          :
          <Text style={styles.title2}>GOLDENTRACK</Text>
      }
      <StatusBar style="auto" />  
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontFamily: "FolditBlack",
  },
  title2: {
    fontFamily: "FolditBold"
  },
});
