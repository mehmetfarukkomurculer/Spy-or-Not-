import { View, StyleSheet } from "react-native";
import InputForm from "../components/ManageInputs/InputForm";
import LottieView from "lottie-react-native";
import { useRef } from "react";

function StartScreen() {
  const animation = useRef(null);
  return (
    <View style={{ marginTop: 40 }}>
      <View style={styles.animationContainer}>
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
});
