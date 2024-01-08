import { StyleSheet, View, Text, Keyboard } from "react-native";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setPlayerNumber,
  setSpyNumber,
} from "../../redux/slices/player-numbers-slice";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import { Colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const InputForm = () => {
  const navigation = useNavigation<any>();
  const [isValidPlayerNumber, setIsValidPlayerNumber] = useState<boolean>(true);
  const [isValidSpyNumber, setIsValidSpyNumber] = useState<boolean>(true);
  const [validation, setValidation] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const playerNumberState = useAppSelector(
    (state) => state.playerNumbers.playerNumber
  );
  const spyNumberState = useAppSelector(
    (state) => state.playerNumbers.spyNumber
  );

  function numOfPlayersHandler(enteredPlayerNumbers: string) {
    if (enteredPlayerNumbers == "") {
      setIsValidPlayerNumber(true);
    } else {
      const isNumeric = /^[0-9]+$/.test(enteredPlayerNumbers);
      if (!isNumeric) {
        setIsValidPlayerNumber(false);
      } else {
        const playerNumber = parseInt(enteredPlayerNumbers);
        if (playerNumber < 3) {
          setIsValidPlayerNumber(false);
        } else {
          if (playerNumber >= spyNumberState) {
            setIsValidSpyNumber(true);
            setIsValidPlayerNumber(true);
            dispatch(setPlayerNumber(playerNumber));
          } else {
            setIsValidSpyNumber(false);
            setIsValidPlayerNumber(false);
          }
        }
      }
    }
  }

  function numOfSpiesHandler(enteredSpyNumbers: string) {
    if (enteredSpyNumbers === "") {
      setIsValidSpyNumber(true);
    } else {
      const isNumeric = /^[0-9]+$/.test(enteredSpyNumbers);
      if (!isNumeric) {
        setIsValidSpyNumber(false);
      } else {
        const spyNumber = parseInt(enteredSpyNumbers);
        if (spyNumber > playerNumberState || spyNumber === 0) {
          setIsValidSpyNumber(false);
        } else {
          setIsValidSpyNumber(true);
          setIsValidPlayerNumber(true);
          dispatch(setSpyNumber(spyNumber));
        }
      }
    }
  }
  function startGameHandler() {
    if (
      isValidPlayerNumber &&
      isValidSpyNumber &&
      spyNumberState > 0 &&
      playerNumberState > 2 &&
      spyNumberState <= playerNumberState
    ) {
      navigation.navigate("Game", {
        playerNumber: playerNumberState,
        spyNumber: spyNumberState,
      });
      setValidation(true);
      Keyboard.dismiss();
    } else {
      setValidation(false);
    }
  }

  const playerInputStyle = !isValidPlayerNumber
    ? styles.warningInputStyle
    : null;
  const spyInputStyle = !isValidSpyNumber ? styles.warningInputStyle : null;

  return (
    <View>
      <Input
        label="Enter the total number of players"
        textInputConfig={{
          keyboardType: "number-pad",
          onChangeText: numOfPlayersHandler,
        }}
        inputStyle={playerInputStyle}
      />
      {!isValidPlayerNumber && (
        <View>
          <Text style={styles.warningText}>
            Number of players must be greater than 2
          </Text>
          <Text style={styles.warningText}>
            Number of players must be greater than or equal to spies number
          </Text>
        </View>
      )}
      <Input
        label="Enter the total number of spies"
        textInputConfig={{
          keyboardType: "number-pad",
          onChangeText: numOfSpiesHandler,
        }}
        inputStyle={spyInputStyle}
      />
      {!isValidSpyNumber && (
        <View>
          <Text style={styles.warningText}>
            Number of spies must be greater than 0
          </Text>
          <Text style={styles.warningText}>
            Number of spies must be lower than or equal to player numbers
          </Text>
        </View>
      )}
      <CustomButton
        onPress={startGameHandler}
        buttonTitle="Start"
        buttonStyles={styles.buttonStyle}
      />
      {!validation && <Text style={styles.warningText}>Invalid Inputs</Text>}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.button,
    padding: 16,
  },
  warningText: {
    color: Colors.validity700,
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  warningInputStyle: {
    backgroundColor: Colors.validity100,
    borderColor: Colors.validity700,
    borderWidth: 2,
  },
});
