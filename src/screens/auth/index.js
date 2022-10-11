import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/themes/colors";

const Auth = ({ navigation }) => {
  const title = "Registro";
  const message = "¿Ya tienes cuenta?";
  const messageAction = "Registrarse";
  const messageTarget = "Ingresar ahora";

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.gray}
          placeholder="Ingrese su email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => console.log("Text: ", text)}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.gray}
          placeholder="Ingrese su contraseña"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => console.log("Text: ", text)}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title={messageAction}
            color={colors.primary}
            onPress={() => console.warn("Presionado")}
          />
          <TouchableOpacity
            style={styles.promptButton}
            onPress={() => console.warn("Presionado")}
          >
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
