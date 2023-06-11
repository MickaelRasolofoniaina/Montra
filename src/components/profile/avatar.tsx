import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";

import { purple100 } from "constants/color";

export interface AvatarProps {
  source: ImageSourcePropType;
}

export const Avatar: React.FC<AvatarProps> = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const IMG_SIZE = 80;
const CONTAINER_SIZE = IMG_SIZE + 10;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: CONTAINER_SIZE,
    width: CONTAINER_SIZE,
    borderRadius: CONTAINER_SIZE / 2,
    borderWidth: 2,
    borderColor: purple100,
    backgroundColor: "#FFF"
  },
  image: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: IMG_SIZE / 2,
    resizeMode: "cover"
  }
});