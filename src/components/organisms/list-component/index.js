import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IcChevronRight } from "../../../assets";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const ListComponent = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <TouchableOpacity>{/* <Ionicons icon="chevron-forward-outline" size={30} color="#000000" /> */}</TouchableOpacity>
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palettes.default.listField,
    width: "343",
    height: "72",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    ...fonts.lg1,
    color: palettes.default.textPrimary,
  },
  subtitle: {
    ...fonts.md1,
    color: palettes.default.secondary,
  },
});
