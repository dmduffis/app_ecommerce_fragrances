import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails, Home, LoginPage, Orders, SignUp, Favorites, Products } from './screens';
import { CartProvider } from './context/CartContext';

const Stack = createNativeStackNavigator();

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (

    <CartProvider>
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen 
        name="Bottom Navigation"
        component={BottomTabNavigation}
        options={{headerShown:false}}
        />


      <Stack.Screen 
        name="Products"
        component={Products}
        options={{headerShown:false}}
        />

      <Stack.Screen 
        name="Cart"
        component={Cart}
        options={{headerShown:false}}
        />

      <Stack.Screen 
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown:false}}
        />
      
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{headerShown:false}}
        />

      <Stack.Screen 
        name="Login"
        component={LoginPage}
        options={{headerShown:false}}
        />

      <Stack.Screen 
        name="Orders"
        component={Orders}
        options={{headerShown:false}}
        />

      <Stack.Screen 
        name="Favorites"
        component={Favorites}
        options={{headerShown:false}}
        />
      
      <Stack.Screen 
        name="SignUp"
        component={SignUp}
        options={{headerShown:false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

