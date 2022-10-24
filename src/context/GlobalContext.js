import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate()
  const [link, setLink] = useState(null);
  const [search, setSearch] = useState('');

  const handleDetail = (e) => {
    let id = parseInt(e.target.value);
    navigate(`/detail/${id}`)
    axios
      .get(`https://jakpost.vercel.app/api/category/indonesia/jakarta/${id}`)
      .then((res) => {
        localStorage.setItem('detail', res.data.posts[id].link)
        setLink(res.data.posts[id].link)
      })
  }

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value)
  }

  let state = {
    link,
    setLink,
    search,
    setSearch,
  };

  let handleFunction = {
    handleDetail,
    handleSearch,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

