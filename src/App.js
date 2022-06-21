// import React, {useState, useEffect, useRef, Fragment} from 'react'
// import {BrowserRouter as Router, Route, Navigate} from 'react-router-dom'
// import {DataContext} from './context/DataContext'
// // import {SearchContext} from './context/SearchContext'
// import AlbumView from './components/AlbumView'
// import ArtistView from './components/ArtistView'
import './App.css';
import {useState, useEffect, Suspense} from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'
import Spinner from './components/Spinner'



function App() {
  let [searchTerm, setSearchTerm] = useState("")
  let [message, setMessage] = useState('Seacrh for Music')
  let [data, setData] = useState(null)
 
  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
  }
  }, [searchTerm])
   
    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearchTerm(term)
    }
    const renderGallery = () => {
      if(data){
        return (
          <Suspense fallback={<Spinner />}>
            <Gallery data={data} />
          </Suspense>
        )
      }
    }
  
    return (
      <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        {renderGallery()}
      </div>
    );
  }
  
  export default App



  // let searchInput = useRef('');

//   const API_URL = 'https://itunes.apple.com/search?term='
 
//   function toTitleCase(str) {
//     return str.replace(
//       /\w\S*/g,
//       function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       }
//     );
//   }

//   useEffect(() => {
//     if (searchTerm) {
//       document.title=`${searchTerm} Music`
//       const fetchData = async () => {
//         const response = await fetch(API_URL + searchTerm)
//         const resData = await response.json()
//         if(resData.results.length > 0) {
//           setData(resData.results)
//         } else {
//           setMessage('Not Found')
//         }
//       }
//       fetchData()
//   }
//   }, [searchTerm, API_URL])

//   const handleSearch = (e, term) => {
//     e.preventDefault()
//     term = toTitleCase(term)
//     setSearchTerm(term)
//     return (<Navigate to="/"/>)
//   }

//   return (
//     <div className="App">
//       {message}
//       <Router>
//   <Route exact path="/">
//           <SearchBar handleSearch={handleSearch} />
//           <Gallery data={data} />
//         </Route>
//         <Route path="/album/:id">
//           <AlbumView term={searchTerm} />
//         </Route>
//         <Route path="/artist/:id">
//           <ArtistView term={searchTerm} />
//         </Route>
//       </Router>
//     </div>
//   );
// }

// export default App

//   //handling submit search
//   const handleSearch = (e, term) => {
//     e.preventDefault()
//     const fetchData = async () => {
//       document.title = `${term} Music`
//       const response =  await fetch(API_URL + term)
//       const resData = await response.json()
//       // console.log(resData)
//       if (resData.results.length > 0) {
//         setData(resData.results)
//       }
//       else{
//         setMessage('Not Found')
//       }
//     }
//     fetchData()
//   }
// return (
//   <div className="App">
//     <Router>
//       {/* <Routes>
//           <Route path="/" element= {
//             <Fragment>
//                 <SearchContext.Provider value={{
//                     term: searchInput,
//                     handleSearch: handleSearch,
//                   }}>
//                     <SearchBar/>
//                 </SearchContext.Provider>
//                 {message}
//                 <DataContext.Provider value={data}>
//                     <Gallery/>
//                 </DataContext.Provider>
//             </Fragment>
//           }/>
//           <Route path="/album/:id" element={<AlbumView/>}/>
//           <Route path="/artist/:id" element={<ArtistView/>}/>
//       </Routes>
//     </Router>
    
//   </div>
// )
// } */}
 