import { StyleSheet } from "react-native";
import OnboardingTemplate from "../../components/UI/OnboardingTemplate";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { incrementIndicator } from "../../redux/slices/indicator-slice";
import { useNavigation } from "@react-navigation/native";
function SecondOnboardingScreen() {
    const navigation = useNavigation<any>();
    const lang = useAppSelector((state) => state.language.language);
    const dispatch = useAppDispatch();
    function onPressHandler(){
        dispatch(incrementIndicator());
        navigation.navigate('ThirdOnb');
    }
  return (
    <OnboardingTemplate
      imagePath={require("../../assets/images/blocktwo.png")}
      title={lang === 'eng' ? "SPY OR NOT" : "CASUS MUSUN?"}
      description={lang === 'eng' ? "Decode the Secrets Within!" : "İçinizdeki Sırları Çözün!"}
      buttonTitle={lang === 'eng' ? "Next" : "İleri"}
      onPress={onPressHandler}
    />
  );
}

export default SecondOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
