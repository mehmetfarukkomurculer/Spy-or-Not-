import { View, StyleSheet, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList as ScreenParamList } from "../../navigation/RootStackParamList";
import Card from "../../components/Game/Card";
import { shuffler } from "../../utils/shuffler";
import IconButton from "../../components/UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import { englishWords } from "../../data/english-words";
import { turkishWords } from "../../data/turkish-words";
import { useAppSelector } from "../../redux/hooks";

interface GameScreenProps {
  route: RouteProp<ScreenParamList, "Game">;
}

const GameScreen: React.FC<GameScreenProps> = ({ route }) => {
  const navigation = useNavigation<any>();
  const lang = useAppSelector((state) => state.language.language);
  const { playerNumber, spyNumber } = route.params;

  const index = Math.floor(Math.random() * 83);
  let word;
  
  if(lang === 'eng'){
    word = englishWords[index];
  }else {
    word = turkishWords[index];
  }
  

  const roles: string[] = Array(spyNumber)
    .fill("spy")
    .concat(Array(playerNumber - spyNumber).fill(word));

  const shuffledRoles = shuffler(roles);

  const data = Array.from({ length: playerNumber }, (_, index) => ({
    key: index.toString(),
    role: shuffledRoles[index],
  }));

  const renderItem = ({ item }: { item: { key: string; role: string } }) => (
    <Card
      key={item.key}
      text={(parseInt(item.key) + 1).toString()}
      role={item.role}
      
    />
  );

  function refreshHandler() {
    navigation.navigate("Start");
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.iconContainer}>
        <IconButton
          icon="refresh-ccw"
          size={24}
          color="black"
          onPress={refreshHandler}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  headerText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  iconContainer: {
    marginVertical: 8,
  },
});
