import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/themes/colors";
import { signIn, signUp } from "../../store/actions/index";
import { Input } from "../../components";
import { UPDATED_FORM, onInputChange, onFocusOut } from "../../constants/utils/forms";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  //Estado global con todas las validaciones del formulario.
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const title = isLogin ? "Login" : "Registro";
  const message = isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?";
  const messageAction = isLogin ? "Ingresar" : "Registrarse";

  const onHandleSubmit = () => {
    dispatch(isLogin ? signIn(formState.email.value, formState.password.value) : signUp(formState.email.value, formState.password.value));
  };

  const onHandleChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState)
  };

  return (
    <View style={styles.containerKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          label="Email"
          style={styles.input}
          placeholderTextColor={colors.gray}
          placeholder="Ingrese su email"
          value={formState.email.value}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text, "email")}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
        />
        <Input
          label="Password"
          style={styles.input}
          placeholderTextColor={colors.gray}
          placeholder="Ingrese su contraseña"
          value={formState.password.value}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text, "password")}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title={messageAction}
            color={colors.primary}
            onPress={onHandleSubmit}
            disabled={!formState.isFormValid}
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
