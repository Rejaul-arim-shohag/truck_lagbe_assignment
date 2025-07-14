import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Stores a value in AsyncStorage for the given key
 * @param key - string key to store the value
 * @param value - string value to store
 */
export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`Saved key "${key}" with value "${value}"`);
  } catch (e) {
    console.error('Error saving to AsyncStorage:', e);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.error('Error getting data:', e);
  }
};
