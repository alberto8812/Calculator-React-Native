/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { BottonCal } from '../components/BottonCal';
import { useRef, useState } from 'react';

enum Operadores{
  sumar,restar,multiplicar,dividir
}

const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('100');
 const [numeroAnterior, setNumeroAnterior] = useState('0');
const ultimaOperacion = useRef<Operadores>();


  const limpiar = ()=>{
    setNumero('0');
    setNumeroAnterior('0');
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

const btnDividir = ()=>{
  cambiarNumeroPorAnterior();
  ultimaOperacion.current = Operadores.dividir;
};

const btnMiltiplicar = ()=>{
  cambiarNumeroPorAnterior();
  ultimaOperacion.current = Operadores.multiplicar;
};

const btnSumar = ()=>{
  cambiarNumeroPorAnterior();
  ultimaOperacion.current = Operadores.sumar;
};

const btnRestar = ()=>{
  cambiarNumeroPorAnterior();
  ultimaOperacion.current = Operadores.restar;
};

const calcular = ()=>{
  const num1 = Number(numero);
  const num2 = Number(numeroAnterior);
  let   total = 0;
  if (Number(numero) === 0 && ultimaOperacion.current === Operadores.dividir || isNaN(Number(numero))){
    setNumero('no se puede dividir por 0');
    setNumeroAnterior('0');
    return;
  }
  switch (ultimaOperacion.current) {
    case Operadores.sumar:
      total = num1 + num2;
      setNumero(`${total}`);
      break;
      case Operadores.restar:
        total = num2 - num1;
        setNumero(`${total}`);
      break;
      case Operadores.dividir:
        total = num2 / num1;
        setNumero(`${total}`);
      break;
      case Operadores.multiplicar:
        total = num1 * num2;
        setNumero(`${total}`);
      break;
    default:
      return;
  }
  setNumeroAnterior('0');
};
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
