/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { BottonCal } from '../components/BottonCal';

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultado}>15.000.000</Text>
      <Text style={styles.litleresult}>15.000.000</Text>

      {/*filas de botones */}
      <View style={styles.fila}>
        <BottonCal text="C" color="#9b9b9b"/>
        <BottonCal  text="+/-" color="#9b9b9b"/>
        <BottonCal  text="del" color="#FF6427"/>
        <BottonCal  text="/" color="#FF6427"/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="7" />
        <BottonCal  text="8" />
        <BottonCal  text="9" />
        <BottonCal  text="X" color="#FF6427"/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="4" />
        <BottonCal  text="5" />
        <BottonCal  text="6" />
        <BottonCal  text="-" color="#FF6427"/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="1" />
        <BottonCal  text="2" />
        <BottonCal  text="3" />
        <BottonCal  text="+" color="#FF6427"/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="0"  ancho/>
        <BottonCal  text="." />

        <BottonCal  text="=" color="#FF6427"/>
      </View>

    </View>
  );
};

export default CalculadoraScreen;
