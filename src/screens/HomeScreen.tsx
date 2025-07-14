import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import BottomSheet, { RBSheetRef } from '../components/BottomSheet';
import SettingIcon from '../assets/icons/SettingIcon';
import ArrowRight from '../assets/icons/AroowRight';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { useTrip } from '../context/TripContext';

const LOCATIONS = ['Dhaka', 'Chittagong', 'Sylhet', 'Khulna', 'Rajshahi'];

const HomeScreen = () => {
  const [loadLocation, setLoadLocation] = useState('');
  const [unloadLocation, setUnloadLocation] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeInput, setActiveInput] = useState<'load' | 'unload' | null>(
    null,
  );
  const { addTrip } = useTrip();

  const bottomSheetRef = useRef<RBSheetRef>(null);

  const handleSelectLocation = (location: string) => {
    if (activeInput === 'load') {
      setLoadLocation(location);
    } else if (activeInput === 'unload') {
      setUnloadLocation(location);
    }
    bottomSheetRef.current?.close();
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const openLocationPicker = (type: 'load' | 'unload') => {
    setActiveInput(type);
    bottomSheetRef.current?.open();
  };

  const onChange = (event: any, selected: Date | undefined) => {
    setShowPicker(Platform.OS === 'ios'); // On Android, auto close
    if (selected) {
      setSelectedDate(selected);
      const formatted =
        selected.toLocaleDateString() +
        ' · ' +
        selected.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setDateTime(formatted);
    }
  };

  const handleCreateTrip = () => {
    if (!loadLocation || !unloadLocation || !dateTime) {
      Alert.alert(
        'Incomplete Trip Info',
        'Please select Load Location, Unload Location, and Date & Time before creating a trip.',
        [{ text: 'OK' }],
        { cancelable: true },
      );
      return;
    }

    addTrip({ loadLocation, unloadLocation, dateTime });
    setLoadLocation('');
    setUnloadLocation('');
    setDateTime('');
    Alert.alert(
      'Success!',
      'Your trip has been created successfully.',
      [{ text: 'OK' }],
      { cancelable: true },
    );

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trip Planner</Text>
        <View style={styles.iconWrapper}>
          <SettingIcon width={24} height={24} color="#171212" />
        </View>
      </View>

      <Text style={styles.subtitle}>Design Your Trip</Text>

      <TouchableOpacity onPress={() => openLocationPicker('load')}>
        <TextInput
          style={styles.input}
          placeholder="Load Location"
          placeholderTextColor="#A18B8B"
          value={loadLocation}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openLocationPicker('unload')}>
        <TextInput
          style={styles.input}
          placeholder="Unload Location"
          placeholderTextColor="#A18B8B"
          value={unloadLocation}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          style={styles.input}
          placeholder="Date & Time"
          placeholderTextColor="#A18B8B"
          value={dateTime}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCreateTrip}>
        <Text style={styles.buttonText}>Create Trip</Text>
      </TouchableOpacity>

      {/* Reusable Bottom Sheet */}
      <BottomSheet ref={bottomSheetRef}>
        <Text style={styles.sheetTitle}>
          Select {activeInput === 'load' ? 'Load' : 'Unload'} Location
        </Text>
        {LOCATIONS.map(loc => (
          <TouchableOpacity
            key={loc}
            style={styles.locationItem}
            onPress={() => handleSelectLocation(loc)}
          >
            <Text style={styles.locationText}>{loc}</Text>
            <ArrowRight size={24} color="#171212" />
            {/* <Text style={styles.arrow}>→</Text> */}
          </TouchableOpacity>
        ))}
      </BottomSheet>

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
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

  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
  },
  locationText: {
    fontSize: 16,
    color: '#171212',
  },
  arrow: {
    fontSize: 16,
    color: '#171212',
  },
});
