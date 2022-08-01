import loading from './loading.gif'
import './styles.css'


export default function Loading(){
    return (
        <div className="loading">
        <img src={loading} className="loading-imagem" alt='loading'/>
        </div>
    )
}