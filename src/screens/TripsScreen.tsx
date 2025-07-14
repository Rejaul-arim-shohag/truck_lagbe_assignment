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
import { useTrip } from '../context/TripContext';

const TripsScreen = () => {
  const { trips } = useTrip();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Trips</Text>

      {trips.length === 0 ? (
        <Text style={styles.noTrips}>No trips found. Create a trip first!</Text>
      ) : (
        <FlatList
          data={trips}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tripItem}>
              <View style={styles.tripInfo}>
                <View style={styles.routeWrapper}>
                  <Text style={styles.route}>{item.loadLocation}</Text>
                  <Text style={styles.arrow}>→</Text>
                  <Text style={styles.route}>{item.unloadLocation}</Text>
                </View>

                <Text style={styles.date}>{item.dateTime}</Text>
              </View>

              <Image
                source={require('../assets/images/pickup1.png')}
                style={styles.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default TripsScreen;

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
  noTrips: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});

