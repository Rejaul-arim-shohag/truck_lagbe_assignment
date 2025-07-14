import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const trips = [
  {
    id: '1',
    date: 'July 12, 2024 · 10:00 AM',
    image: require('../assets/images/pickup1.png'),
  },
  {
    id: '2',
    date: 'July 12, 2024 · 10:00 AM',
    image: require('../assets/images/pickup2.png'),
  },
  {
    id: '3',
    date: 'July 12, 2024 · 10:00 AM',
    image: require('../assets/images/pickup3.png'),
  },
];

const TripsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Trips</Text>

      <FlatList
        data={trips}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tripItem}>
            <View style={styles.tripInfo}>
              <View style={styles.routeWrapper}>
                <Text style={styles.route}>Load</Text>
                <Text style={styles.arrow}>→</Text>
                <Text style={styles.route}>Unload</Text>
              </View>

              <Text style={styles.date}>{item.date}</Text>
            </View>

            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#171212',
  },
  list: {
    paddingBottom: 20,
  },
  tripInfo: {
    flex: 1,
  },

  routeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  route: {
    fontSize: 14,
    color: '#A18B8B',
  },

  arrow: {
    fontSize: 24,
    color: '#A18B8B',
    marginBottom: 7,
  },
  tripItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  image: {
    width: 130,
    height: 80,
    borderRadius: 8,
    marginLeft: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171212',
  },
});

export default TripsScreen;
