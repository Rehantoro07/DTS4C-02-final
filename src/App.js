import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Main from './pages/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DetailNews from './pages/DetailNews';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<Register />} />
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
