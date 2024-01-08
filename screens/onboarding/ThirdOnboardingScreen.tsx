import { StyleSheet } from "react-native";
import OnboardingTemplate from "../../components/UI/OnboardingTemplate";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { incrementIndicator } from "../../redux/slices/indicator-slice";
import { useNavigation } from "@react-navigation/native";


function ThirdOnboardingScreen() {
    const navigation = useNavigation<any>();
    const lang = useAppSelector((state) => state.language.language);
    const dispatch = useAppDispatch();
    function onPressHandler(){
        dispatch(incrementIndicator());
        navigation.navigate('Start');
    }
  return (
    <OnboardingTemplate
      imagePath={require("../../assets/images/spear.png")}
      title={lang === 'eng' ? "WORD WARRIORS" : "KELİME SAVAŞÇILARI"}
      description={lang === 'eng' ? "Unveil the Mystery Words!" : "Gizemli Kelimeleri Açığa Çıkarın!"}
      buttonTitle={lang === 'eng' ? "Done" : "Başla"}
      onPress={onPressHandler}
    />
  );
}

export default ThirdOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
