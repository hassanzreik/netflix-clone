import React, {useEffect, useState} from "react";
import axios from './axios';
import "./Row.css";
const image_base_url = "https://image.tmdb.org/t/p/original";
function Row(props){

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchURL]);
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row__posters">
                {movies.map(
                    movie => (
                        <img
                            key={movie.id}
                            className={`row__poster ${props.isLargeRow? "row__posterLarge":""}`}
                            src={`${image_base_url}${
                                props.isLargeRow ? movie.poster_path : movie.backdrop_path != null ? movie.backdrop_path:""
                            }`}
                            alt={movie.name}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Row;
