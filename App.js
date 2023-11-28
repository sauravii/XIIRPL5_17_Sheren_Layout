import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { fonts } from "./src/utils/fonts";
import HomePage from "./src/screens/home";
import CreateDataPage from "./src/screens/crud";
import LoginPage from "./src/screens/login";
import DeletePage from "./src/screens/confirm";

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

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CreateDataPage" component={CreateDataPage} />
        <Stack.Screen name="DeletePage" component={DeletePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
});
