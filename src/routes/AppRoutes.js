import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../pages/moviesPage';

const Stack = createNativeStackNavigator()

export default function AppRoutes(){
    return(
        <Stack.Navigator>
          <Stack.Screen name='MoviesPage' component={MoviesPage}></Stack.Screen>
        </Stack.Navigator>
    );
} 