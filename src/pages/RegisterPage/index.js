import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native"
import styles from "./styles";


export default function RegisterPage(){
    return(
        <View style={styles.container}>
           <Image source={require('../../assets/imgs/logo.png')} style={styles.logo}/>
           <TextInput placeholder="Username" style={styles.input}/>
           <TextInput placeholder="E-mail" style={styles.input}/>
           <TextInput placeholder="Senha" style={styles.input}/>
           <TouchableOpacity style={styles.btn}>
                <Text>Registrar</Text>
           </TouchableOpacity>
           <View style={styles.links}> 
                <Link to={{screen:"LoginPage"}} style={styles.teste}>Voltar</Link>
                <Link to={{screen:"ForgetPage"}} style={styles.teste}>Esqueceu a senha?</Link>
           </View>
        </View>
    );
}