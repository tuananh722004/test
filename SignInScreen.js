import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for icons

const SignInScreen = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef(null);

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.glitch.global/658a9390-20c7-4479-b415-fd8017760021/6011.png?v=1729076360615",
      }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.wrapper}>
          <Text style={styles.title}>Sign In</Text>

          {/* Phone number input */}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="VN"
            layout="first"
            placeholder="Enter phone number"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
          />

          {/* Login button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Facebook login button */}
          <TouchableOpacity style={styles.fbButton}>
            <FontAwesome name="facebook" size={24} color="white" />
            <Text style={styles.socialButtonText}> Continue with Facebook</Text>
          </TouchableOpacity>

          {/* Google login button */}
          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={24} color="white" />
            <Text style={styles.socialButtonText}> Continue with Google</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)", // Fully transparent overlay
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  fbButton: {
    backgroundColor: "#3b5998",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
  },
  googleButton: {
    backgroundColor: "#db4437",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
  },
  socialButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default SignInScreen;
