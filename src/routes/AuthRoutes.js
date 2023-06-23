import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPage from '../pages/ForgetPage';

const Stack = createNativeStackNavigator()

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginPage' component={LoginPage}></Stack.Screen>
            <Stack.Screen name='RegisterPage' component={RegisterPage}></Stack.Screen>
            <Stack.Screen name='ForgetPage' component={ForgetPage}></Stack.Screen>
        </Stack.Navigator>
    );
 }