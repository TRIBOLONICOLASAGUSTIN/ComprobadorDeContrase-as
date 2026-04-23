import { useMemo, useState } from 'react';
import './App.css';

import EntradaContrasena from "./Componentes/EntradaContrasena";
import MedidorFortaleza from "./Componentes/MedidorFortaleza";
import Requisitos from "./Componentes/Requisitos";

function App(){
  const[contrasena,setContrasena]=useState("");
  const[mostrar,setMostrar]=useState(false);

   const error = contrasena.trim() === "" ? "La contrasena no puede estar vacia." : "";

  const resultado = useMemo(()=>{
    const reglas=[
      { id:"r1", texto: "Minimo 8 caracteres",ok: contrasena.length >= 8},
      { id:"r2", texto: "Incluye una mayuscula", ok: /[A-Z]/.test(contrasena)},
      { id: "r3", texto: "Incluye un numero", ok: /[0-9]/.test(contrasena)},
      { id: "r4", texto: "Incluye una minuscula", ok: /[a-z]/.test(contrasena)},
      { id: "r5", texto: "Incluye un caracter especial", ok: /[!@#$%^&*(),.?":{}|<>]/.test(contrasena)},
    ];
    const puntos = reglas.filter((r)=> r.ok).length;

    let etiqueta ="Poco segura";
    let nivel = "debil";

    if(puntos >=3 && puntos <=4){
      etiqueta = "Segura";
      nivel = "media";
    } 
    if(puntos === 5){
      etiqueta = "Muy segura";
      nivel = "fuerte";
    }
    return{reglas, etiqueta, nivel};
  }, [contrasena]);

  return(
    <main className="app">
      <h1>Comprobador de contraseñas</h1>
      <EntradaContrasena
      contrasena={contrasena}
      mostrar={mostrar}
      onCambiarContrasena={setContrasena}
      onToggleMostrar={() => setMostrar((v)=>!v)}
      error={error}
      />
      <MedidorFortaleza etiqueta={resultado.etiqueta} nivel={resultado.nivel} />
      <Requisitos lista={resultado.reglas}/>
    </main>
  )
};
export default App;
