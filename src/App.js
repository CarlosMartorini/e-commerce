import './App.css';
import Menu from './components/Menu';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <main className='App-main'>
        <Routes/>
      </main>
    </div>
  );
}

export default App;
