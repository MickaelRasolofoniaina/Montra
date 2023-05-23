import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { grey, grey200 } from "constants/Color";
import { fontFamily } from "constants/Font";

import { normalizeMeasure, addStyleWhen } from "utils/Style";

import { Render } from "../container/Render";

export interface FileInputProps {
  onImageSelected: (imageUri: string) => void;
  onCancel?: () => void;
}

export const FileInput: React.FC<FileInputProps> = ({
  onImageSelected,
  onCancel
}) => {
  const [image, setImage] = useState<string>("");

  const openMediaPicker = async () => {
    if(image !== "") return;
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0]; 
      setImage(uri);
      onImageSelected(uri);
    }
    else {
      if(onCancel) {
        onCancel();
      }
    }
  };

  const removeImage = () => {
    setImage("");
  };

  return (
    <TouchableOpacity onPress={openMediaPicker}>
      <View style={[styles.container, addStyleWhen(image !== "", { justifyContent: "flex-start"})]}>
        <Render when={image === ""}>
          <Entypo name="attachment" size={25} color={grey} />
          <Text style={styles.placeholder}>Add attachment</Text>
        </Render>
        <Render when={image !== ""}>
          <View style={styles.previewContainer}>
            <Image source={{ uri: image }} style={styles.preview} />
            <View style={styles.closeButton}>
              <TouchableOpacity onPress={removeImage}>
                <Entypo name="cross" size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </Render>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: grey200,
    borderStyle: "dashed",
    borderRadius: 16,
    padding: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2)
  },
  placeholder: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 18,
    color: grey,
    marginLeft: normalizeMeasure(2),
  },
  previewContainer: {
    height: 118,
    width: 118,
  },
  preview: {
    height: 118,
    width: 118,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: -12,
    right: 4,
    backgroundColor: "#000",
    borderRadius: 12,
    opacity: 0.32,
  },
});
