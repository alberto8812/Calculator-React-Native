/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
/**
 * botton of calculator component
 */

interface props{
    text: string,
    color?:string,
}

export const BottonCal = ({text,color=''}:props) => {
  return (
    <View>
        <View style={[styles.boton,(color === 'Grey') ? styles.botomGrey : styles.botomOrange]}>
          <Text style={styles.botonTexto}>{text}</Text>
        </View>
    </View>
  );
};
