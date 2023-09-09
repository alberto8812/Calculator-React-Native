/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { BottonCal } from '../components/BottonCal';
import { useCalcualdora } from '../hooks/useCalcualdora';


const CalculadoraScreen = () => {
 const {    calcular,btnRestar,btnSumar,btnMiltiplicar,btnDividir,
            btnDelete,positivoNegativo,ArmarNumero,limpiar,numeroAnterior,numero}=useCalcualdora()
  return (
    <View style={styles.calculadoraContainer}>
      {(numeroAnterior !== '0') &&  <Text style={styles.resultado}>{numeroAnterior}</Text>}
      <Text
      style={styles.litleresult}
      numberOfLines={1}
      adjustsFontSizeToFit
      >{numero}</Text>

      {/*filas de botones */}
      <View style={styles.fila}>
        <BottonCal text="C" color="#9b9b9b" accion={limpiar}/>
        <BottonCal  text="+/-" color="#9b9b9b" accion={positivoNegativo}/>
        <BottonCal  text="del" color="#FF6427" accion={btnDelete}/>
        <BottonCal  text="/" color="#FF6427" accion={btnDividir}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="7"  accion={ArmarNumero}/>
        <BottonCal  text="8" accion={ArmarNumero}/>
        <BottonCal  text="9" accion={ArmarNumero}/>
        <BottonCal  text="X" color="#FF6427" accion={btnMiltiplicar}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="4" accion={ArmarNumero}/>
        <BottonCal  text="5" accion={ArmarNumero}/>
        <BottonCal  text="6" accion={ArmarNumero}/>
        <BottonCal  text="-" color="#FF6427" accion={btnRestar}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="1" accion={ArmarNumero}/>
        <BottonCal  text="2" accion={ArmarNumero}/>
        <BottonCal  text="3" accion={ArmarNumero}/>
        <BottonCal  text="+" color="#FF6427" accion={btnSumar}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="0"  ancho accion={ArmarNumero} />
        <BottonCal  text="." accion={ArmarNumero}/>

        <BottonCal  text="=" color="#FF6427" accion={calcular}/>
      </View>

    </View>
  );
};

export default CalculadoraScreen;
