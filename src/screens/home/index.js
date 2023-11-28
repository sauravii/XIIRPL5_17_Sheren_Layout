import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { ListComponent, NavbarMain } from "../../components/organisms";
import { dataGuru } from "../../utils/mapping";
import { palettes } from "../../utils/palettes";

const HomePage = ({ navigation }) => {
  const onPressCreate = () => {
    navigation.navigate("CreateDataPage");
  };
  const onPressDetail = () => {
    navigation.navigate("CreateDataPage", { initialScreen: "detail" });
  };

  return (
    <View style={styles.container}>
      <NavbarMain checkNavCondition={true} detailText="TA 2022/2023" titleText="Data Guru SMK Telkom Purwokerto" subText="Total Guru" amountText="10" btnText="Tambah Data" onButtonPress={onPressCreate} />

      <ScrollView>
        <View style={styles.listContainer}>
          {dataGuru.map((item) => {
            return <ListComponent title={item.nama} subtitle={item.role} onPress={onPressDetail} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
