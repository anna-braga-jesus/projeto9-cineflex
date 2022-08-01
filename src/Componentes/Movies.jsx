import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import Loading from "./Loading.jsx";
import Movie from "./Movie.jsx";
import './styles.css'



export default function Movies(){

    const API = "https://mock-api.driven.com.br/api/v7/cineflex/movies/"
    
    const [movies, setMovies] = useState([]);
    
     useEffect(()=>{
        const promise = axios.get(API);
        promise.then((response) =>{setMovies(response.data)});
      },
      []);


     

    return (
        movies.length > 0 ?
            <>
                <div className="title">Selecione o filme</div>
                <div className="movies">
                { movies.map( ({id, title, posterURL, overview, releaseDate }) =>  
                <Movie key={id} id={id} title={title} posterURL={posterURL} overview={overview} releaseDate={releaseDate} />  )}
                    </div>
                
            </>
        :
            <Loading />
    )
        
             
}

