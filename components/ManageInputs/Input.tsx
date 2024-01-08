import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle
} from "react-native";
import { Colors } from "../../utils/colors";
interface InputProps {
  label: string;
  textInputConfig?: TextInputProps;
  inputStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<InputProps> = ({ label, textInputConfig, inputStyle }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, inputStyle]} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: Colors.secondaryAccent100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.secondaryAccent100,
    padding: 16,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.button,
  },
});
