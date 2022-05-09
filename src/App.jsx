import './styles/style.scss'
import { WeatherApp } from './pages/WeatherApp.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <WeatherApp/>
      </main>
    </div>
  );
}

export default App;
