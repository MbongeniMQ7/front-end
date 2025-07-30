import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/AuthScreenStyles';
import animationData from '../assets/Female Character Waving.json';

const screenWidth = Dimensions.get('window').width;

export default function AuthScreen({ onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isLogin ? 0 : -screenWidth,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [isLogin]);

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    onSuccess();
  };

  const handleGoogleAuth = () => {
    Alert.alert('Google Auth', 'Google Login/Signup triggered (UI only)');
    onSuccess();
  };

  return (
    <LinearGradient
      colors={['#2879f2', '#a155f9']}
      style={styles.gradientContainer}
    >
      <LottieView source={animationData} autoPlay loop style={styles.lottie} />

      <View style={styles.formContainer}>
        <Animated.View
          style={[
            styles.formSlider,
            {
              width: screenWidth * 2,
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          {/* Login Form */}
          <View style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Sign-Up Form */}
          <View style={styles.form}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleAuth}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
