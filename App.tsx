/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/navigation';
import { AuthProvider } from './src/Auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
