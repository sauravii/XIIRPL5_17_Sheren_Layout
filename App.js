import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { fonts } from "./src/utils/fonts";
import HomePage from "./src/screens/home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular: require("./src/assets/fonts/Inter-Regular.ttf"),
    Inter_500Medium: require("./src/assets/fonts/Inter-Medium.ttf"),
    Inter_600SemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
    Inter_700Bold: require("./src/assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <HomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 30,
  },
});
