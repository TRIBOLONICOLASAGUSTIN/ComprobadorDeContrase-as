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
    {id: 'len',}
  ]
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
