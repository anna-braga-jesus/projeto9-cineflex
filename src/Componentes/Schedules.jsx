import React, { useState, useEffect } from "react";
import Footer from "./Footer";
 import Session from "./Session";
 import { useParams } from "react-router-dom";
 import axios from "axios"
 import Loading from "./Loading";

export default function Schedules() {
  // const API =
  //   "https://mock-api.driven.com.br/api/v7/cineflex/movies/ID_DO_FILME/showtimes";

  const params = useParams();
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.movieId}/showtimes`
    );
    requisicao.then((res) => {
      setSchedule(res.data);
    });
  }, []);


    
    return (
      <>
      {Object.keys(schedule).length=== 0 ? (
        <Loading src={Loading} alt="loading..."></Loading>
      ) : (
        <div className="Schedule">
          <div className="title"> Selecione o horário </div>
          {schedule.days.map((info) => (
            <Session
              id={info.id}
              weekday={info.weekday}
              date={info.date}
              showtimes={info.showtimes}
            />
          ))}
        </div>
      )
    }
        
        <Footer title={schedule.title} posterURL={schedule.posterURL} />
      </>
    );
  
}
{/* <Footer title={seats.movie.title} posterURL={seats.movie.posterURL} weekday={seats.day.weekday} date={seats.day.date}/>  */}