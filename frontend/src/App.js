import logo from './logo.svg';
import './App.css';

const CHARSETS ={
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

function pickRandom(text){
  return text[Math.floor(Math.random() * text.length)];
}
function shuffle(text){
  const array=text.split('');
  for (let i=array.length-1; i>0; i--){
    const j=Math.floor(Math.random() * (i+1));
    const temp=array[i];
    array[i]=array[j];
    array[j]=temp;

  }
  return array.join('');
}
function buildRequirements(password){
  return[
    {id: 'len',label: 'Minimo 8 caracterers', isValid: password.length >=8},
    {id: 'lower',label:'Minimo una letra miniscula', isValid: /[a-z]/.test(password)},
    {id: 'upper',label:'Minimo una letra mayuscula',isValid: /[A-Z]/.test(password)},
    {id: 'number',label:'Minimo un numero', isValid: /[0-9]/.test(password)},
    {id: 'symbol',label:'Minimo un simbolo', isValid: /[!@#$%^&*()~`\|}{[\]:;?><,./-=]/.test(password)}
  ];
}
function evaluatePassword(password){
  const requirements=buildRequirements(password);
  const score = requirements.filter((item)=> item.isValid).length;
  const total = requirements.length;
  const percent = Math.round((score/total)*100);

  return {requirements,score,total,percent};
}
function getStrength(score){
  if(score<=2){
    return{text: 'Poca segura', level: 'weak'};
  }
  if (score<=4){
    return{text: 'Segura', level: 'medium'};
  }
  return{text: 'Muy segura', level: 'strong'};
}
function PasswordInput({
  password,
  showPassword,
  onPasswordChange,
  onToggleVisibility,
  validationError,
}){
  return(
    <section className="panel">
      <h2> Escribe tu clave </h2>
      <label htmlfor="passwordInput" className="label">
        Contraseña
        </label>
      <div className="input-group">

      </div>
    </section>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
