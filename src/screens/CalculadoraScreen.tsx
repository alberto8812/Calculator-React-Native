/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { BottonCal } from '../components/BottonCal';
import { useState } from 'react';

const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('100');
 const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = ()=>{
    setNumero('0');
  };
 /**
  * define possitive or negative
  */
  const ArmarNumero = (numeroTexto:string)=>{
    //no acept double poutn
    if (numero.includes('.') && numeroTexto == '.' ) {return;}

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //decimal point
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        //evalute is other zero
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')){
        //if the number is diferent to zero
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')){
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
        if (numero.includes('-')){
          setNumero(numero.replace('-',''));
        } else {
          setNumero('-' + numero);
        }
    };

const btnDelete = ()=>{
  if (numero.length === 1){
    setNumero('0');
  } else if (numero[0] == '-' && numero.length === 2){
    setNumero('0');
  } else {
  setNumero(numero.substring(0,numero.length - 1));
  }
};

const cambiarNumeroPorAnterior = ()=>{
  if (numero.endsWith('.')) {
    setNumeroAnterior(numero.slice(0,-1));
  } else {
    setNumeroAnterior(numero);
    setNumero('0');
  }



};
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultado}>{numeroAnterior}</Text>
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
        <BottonCal  text="/" color="#FF6427" accion={cambiarNumeroPorAnterior}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="7"  accion={ArmarNumero}/>
        <BottonCal  text="8" accion={ArmarNumero}/>
        <BottonCal  text="9" accion={ArmarNumero}/>
        <BottonCal  text="X" color="#FF6427" accion={cambiarNumeroPorAnterior}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="4" accion={ArmarNumero}/>
        <BottonCal  text="5" accion={ArmarNumero}/>
        <BottonCal  text="6" accion={ArmarNumero}/>
        <BottonCal  text="-" color="#FF6427" accion={cambiarNumeroPorAnterior}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="1" accion={ArmarNumero}/>
        <BottonCal  text="2" accion={ArmarNumero}/>
        <BottonCal  text="3" accion={ArmarNumero}/>
        <BottonCal  text="+" color="#FF6427" accion={cambiarNumeroPorAnterior}/>
      </View>
      <View style={styles.fila}>
        <BottonCal text="0"  ancho accion={ArmarNumero} />
        <BottonCal  text="." accion={ArmarNumero}/>

        <BottonCal  text="=" color="#FF6427" accion={limpiar}/>
      </View>

    </View>
  );
};

export default CalculadoraScreen;
