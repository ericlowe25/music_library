import GalleryItem from './GalleryItem';
import {useContext, useState} from 'react'
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
    const {term, handleSearch} = useContext(SearchContext);

    return(
        <div>
            <form>
                <input ref={term} type='text' placeholder='Enter a search term here'></input>
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar
    
    

    // For Quick React Response code 

//     import { useState } from 'react'

// function SearchBar(props){
//     // We can comment out our searchTerm state variable as we are not using it!
//     // let [searchTerm, setSearchTerm] = useState('')

//     return (
//             <form>
//                 <input type="text" placeholder="Search Here"
//                     onChange={
//                         (e) => props.handleSearch(e, e.target.value)
//                     } />
//                 <input type="submit" />
//             </form>
//     )
// }

// export default SearchBar


