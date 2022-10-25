import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import { GlobalProvider } from './context/GlobalContext';
import DetailNews from './pages/DetailNews';
import Main from './pages/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <div className="container">
            <Header />
            <Routes>
              <Route path='/detail/:id' element={<DetailNews />} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/register' element={<Register />} />
              <Route path='/' element={<Main />} />
            </Routes>
            <Footer />
          </div>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
