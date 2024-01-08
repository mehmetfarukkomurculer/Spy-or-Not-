import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  View,
  Dimensions,
} from "react-native";
import { Colors } from "../../utils/colors";

const width = Dimensions.get("window").width;

interface CardProps {
  text: string;
  role: string;
}

const Card: React.FC<CardProps> = ({ text, role}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipsCount, setFlipsCount] = useState(0);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const handleFlip = () => {
    if (flipsCount < 2) {
      setFlipsCount(flipsCount + 1);
      Animated.timing(flipAnimation, {
        toValue: isFlipped ? 0 : 180,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setIsFlipped(!isFlipped);
      });
    }
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
    borderRadius: isFlipped ? 16 : 16,
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }, { perspective: 1000 }],
    borderRadius: isFlipped ? 16 : 16,
  };

  const cardStyle = {
    backgroundColor: flipsCount >= 2 ? Colors.disabled : Colors.button400,
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={handleFlip}
      disabled={flipsCount >= 2}
    >
      <Animated.View
        style={[cardStyle, styles.card, styles.frontCard, frontAnimatedStyle]}
      >
        <Text style={styles.backText}>{text}</Text>
      </Animated.View>
      <Animated.View style={[styles.card, styles.backCard, backAnimatedStyle]}>
        {role === "spy" ? (
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../../assets/images/spy.png")}
              resizeMode="contain"
            />
          </View>
        ) : (
          <Text style={styles.backText}>{role}</Text>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: width / 4,
    height: width / 4,
    perspective: 1000,
    borderRadius: 16,
    overflow: "hidden",
    margin: 4,
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    justifyContent: "center",
  },
  frontCard: {
    justifyContent: "center",
  },
  backCard: {
    backgroundColor: Colors.button,
    transform: [{ rotateY: "180deg" }],
    justifyContent: "center",
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 50,
    height: 50,
  },
  backText: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'Tektur',
  },
});
