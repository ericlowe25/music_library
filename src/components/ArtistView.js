import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ArtistView(){
    const {id} = useParams()
    const [artistData, setArtistData] = useState([])
    
    useEffect(() => {
        const API_URL = 'http://localhost:4000/album/${id}'
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])
}
const allAlbums = artistData.filter(entity => entity.collectionType === 'Album')
                        .map((album, i) => { 
                            return (
                                <div key={i}>
                                    <Link to={`/album/${album.collectionId}`}>
                                        <p>{album.collectionName}</p>
                                    </Link>
                                </div>)
                                })
    
    const navButtons = () => {
        return (
            <div>
                <button onClick={() => Navigate('/')}>Home</button> | <button onClick={() => Navigate(-1)}>Back</button>
            </div>
        )
    }

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <p>loading...</p>}
            {navButtons()}
            {allAlbums}
        </div>
    )


export default ArtistView
