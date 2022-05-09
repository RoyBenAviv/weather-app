import './styles/style.scss'
import { WeatherApp } from './pages/WeatherApp.jsx'
import { Header } from './components/Header.jsx'
function App() {
  return (
    <div className="App">
      <Header />
      <WeatherApp />
    </div>
  )
}

export default App
