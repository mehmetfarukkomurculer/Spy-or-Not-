import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Pressable,
} from "react-native";
import InputForm from "../../components/ManageInputs/InputForm";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Colors } from "../../utils/colors";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setLanguage } from "../../redux/slices/language-slice";

function StartScreen() {
  const animation = useRef(null);
  const lang = useAppSelector((state) => state.language.language);
  const dispatch = useAppDispatch();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ marginTop: 40 }}>
        
        <View style={styles.animationContainer}>
          <Text style={styles.headerText}>
            {lang === "eng" ? "SPY OR NOT?" : "CASUS KİM?"}
          </Text>
          <LottieView
            autoPlay
            ref={animation}
            loop
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../../assets/lottie/spy.json")}
          />
        </View>
        <InputForm />
        {lang === "eng" ? (
          <Pressable style={styles.pressableCont} onPress={()=>{
            dispatch(setLanguage('tur'))
          }}>
            <Image
              style={styles.langImage}
              source={require("../../assets/images/turkish.png")}
            />
          </Pressable>
        ) : (
          <Pressable style={styles.pressableCont} onPress={()=>{
            dispatch(setLanguage('eng'))
          }}>
            <Image
              style={styles.langImage}
              source={require("../../assets/images/english.png")}
            />
          </Pressable>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  animationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Tektur",
    textAlign: "center",
    fontSize: 32,
    color: Colors.button400,
  },
  langImage: {
    width: 40,
    height: 40,
  },
  pressableCont: {
    position: 'absolute',
    right: 10,
  }
});
