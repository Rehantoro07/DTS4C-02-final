
// import HotTopic from '../components/HotTopic/HotTopic';
import Posts from '../components/posts/Posts';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function Main() {
  return (
    <>
      {/* <HotTopic /> */}
      <Posts/>
    </>
  );
}

export default Main;