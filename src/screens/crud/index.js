import { View, Text, ScrollView, TextInput, SafeAreaView, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { NavbarMain } from "../../components/organisms";
import { InputTextMain } from "../../components/molecules";
import { ButtonLine, ButtonMain } from "../../components/atomics";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";
import { dataInput, dataGuru } from "../../utils/mapping";
import styles from "./styles";

const CreateDataPage = (props) => {
  const [editLayout, setEditLayout] = useState(true);
  const [editable, setEditable] = useState(false);

  const { route, navigation } = props;
  const initialScreen = route?.params?.initialScreen ?? "";
  const conditionScreen = initialScreen === "detail" && editLayout;

  const onPressBtnPrimary = () => {
    if (conditionScreen && editable) {
      editAlert();
    } else if (conditionScreen) {
      setEditable(true);
    } else {
      addAlert();
    }
  };

  const addAlert = () =>
    Alert.alert("Selamat", "Data telah ditambahkan", [
      {
        text: "Tutup",
        onPress: () => navigation.navigate("HomePage"),
      },
    ]);

  const editAlert = () =>
    Alert.alert("Selamat", "Data telah diubah", [
      {
        text: "Tutup",
        onPress: () => navigation.navigate("HomePage"),
      },
    ]);

  const onPressBtnSecondary = () => {
    if (conditionScreen && editable) {
      setEditable(false);
    } else if (conditionScreen) {
      navigation.navigate("DeletePage");
    } else {
      navigation.goBack();
    }
  };

  const screenTitle = () => {
    if (conditionScreen && editable) {
      return "Edit Data";
    } else if (conditionScreen) {
      return "Detail Data";
    } else {
      return "Tambah Data";
    }
  };

  const buttonMainTitle = () => {
    if (conditionScreen && editable) {
      return "Perbarui Data";
    } else if (conditionScreen) {
      return "Edit Data";
    } else {
      return "Tambah Data";
    }
  };

  const buttonSecTitle = () => {
    if (conditionScreen && editable) {
      return "Cancel";
    } else if (conditionScreen) {
      return "Hapus Data";
    } else {
      return "Cancel";
    }
  };

  const btnSecStyle = () => {
    if (conditionScreen && editable) {
      return [styles.btnLineStyle, styles.textStyle];
    } else if (conditionScreen) {
      return [styles.btnLineStyleDelete, styles.textStyleDelete];
    } else {
      return [styles.btnLineStyle, styles.textStyle];
    }
  };

  return (
    <View style={styles.container}>
      <NavbarMain detailText={screenTitle()} titleText={conditionScreen ? "Jabriel Bamasena Javier Rahardjanto" : "Tambah Data Guru SMK Telkom Purwokerto"} navStyle={{ height: "23%" }} />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.listContainer}>
            <FlatList data={dataInput} renderItem={({ item }) => <InputTextMain title={item.title} placeholder={conditionScreen ? item.value : item.placeholder} editable={editable} />} keyExtractor={(item) => item.id} />

            <View style={styles.btnGroup}>
              <ButtonLine title={buttonSecTitle()} onPress={onPressBtnSecondary} btnStyle={btnSecStyle()} textStyle={btnSecStyle()} />
              <ButtonMain title={buttonMainTitle()} onPress={onPressBtnPrimary} btnStyle={{ flex: 1 }} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CreateDataPage;
