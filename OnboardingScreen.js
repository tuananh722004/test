import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Hình nền */}
      <Image
        source={{ uri: 'https://cdn.glitch.global/658a9390-20c7-4479-b415-fd8017760021/8140%201.png?v=1729074834749' }} // Thay bằng URL hình nền của bạn
        style={styles.backgroundImage}
      />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://cdn.glitch.global/658a9390-20c7-4479-b415-fd8017760021/Group.png?v=1729074043971' }} // Thay bằng URL logo của bạn
          style={styles.logo}
        />
      </View>

      {/* Dòng tiêu đề */}
      <Text style={styles.title}>Welcome to our store</Text>

      {/* Phụ đề */}
      <Text style={styles.subtitle}>
        Get your groceries in as fast as one hour
      </Text>

      {/* Nút bắt đầu */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')} // Điều hướng sang màn hình SignIn
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    position: 'absolute',
    top: '62%', // Điều chỉnh vị trí logo
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50, // Kích thước logo
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#34c759',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
