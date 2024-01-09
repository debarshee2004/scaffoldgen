import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import { ContextProvider } from './CryptoContext';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/coin/:id' Component={Coinpage}/>
      </Routes>
    </div>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
