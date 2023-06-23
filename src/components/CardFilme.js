import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const baseUrl = "https://api.otaviolube.com";


export default function CardFilme({ filme }){
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{ uri : baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Alugar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        margin: 10,
        padding : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius: 15
    },
    image: {
        height : '200px',
        width : '120px',
        resizeMode : 'cover',
        marginBottom: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
        marginBottom: 10
    },
    button: {
        alignItems: 'center',
        height: '15',
        backgroundColor: 'green',
        width: '50%',
        borderRadius: 10,
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 15
    }
})