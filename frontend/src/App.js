import logo from './logo.svg';
import './App.css';

import EntradaContrasena from "./Componentes/EntradaContrasena";
import MedidorFortaleza from "./Componentes/MedidorFortaleza";
import Requisitos from "./Componentes/Requisitos";
import Panel from "./Componentes/Panel";
import PanelCopia from "./Componentes/PanelCopia";
function App(){
  const[contrasena,setContrasena]=useState("");
  const[mostar,setMostrar]=useState(false);

   const error = contrasena.trim() === "" ? "La contrasena no puede estar vacia." : "";

  const requisitos= useMemo(()=>{
    const reglas=[
      { id:"r1", texto: "Minimo 8 caracteres",ok: contrasena.length >= 8},
      { id:"r2", texto: "Incluye una mayuscula", ok: /[A-Z]/.test(contrasena)},
      { id: "r3", texto: "Incluye un numero", ok: /[0-9]/.test(contrasena)},
      { id: "r4", texto: "Incluye una minuscula", ok: /[a-z]/.test(contrasena)},
      { id: "r5", texto: "Incluye un caracter especial", ok: /[!@#$%^&*(),.?":{}|<>]/.test(contrasena)},
    ];
    const puntos = reglas.filter((r)=> r.ok).length;

    let etiquetas ="Poco segura";
    let nuvel = "Debil";

    if(puntos >=3 && puntos <=4){
      etiquetas = "Segura";
      nivel = "Media";
    } 
    if(puntos === 5){
      etiquetas = "Muy segura";
      nivel = "Fuerte";
    }
    return{reglas, etiquetas, nivel};
  }, [contrasena]);
  return(
    <main className="App">
      <h1>Comprobador de contraseñas</h1>
      <EntradaContrasena
      contrasena={contrasena}
      mostrar={mostrar}
      onCambiarContrasena={setContrasena}
      onToggleMostrar={() => setMostrar((v)=>!v)}
      />
      <MedidorFortaleza etiqueta={resultado.etiqueta} nivel={resultado.nivel} />
      <Requisitos lista={resultado.reglas}/>
    </main>
  )
};
export default App;
