import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },

    logo: {
        height: '100px',
        width: '250px',
        marginBottom: '20px',
    },

    input: {
        border: '1px solid black',
        width: '60%',
        height: '5%',
        padding: '5px',
        marginBottom: '10px',
        backgroundColor: 'gray'
    },

    btn: {
        border: '2px solid black',
        width: '60%',
        backgroundColor: 'green',
        textAlign: 'center',
        padding: '5px',
    },

    links: {
        marginTop: '10px',
        width: '60%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    teste: {
        color: '#2f639e',
    }
})

export default styles;