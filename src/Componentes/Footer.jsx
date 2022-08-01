import './styles.css'

export default function Footer(props){
    const { title, posterURL, weekday, date } = props;
    return (
      <footer className='Footer'>
        <div className='info'>
          <div> <img src={posterURL} alt={title} /> </div>
          {title} <br/>
            { weekday !== undefined && `${weekday} - ${date}` } 
        </div>
      </footer>
    );
  }
