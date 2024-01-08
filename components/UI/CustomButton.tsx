import React from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Colors } from "../../utils/colors";

interface CustomButtonProps {
  onPress: () => void;
  buttonTitle: string;
  buttonStyles?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  buttonTitle,
  buttonStyles,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.button, styles.pressed, buttonStyles]
          : [styles.button, buttonStyles]
      }
    >
      <Text style={styles.text}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    borderRadius: 6,
    backgroundColor: Colors.button,
    padding: 16,
    alignItems: "center",
  },
  text: {
    color: Colors.secondaryAccent100,
    fontSize: 16,
    fontFamily: 'Tektur'
  },
  pressed: {
    opacity: 0.75,
  },
});
