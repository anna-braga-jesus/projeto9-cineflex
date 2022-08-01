import { BrowserRouter,Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'; 
import Schedules from './Componentes/Schedules.jsx';
import Seats from './Componentes/Seats.jsx'
import Sucesso from './Componentes/Sucesso.jsx';
import Header from './Componentes/Header.jsx';
import Movies from './Componentes/Movies.jsx';
import './Componentes/styles.css'
// import '../src/assets/css/reset.css'


function App() {


    const obj={}; //Para fazer a passagens

//Ver questao de caminho de rota de acordo com requisitos    

    return (
        <>
            <BrowserRouter>
                <Header /> 
                <Routes>
                    <Route path='/' element={<Movies />} />
                    <Route path='/sessoes/:movieId' element={<Schedules />} />
                    <Route path='/assentos/:sessionId' obj={obj} element={<Seats />} />
                    <Route path='/sucesso' obj={obj} element={<Sucesso />} />
                </Routes>
            </BrowserRouter>
        </>
        
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));