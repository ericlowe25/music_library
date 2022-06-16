import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import {DataContext} from './context/DataContext'
import {SearchContext} from './context/SearchContext'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'


function App() {
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);
  let searchInput = useRef('');

  const API_URL = 'https://itunes.apple.com/search?term='

  //handling submit search
  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response =  await fetch(API_URL + term)
      const resData = await response.json()
      // console.log(resData)
      if (resData.results.length > 0) {
        setData(resData.results)
      }
      else{
        setMessage('Not Found')
      }
    }
    fetchData()
  }
return (
  <div className="App">
    <Router>
      <Routes>
          <Route path="/" element= {
            <Fragment>
                <SearchContext.Provider value={{
                    term: searchInput,
                    handleSearch: handleSearch,
                  }}>
                    <SearchBar/>
                </SearchContext.Provider>
                {message}
                <DataContext.Provider value={data}>
                    <Gallery/>
                </DataContext.Provider>
            </Fragment>
          }/>
          <Route path="/album/:id" element={<AlbumView/>}/>
          <Route path="/artist/:id" element={<ArtistView/>}/>
      </Routes>
    </Router>
    
  </div>
)
}

export default App


