import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { ListComponent, NavbarMain } from "../../components/organisms";
import { dataGuru } from "../../utils/mapping";

const HomePage = () => {
  return (
    <View>
      <NavbarMain checkNavCondition={true} detailText="TA 2022/2023" titleText="Data Guru SMK Telkom Purwokerto" subText="Total Guru" amountText="10" btnText="Tambah Data" />

      <ScrollView>
        <View style={styles.listContainer}>
          {dataGuru.map((item) => {
            return <ListComponent title={item.nama} subtitle={item.role} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
