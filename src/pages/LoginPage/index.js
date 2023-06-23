import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native"
import styles from "./styles";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";


export default function LoginPage(){

    const { signIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
           <Image source={require('../../assets/imgs/logo.png')} style={styles.logo}/>
           <TextInput placeholder="E-mail" style={styles.input}/>
           <TextInput placeholder="Senha" style={styles.input}/>
           <TouchableOpacity style={styles.btn} onPress={() => signIn()}>
                <Text>Login</Text>
           </TouchableOpacity>
           <View style={styles.links}>
                <Link to={{screen:"RegisterPage"}} style={styles.teste}>Registre-se</Link>
                <Link to={{screen:"ForgetPage"}} style={styles.teste}>Esqueceu a senha?</Link>
           </View>
        </View>
    );
}