import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from 'react-router-dom';
export default function Error(){
    return(
        <div className="bg-slate-800 h-screen flex flex-col justify-center items-center">
            <ErrorOutlineIcon style={{fontSize:'100px'}}/>
            <h1>Escolha um personagem antes de acessar a página de detalhe.</h1>
            <Link to={"/"} className='mt-5 hover:text-xl '>
                Clique aqui para retornar a página inicial
            </Link>
        </div>
    )
}