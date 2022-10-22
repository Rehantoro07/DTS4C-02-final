import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate()
  const [link, setLink] = useState([]);
  const [search, setSearch] = useState('')

  const handleDetail = (e) => {
    let id = parseInt(e.target.value);
    axios
      .get(`https://jakpost.vercel.app/api/category/indonesia/jakarta/${id}`)
      .then((res) => {
        let result = res.data.posts[id].link
        setLink(result)
        navigate(`/detail/${id}`)
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

