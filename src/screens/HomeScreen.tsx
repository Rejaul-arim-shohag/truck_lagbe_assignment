import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import SettingIcon from '../assets/icons/SettingIcon';

const HomeScreen = () => {
  const [loadLocation, setLoadLocation] = useState('');
  const [unloadLocation, setUnloadLocation] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleCreateTrip = () => {
    console.log('Creating trip:', { loadLocation, unloadLocation, dateTime });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Trip Planner</Text>
        <SettingIcon width={24} height={24} color="#171212" />
      </View> */}
      <View style={styles.header}>
        <Text style={styles.title}>Trip Planner</Text>
        <View style={styles.iconWrapper}>
          <SettingIcon width={24} height={24} color="#171212" />
        </View>
      </View>

      <Text style={styles.subtitle}>Design Your Trip</Text>

      <TextInput
        style={styles.input}
        placeholder="Load Location"
        placeholderTextColor="#A18B8B"
        value={loadLocation}
        onChangeText={setLoadLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Unload Location"
        placeholderTextColor="#A18B8B"
        value={unloadLocation}
        onChangeText={setUnloadLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Date & Time"
        placeholderTextColor="#A18B8B"
        value={dateTime}
        onChangeText={setDateTime}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateTrip}>
        <Text style={styles.buttonText}>Create Trip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: 30,
  },
  iconWrapper: {
    position: 'absolute',
    right: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#171212',
  },
  icon: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    color: '#1A1A1A',
  },
  input: {
    width: '100%',
    backgroundColor: '#F5F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#9B0F0F',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
