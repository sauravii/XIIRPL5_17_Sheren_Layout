import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { InputTextMain, InputTextIcon } from "../../components/molecules";
import { ButtonMain } from "../../components/atomics";
import { fonts } from "../../utils/fonts";
import { palettes } from "../../utils/palettes";

const LoginPage = ({ navigation }) => {
  const [showPassword, setShowPassowrd] = useState(true);

  const onPressShowPassword = () => {
    setShowPassowrd(!showPassword);
  };

  const IconEye = () => <TouchableOpacity onPress={onPressShowPassword}>{showPassword ? <FontAwesome name="eye-slash" size={16} /> : <FontAwesome name="eye" size={16} />}</TouchableOpacity>;

  const onLogin = () => {
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View>
        <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
        <View style={styles.headerContainer}>
          <Text style={styles.titleStyle}>Hello</Text>
          <Text style={styles.subtitleStyle}>Masuk untuk melanjutkan</Text>
        </View>
      </View>

      {/* body-form */}
      <View>
        <View style={{ gap: 15, marginTop: 25 }}>
          <InputTextIcon placeholder="Username" />
          <InputTextIcon placeholder="Password" secureText={showPassword} customRightIcon={<IconEye />} />
        </View>
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.textDisable}>Lupa Password?</Text>
        </TouchableOpacity>
        <ButtonMain title="Login" btnStyle={{ marginTop: 40 }} onPress={onLogin} />
      </View>
    </View>
  );
};

export default LoginPage;
