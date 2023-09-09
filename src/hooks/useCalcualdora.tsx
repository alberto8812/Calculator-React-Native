/* eslint-disable eqeqeq */
      //no acept double poutn

import { useRef, useState } from 'react';
/**
 * hook has constrol all operation calculator
 */
enum Operadores{
    sumar,restar,multiplicar,dividir
  }

export const useCalcualdora = () => {
    const [numero, setNumero] = useState('0');
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
  return {
    calcular,btnRestar,btnSumar,btnMiltiplicar,btnDividir,
    btnDelete,positivoNegativo,ArmarNumero,limpiar,numeroAnterior,numero,

  };
};
