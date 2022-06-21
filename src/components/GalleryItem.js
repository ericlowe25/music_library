import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div style={{
                'width': '25vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative'
            }}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={{
                'width': '80vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative',
                'backgroundImage': `url(${props.item.artworkUrl100})`,
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'color': 'white'
            }}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
} 

export default GalleryItem
// import {useState} from 'react'

// const GalleryItem = (props) => {
//     let [view, setView] = useState(false);

//     const simpleStyle = {
//         'width': '25vw',
//         'height': '20vh',
//         'border': '1px solid black',
//         'margin': '2px'
//     }
    
//     const detailStyle = {
//         'width': '80vw',
//         'height': '20vh',
//         'border': '1px solid black',
//         'margin': '2px',
//         'backgroundImage': `url(${props.item.artworkUrl100})`,
//         'backgroundRepeat': 'no-repeat',
//         'backgroundSize': 'cover',
//         'color': 'yellow'
//     }
    

//     const simpleView = () => {
//         return(
//             <div style={simpleStyle}>
//                 <h3>{props.item.trackName}</h3>
//                 <h4>{props.item.collectionName}</h4>
//             </div>
//         )
//     }

//     const detailView = () => {
//         return(
//             <div style={detailStyle}>
//                 <h2>{props.item.trackName}</h2>
//                 <h3>{props.item.collectionName}</h3>
//                 <h4>{props.item.primaryGenreName}</h4>
//                 <h4>{props.item.releaseDate}</h4>
//             </div>
//         )
//     }

//     return(
//         <div onClick={() => setView(!view)} style={{display: 'inline-block'}}>
//             {/* shows the simple view when 'view' is false */}
//             {view ? detailView() : simpleView()}
//         </div>
//     )
// }

// export default GalleryItem;
