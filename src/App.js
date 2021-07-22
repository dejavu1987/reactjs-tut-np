import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter name="Anna" />
        <Counter name="Robert" />
      </header>
    </div>
  );
}

export default App;
