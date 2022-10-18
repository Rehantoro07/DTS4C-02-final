import axios from 'axios';
import { useEffect } from 'react';
import Header from './components/Header/Header';

function App() {

  useEffect(() => {
    axios.get('https://berita-indo-api.vercel.app/v1/bbc-news')
      .then((res) => console.log(res))
  }, [])

  return (
    <>
      <Header />
    </>
  );
}

export default App;
