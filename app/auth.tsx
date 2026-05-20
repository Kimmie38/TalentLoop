import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  TextInput, ImageBackground, Dimensions, ScrollView,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

type Tab = 'login' | 'register';

export default function Auth() {
  const [tab, setTab] = useState<Tab>('register');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Dark background top section */}
      <ImageBackground
        source={require('../assets/images/background-image.png')}
        style={styles.background}
      >
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>
            {tab === 'register' ? 'Create an account' : 'Login'}
          </Text>
          <Text style={styles.headerSubtitle}>
            {tab === 'register'
              ? 'Set up your account to continue.'
              : 'Sign in now to access your account.'}
          </Text>
        </View>
      </ImageBackground>

      {/* White card */}
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Toggle */}
          <View style={styles.toggle}>
            <TouchableOpacity
              style={[styles.toggleBtn, tab === 'login' && styles.toggleBtnActive]}
              onPress={() => setTab('login')}
            >
              <Text style={[styles.toggleText, tab === 'login' && styles.toggleTextActive]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleBtn, tab === 'register' && styles.toggleBtnActive]}
              onPress={() => setTab('register')}
            >
              <Text style={[styles.toggleText, tab === 'register' && styles.toggleTextActive]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {/* Register Form */}
          {tab === 'register' && (
            <View style={styles.form}>
              {/* Full Name */}
              <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={18} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full name"
                  placeholderTextColor="#999"
                />
              </View>

              {/* Phone */}
              <View style={styles.inputWrapper}>
                <Ionicons name="call-outline" size={18} color="#999" style={styles.inputIcon} />
                <Text style={styles.dialCode}>+234</Text>
                <View style={styles.divider} />
                <TextInput
                  style={styles.input}
                  placeholder="Phone number"
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                />
              </View>

              {/* Email */}
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={18} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email@gmail.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password */}
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={18} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={18}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>

              {/* Confirm Password */}
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={18} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#999"
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Ionicons
                    name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={18}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Login Form */}
          {tab === 'login' && (
            <View style={styles.form}>
              {/* Email */}
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={18} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email@gmail.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password */}
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={18} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={18}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>

              {/* Forgot Password */}
              <TouchableOpacity style={styles.forgotWrapper}>
                <Text style={styles.forgotText}>Forgotten Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}

        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: height * 0.35,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerText: {},
  headerTitle: {
    fontSize: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#fff',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
    color: '#cdd8e3',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -24,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 40,
  },
  toggle: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    padding: 4,
    marginBottom: 28,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 26,
    alignItems: 'center',
  },
  toggleBtnActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    color: '#999',
  },
  toggleTextActive: {
    color: '#111',
  },
  form: {
    gap: 14,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 52,
    backgroundColor: '#fff',
  },
  inputIcon: {
    marginRight: 10,
  },
  dialCode: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#111',
  },
  forgotWrapper: {
    alignItems: 'flex-end',
  },
  forgotText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 13,
    color: '#1a3c5e',
  },
  submitButton: {
    backgroundColor: '#1a3c5e',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  submitText: {
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
});