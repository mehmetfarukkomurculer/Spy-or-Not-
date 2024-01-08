import { View, StyleSheet, Text, Image } from "react-native";
import { Colors } from "../../utils/colors";
import CustomButton from "../../components/UI/CustomButton";
import { useAppDispatch } from "../../redux/hooks";
import { setLanguage } from "../../redux/slices/language-slice";
import { useNavigation } from "@react-navigation/native";

const LanguageSelectScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/languages.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.titleText}>WELCOME</Text>
          <Text style={styles.descriptionText}>Choose a Language</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            dispatch(setLanguage("eng"));
            navigation.navigate("FirstOnb");
          }}
          buttonTitle="English"
          buttonStyles={styles.engButton}
        />
        <CustomButton
           onPress={() => {
            dispatch(setLanguage("tur"));
            navigation.navigate("FirstOnb");
          }}
          buttonTitle="Türkçe"
          buttonStyles={styles.turButton}
        />
      </View>
    </View>
  );
};

export default LanguageSelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  headerContainer: {
    flex: 4,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 8,
  },
  titleText: {
    textAlign: "center",
    fontFamily: "Tektur",
    fontSize: 36,
    padding: 8,
  },
  descriptionText: {
    textAlign: "center",
    fontFamily: "Tektur",
    fontSize: 24,
    padding: 8,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
    flex: 1,
  },
  activeIndicator: {
    width: 20,
    height: 4,
    backgroundColor: "black",
    margin: 3,
  },
  inactiveIndicator: {
    width: 8,
    height: 4,
    backgroundColor: Colors.disabled,
    margin: 3,
  },
  engButton: {
    backgroundColor: Colors.button400,
    marginBottom: 8,
  },
  turButton: {
    backgroundColor: Colors.primary500,
  },
});
