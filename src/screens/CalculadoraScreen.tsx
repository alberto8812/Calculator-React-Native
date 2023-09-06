/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { BottonCal } from '../components/BottonCal';

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultado}>15.000.000</Text>
      <Text style={styles.litleresult}>15.000.000</Text>

      <View style={styles.fila}>
        <BottonCal text="C" color="Grey"/>
        <BottonCal  text="+/-" color="Grey"/>
        <BottonCal  text="del" color="Orange"/>
        <BottonCal  text="/" color="Orange"/>
      </View>

    </View>
  );
};

export default CalculadoraScreen;
