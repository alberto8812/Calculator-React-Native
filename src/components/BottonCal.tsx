/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
/**
 * botton of calculator component
 */

interface props{
    text: string,
    color?:string,
    ancho?:boolean,
    accion:(numeroTexto:string)=>void,
}

export const BottonCal = ({text,color = '#2d2d2d',ancho = false,accion}:props) => {
  return (
    <TouchableOpacity
    onPress={()=>accion(text)}
    >
      <View>
          <View style={{
            ...styles.boton,
            backgroundColor: color,
            width:ancho ? 180 : 80,
          }}>
            <Text style={{...styles.botonTexto, color:(color == '#9b9b9b' ) ? 'black' : 'white' }}>{text}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};
