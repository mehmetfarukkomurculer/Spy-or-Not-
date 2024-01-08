import { StatusBar } from "expo-status-bar";
import StartScreen from "./screens/StartScreen";
import { Colors } from "./utils/colors";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GameScreen from "./screens/GameScreen";
import { RootStackParamList } from "./navigation/RootStackParamList";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Tektur: require("./assets/fonts/Tektur.ttf"),
  });

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
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }}
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
              title: "SELECT A CARD",
              headerTitleStyle: {
                fontFamily: 'Tektur'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
