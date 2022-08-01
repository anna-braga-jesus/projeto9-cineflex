import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sucesso() {
  const { state } = useLocation();
  let { cpf, name, seatList, title, date } = state;
  console.log(title);
  return (
    <>
      <div className="Sucesso">
        <h1>
          <strong>
            Pedido feito <br /> com sucesso!
          </strong>
        </h1>
        <div className="subtitle">

          <div className="estilo1">
            <strong>Filme e sessão</strong>
            <div className="info">{title}</div>
            <div className="info">{/* {obj.date} */}</div>
          </div>
        </div>

        <div className="subtitle">
          <div className="estilo2">
          <strong>Ingressos</strong>
          {seatList.map((seat) => (
            <div className="info">Assento {seat % 50} </div>
          ))}
          </div>
          

        </div>
        <div className="subtitle">
        <strong>Comprador</strong>
          <div className="estilo3">
            <div className="design">
           
              <div className="info">
                Nome:{name}
              </div>
            
              <div className="info">
                CPF:{cpf}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-home">
        <Link to="/">
          <button className="home">Voltar pra Home</button>{" "}
        </Link>
      </div>
    </>
  );
}
