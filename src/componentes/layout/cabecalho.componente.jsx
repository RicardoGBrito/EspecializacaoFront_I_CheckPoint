import { Link } from "react-router-dom";
import "./cabecalho.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


/**
 * Cabeçalho que contém os links para navegar entre as páginas
 *
 * Uso: `<Cabecalho />`
 *
 * @returns {JSX.Element}
 */
const Cabecalho = () => {
  const {episodes} = useSelector(store=>store.getData);
  const [condicao, setCondicao] = useState()

  useEffect(()=>{
     setCondicao(episodes.length)
    },[episodes])
    
    function detalhe(condicao){
      if(condicao!==0){
        return <Link className="text-2xl font-bold hover:text-4xl hover:text-slate-900 " to="/detalhe">Detalhe</Link>
        
      }else{

        return <Link className="text-2xl font-bold hover:text-4xl hover:text-slate-900 " to="/error">Detalhe</Link>
      }
  }

  return (
    <header>
      <div className="text-3xl font-bold">
        <div>
          <h2>Exame Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="text-2xl font-bold hover:text-4xl hover:text-slate-900 " to="/">Inicio</Link>
            </li>
            <li>
              <Link className="text-2xl font-bold hover:text-4xl hover:text-slate-900 " to="/favoritos">Favoritos</Link>
            </li>
            <li>
              {
                
                detalhe(condicao)
              }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
