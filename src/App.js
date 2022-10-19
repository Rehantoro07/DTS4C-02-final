import Main from './pages/Main';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailNews from './pages/DetailNews';
import { GlobalProvider } from './context/GlobalContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/detail' element={<DetailNews />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
