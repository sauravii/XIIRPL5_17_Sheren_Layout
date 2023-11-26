import { View, Text, ScrollView, TextInput, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { NavbarMain } from "../../components/organisms";
import { ButtonGroupMain, InputTextMain } from "../../components/molecules";
import { ButtonLine, ButtonMain } from "../../components/atomics";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";
import { dataInput } from "../../utils/mapping";
import styles from "./styles";

const CreateDataPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavbarMain detailText="Tambah Data" titleText="Tambah Data Guru SMK Telkom Purwokerto" />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <FlatList data={dataInput} renderItem={({ item }) => <InputTextMain title={item.title} placeholder={item.placeholder} />} keyExtractor={(item) => item.id} />
            <View style={styles.btnGroup}>
              <ButtonLine title="Cancel" btnStyle={styles.btnLineStyle} textStyle={styles.textStyle} />
              <ButtonMain title="Tambah Data" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CreateDataPage;
