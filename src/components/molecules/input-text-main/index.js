import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const InputTextMain = (props) => {
  const [onFocusStyle, setOnFocusStyle] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput placeholder={props.placeholder} style={onFocusStyle ? styles.inputStyleActive : styles.inputStyle} onFocus={() => setOnFocusStyle(true)} onBlur={() => setOnFocusStyle(false)} placeholderTextColor="#AAAAAA" />
      </View>
    </View>
  );
};

export default InputTextMain;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 15,
  },
  title: {
    ...fonts.md2,
    color: palettes.default.textPrimary,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderColor: palettes.default.stroke,
  },
  inputStyleActive: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderColor: palettes.default.secondary,
  },
});
