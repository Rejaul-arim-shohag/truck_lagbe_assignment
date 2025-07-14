import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <Image
        source={require('../assets/images/avatar.png')} // Replace with your actual avatar image
        style={styles.avatar}
      />

      <Text style={styles.name}>Sophia Clark</Text>
      <Text style={styles.email}>sophia.clark@email.com</Text>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    color: '#171212',
    marginBottom: 40,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#171212',
  },
  email: {
    fontSize: 16,
    color: '#876363',
    marginBottom: 50,
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#9B0F0F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
