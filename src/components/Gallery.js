import GalleryItem from './GalleryItem';
// import { useContext } from 'react';
// import { DataContext } from '../context/DataContext';

const Gallery = (props) => {
    // const data = useContext(DataContext);
    const myData = props.data.result.read()
    const display = myData.map((item, index) => {
        return (
            <GalleryItem item={item} key={index}/>
        )
    })
    
    return(
        <div>
            {display}
        </div>
    )
}

export default Gallery
