import { Link } from "react-router-dom";

export default function Time(props){
    const {id, time} = props;

    return (
      <Link to={`/assentos/${id}`}>
        <div key={id} className='Time'>
            {time}
        </div>
      </Link>
    );
}