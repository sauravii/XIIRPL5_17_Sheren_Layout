import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";
import { ButtonLine, ButtonMain } from "../../components/atomics";
import styles from "./styles";

const DeletePage = ({ navigation }) => {
  const onDelete = () => {
    Alert.alert("Selamat", "Data telah dihapus", [
      {
        text: "Tutup",
        onPress: () => navigation.navigate("HomePage"),
      },
    ]);
  };

  const onCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 130 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/images/img-delete.png")} />
          <Text style={styles.titleStyle}>Apakah Anda yakin akan menghapus data ini?</Text>
        </View>
        <View style={styles.btnGroup}>
          <ButtonLine title="Cancel" btnStyle={{ borderColor: palettes.default.secondary, flex: 1 }} textStyle={{ color: palettes.default.secondary }} onPress={onCancel} />
          <ButtonMain title="Hapus" btnStyle={{ backgroundColor: palettes.default.primary, borderColor: palettes.default.primary, flex: 1 }} onPress={onDelete} />
        </View>
      </View>
    </View>
  );
};

export default DeletePage;
