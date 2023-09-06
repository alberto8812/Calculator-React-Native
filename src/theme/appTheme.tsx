import { StyleSheet } from 'react-native';
/**
 * definimos los estilos globales
 */
export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer:{
        flex: 1,
        paddingHorizontal:10,
        justifyContent: 'flex-end',
    },
    resultado:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right',

    },
    litleresult:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    boton:{
        height: 80,
        width: 80,
        backgroundColor: '#9b9b9b',
        borderRadius:100,
        justifyContent: 'center',


    },
    botonTexto:{
        textAlign: 'center',
        paddingTop:2,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
});