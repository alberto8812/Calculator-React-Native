/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultado}>15.000.000</Text>
      <Text style={styles.litleresult}>15.000.000</Text>
      <View>
        <View style={styles.boton}>
          <Text style={styles.botonTexto}>1</Text>
        </View>
      </View>

    </View>
  );
};

export default CalculadoraScreen;
