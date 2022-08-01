//Forminha do horario
import Time from "./Time";


export default function Session (props){
    const {id, weekday, date, showtimes } = props;
    
    return (
      <div key={id} className="Session" >
        <div className='session'> 
          {`${weekday} - ${date}`}
        </div>
         <div className='time'>
          {showtimes.map(({id, name})=> <Time id={id} time={name} />) }
        </div> 
      </div>
    );
  }