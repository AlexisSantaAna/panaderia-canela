import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/themes/colors";
import { signUp } from "../../store/actions/index";

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const title = isLogin ? "Iniciar sesión" : "Registro";
  const message = isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?";
  const messageAction = isLogin ? "Ingresar" : "Registrarse";

  const onHandleSubmit = () => {
    dispatch(signUp(email, password));
  };

  return (
    <View style={styles.containerKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.gray}
          placeholder="Ingrese su email"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.gray}
          placeholder="Ingrese su contraseña"
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title={messageAction}
            color={colors.primary}
            onPress={onHandleSubmit}
            disabled={!email || !password}
          />
          <TouchableOpacity style={styles.promptButton}>
            <Text
              style={styles.promptMessage}
              onPress={() => setIsLogin(!isLogin)}
            >
              {message}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Auth;
