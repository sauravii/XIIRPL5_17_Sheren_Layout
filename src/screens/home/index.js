import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { ListComponent, NavbarMain } from "../../components/organisms";

const HomePage = () => {
  const data = [
    {
      id: 1,
      title: "Sheren Aura",
      subtitle: "sheren@gmail.com",
    },
    {
      id: 2,
      title: "Fabian Yoga",
      subtitle: "fabian@gmail.com",
    },
    {
      id: 3,
      title: "Malik Iskandar",
      subtitle: "malik@gmail.com",
    },
    {
      id: 4,
      title: "Felita Valmay",
      subtitle: "felita@gmail.com",
    },
    {
      id: 5,
      title: "Shellyn Euriska",
      subtitle: "shellyn@gmail.com",
    },
    {
      id: 6,
      title: "Syahla Kheisya",
      subtitle: "syahla@gmail.com",
    },
    {
      id: 7,
      title: "Zasckia Nayla",
      subtitle: "zasckia@gmail.com",
    },
    {
      id: 8,
      title: "Selly Resty",
      subtitle: "selly@gmail.com",
    },
    {
      id: 9,
      title: "Azra Rizqia",
      subtitle: "azra@gmail.com",
    },
    {
      id: 10,
      title: "Aditya Eka",
      subtitle: "aditya@gmail.com",
    },
  ];

  return (
    <ScrollView>
      <View>
        <NavbarMain detailText="TA 2022/2023" titleText="Data Guru SMK Telkom Purwokerto" subText="Total Guru" amountText="10" btnText="Tambah Data" />

        <View style={styles.listContainer}>
          {data.map((item) => {
            return <ListComponent title={item.title} subtitle={item.subtitle} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
