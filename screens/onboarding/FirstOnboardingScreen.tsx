import { StyleSheet } from "react-native";
import OnboardingTemplate from "../../components/UI/OnboardingTemplate";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { incrementIndicator } from "../../redux/slices/indicator-slice";
import { useNavigation } from "@react-navigation/native";

function FirstOnboardingScreen() {
    const navigation = useNavigation<any>();
    const lang = useAppSelector((state) => state.language.language);
    const dispatch = useAppDispatch();
    function onPressHandler(){
        dispatch(incrementIndicator());
        navigation.navigate('SecondOnb');
    }

  return (
    <OnboardingTemplate
      imagePath={require("../../assets/images/detective.png")}
      title={lang === 'eng' ? "UNCOVER ESPIONAGE" : "CASUSLUĞU ORTAYA ÇIKARIN"}
      description={lang === 'eng' ? "Discover Your Role!" : "Rolünüzü Keşfedin!"}
      buttonTitle={lang === 'eng' ? "Next" : "İleri"}
      onPress={onPressHandler}
    />
  );
}

export default FirstOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
