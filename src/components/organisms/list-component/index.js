import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const ListComponent = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <TouchableOpacity>
        <Image source={require("../../../assets/images/ic-arrow-right.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palettes.default.listField,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    ...fonts.lg1,
    color: palettes.default.textPrimary,
  },
  subtitle: {
    ...fonts.md1,
    color: palettes.default.secondary,
  },
  icon: {
    height: 32,
    width: 32,
  },
});
