import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get('https://berita-indo-api.vercel.app/v1/bbc-news')
      .then((res) => console.log(res))
  }, [])

  return (
    <>

    </>
  );
}

export default App;
