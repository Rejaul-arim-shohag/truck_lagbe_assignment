/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/navigation';
import { AuthProvider } from './src/Auth/AuthContext';
import { TripProvider } from './src/context/TripContext';

function App() {
  return (
    <TripProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </AuthProvider>
    </TripProvider>
  );
}

export default App;
