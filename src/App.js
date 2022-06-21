import './App.css';
import React, {useState, useRef} from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
  let [data, setData] = useState([]);
  let [message, setMessage] = useState('Search for Music!');
  let searchInput = useRef('');

  const handleSearch = (e, term) => {
    e.preventDefault()
    fetch(`https://itunes.apple.com/search?term=${term}`)
    .then(response => response.json())
    .then(resData => {
      if (resData.results.length > 0) {
        return setData(resData.results)
      } else {
        return setMessage('Not Found.')
      }
    })
    .catch(err => setMessage('An Error has Occurred!'))
  }
  // // const API_URL = 'https://itunes.apple.com/search?term='

  // //handling submit search
  // const handleSearch = (e, term) => {
  //   e.preventDefault()
  //   const fetchData = async () => {
  //     document.title = `${term} Music`
  //     const response =  await fetch(API_URL + term)
  //     const resData = await response.json()
  //     // console.log(resData)
  //     if (resData.results.length > 0) {
  //       setData(resData.results)
  //     }
  //     else{
  //       setMessage('Not Found')
  //     }
  //   }
  //   fetchData()
  // }

  return (
    <div className="App">
      <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App


