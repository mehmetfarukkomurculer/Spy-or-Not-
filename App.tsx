import { StatusBar } from "expo-status-bar";
import StartScreen from "./screens/main/StartScreen";
import { Colors } from "./utils/colors";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GameScreen from "./screens/main/GameScreen";
import { RootStackParamList } from "./navigation/RootStackParamList";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import FirstOnboardingScreen from "./screens/onboarding/FirstOnboardingScreen";
import SecondOnboardingScreen from "./screens/onboarding/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./screens/onboarding/ThirdOnboardingScreen";
import LanguageSelectScreen from "./screens/onboarding/LanguageSelectScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Tektur: require("./assets/fonts/Tektur.ttf"),
  });

  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("Error @checkOnboarding: ", error);
    }
  };

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return undefined;
  }

  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: Colors.secondaryAccent600,
            },
          }}
        >
          {viewedOnboarding ? (
            <>
              <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="Game"
                component={GameScreen}
                options={{
                  gestureEnabled: false,
                  headerStyle: {
                    backgroundColor: Colors.secondaryAccent600,
                  },
                  headerBackVisible: false,
                  headerShown: true,
                  title: "",
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="LangSelect"
                component={LanguageSelectScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="FirstOnb"
                component={FirstOnboardingScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="SecondOnb"
                component={SecondOnboardingScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="ThirdOnb"
                component={ThirdOnboardingScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="Game"
                component={GameScreen}
                options={{
                  gestureEnabled: false,
                  headerStyle: {
                    backgroundColor: Colors.secondaryAccent600,
                  },
                  headerBackVisible: false,
                  headerShown: true,
                  title: "",
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
