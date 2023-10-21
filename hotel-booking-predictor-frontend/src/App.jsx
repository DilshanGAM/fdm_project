// Removed unused import statement
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import InputPage from './pages/InputPage';
import AboutPage from './pages/About';
import StatisticsPage from './pages/statistics';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/" exact element={<HomePage/>} />
          <Route path="/about/*" element={<AboutPage/>} />
          <Route path="input" element={<InputPage/>}/>
          <Route path="/statistics/*" element={<StatisticsPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
