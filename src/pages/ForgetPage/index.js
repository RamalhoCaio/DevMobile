import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native"
import styles from "./styles";


export default function ForgetPage(){
    return(
        <View style={styles.container}>
           <Image source={require('../../assets/imgs/logo.png')} style={styles.logo}/>
           <TextInput placeholder="Username" style={styles.input}/>
           <TextInput placeholder="E-mail" style={styles.input}/>
           <TouchableOpacity style={styles.btn}>
                <Text>Recuperar Senha</Text>
           </TouchableOpacity>
           <View style={styles.links}> 
                <Link to={{screen:"LoginPage"}} style={styles.teste}>Voltar ao Login</Link>
                <Link to={{screen:"RegisterPage"}} style={styles.teste}>Registre-se</Link>
           </View>
        </View>
    );
}