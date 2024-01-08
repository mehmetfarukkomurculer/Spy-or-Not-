import { View, StyleSheet, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { useAppSelector } from "../../redux/hooks";
import { Colors } from "../../utils/colors";

interface OnboardingTemplateProps {
  imagePath: any;
  title: string;
  description: string;
  buttonTitle: string;
  onPress: () => void;
}

const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  imagePath,
  title,
  description,
  buttonTitle,
  onPress,
}) => {
  const indicator = useAppSelector((state) => state.indicator.indicator);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={imagePath} style={styles.image} resizeMode="contain" />
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onPress} buttonTitle={buttonTitle} />
      </View>
      <View style={styles.indicatorContainer}>
        {[...Array(3).keys()].map((index) => (
          <View
            key={index}
            style={
              index === indicator
                ? styles.activeIndicator
                : styles.inactiveIndicator
            }
          />
        ))}
      </View>
    </View>
  );
};

export default OnboardingTemplate;

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
});
