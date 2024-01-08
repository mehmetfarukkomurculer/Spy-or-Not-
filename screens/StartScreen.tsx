import { View, StyleSheet, Text } from "react-native";
import InputForm from "../components/ManageInputs/InputForm";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Colors } from "../utils/colors";

function StartScreen() {
  const animation = useRef(null);
  return (
    <View style={{ marginTop: 40 }}>
      <View style={styles.animationContainer}>
        <Text style={styles.headerText}>SPY OR NOT?</Text>
        <LottieView
          autoPlay
          ref={animation}
          loop
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/lottie/spy.json")}
        />
      </View>
      <InputForm />
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  animationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: 'Tektur',
    textAlign: 'center',
    fontSize: 32,
    color: Colors.button400,
  }
});
