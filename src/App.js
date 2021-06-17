import logo from './logo.svg';
import './App.css';

function App() {
  const title  =  'React native';
  const msg = 'We are ready to learn';
  const like = 50;
  const msg2 = 'like avobe 50'
  var fb = "https://facebook.com";
  return (
    <div className="App">
      <h1>{title}</h1>
      <h3>{msg}</h3>
      <p>{Math.random()*100}</p>
      <p>{[1,' ',2,' ',3,' ',4]}</p>
      <a href={fb}>facebook</a>
    </div>
  );
}

export default App;
