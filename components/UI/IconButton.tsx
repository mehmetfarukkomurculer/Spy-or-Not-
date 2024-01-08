import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

interface IconButtonProps {
  icon: string;
  color: string;
  size: number;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color,
  size,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Feather name={icon as any} size={size} color={color}/>
    </Pressable>
  );
};

export default IconButton;
