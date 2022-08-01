import axios from "axios";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";
import Schedules from "./Schedules";

export default function Seats() {
 
  const { sessionId } = useParams();
  const [seats, setSeats] = useState(null);
  const [seatList, setSeatList] = useState([]); //Pegar os assentos
  // const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState(""); //Variável para pegar infos inseridas nos inputs
  const [cpf, setCpf] = useState(""); //Variável para pegar infos inseridas nos inputs
 

  // function getSelectedSeats(seat){
  //   if (selectedSeats.some(( idSeat ) => idSeat.id === seat.id) ) {        
  //     setSelectedSeats( selectedSeats.filter((s) => s.id!==seat.id ) );
  //   } else {
  //     setSelectedSeats([...selectedSeats,seat]);
  //   }  
  // }

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Qualquer coisa ')
    console.log(seats)
    if(seatList.length===0){
      return alert('Escolha pelo menos um assento')
    }
    const promise= axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', {
     ids: seatList,
     name: name,
     cpf: cpf,
   });
   
   promise.then( () => { 
    navigate('/sucesso',
    {
    state:{cpf:cpf, name:name, seatList:seatList, title:seats.movie.title }})  })
    // obj.name=name;
    // obj.cpf=cpf;
  }


//   promise.catch((error) => {
//     console.log(error);
//     alert('Ocorreu um problema.')
//   });

// }


  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`
    );

    request.then((response) => {
      setSeats(response.data);
      // obj.title = response.data.movie.title;
      // obj.time = response.data.name;
      // obj.date = response.data.day.date;
    });
  }, []);

  return seats !== null ? (
    <>
      <h4>Selecione o(s) assentos(s)</h4>
      <div>
        <div className="seats">
          {seats.seats.map(({ name, isAvailable, id }) => {
            if (!isAvailable) {
              return (
                <div
                  className="seat yellow"
                  key={id}
                  onClick={() => alert("Esse assento não está disponível")}
                >
                  {name < 10 ? 0 + name : name}
                </div>
              );
            } else {
              return (
                <div
                  className={`seat ${seatList.includes(id) ? "selected" : ""}`}
                  key={id}
                  onClick={() => {
                    seatList.includes(id)
                      ? setSeatList(() => {
                          let removeId = seatList.filter((e) => e !== id);
                          return removeId;
                        })
                      : setSeatList([...seatList, id]);
                  }}
                >
                  {name < 10 ? 0 + name : name}
                </div>
              );
            }
          })}
        </div>
        <div className="seat-types">
          <div className="seat-type">
            <div className="seat selected"></div>
            <p>Selecionado</p>
          </div>
          <div className="seat-type">
            <div className="seat"></div>
            <p>Disponível</p>
          </div>
          <div className="seat-type">
            <div className="seat yellow"></div>
            <p>Indisponível</p>
          </div>
        </div>

        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <label>
              Nome do comprador:
              <input
                className="box"
                placeholder="Digite seu nome..."
                type="text" value={name} required onChange={ (e)=> setName(e.target.value)}
                
              />
            </label>
          {/* </form>
          <form onSubmit={handleSubmit}> */}
            <label>
              CPF do comprador:
              <input
                className="box"
                placeholder="Digite seu CPF..."
                type="text"
                value={cpf} required onChange={ (e)=> setCpf(e.target.value)} 
              />
            </label>
            {" "}
            <button type="submit" className="final">
              Reservar assento
            </button>
          </form>

          
            
      
        </div>

        {/* <Seat seatList={seatList} seats={seats} /> */}
      </div>

      <Footer title={seats.movie.title} posterURL={seats.movie.posterURL} date={seats.name} weekday={seats.day.weekday} />
    </>
  ) : (
    <Loading />
  );
}
