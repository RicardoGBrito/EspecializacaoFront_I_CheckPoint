import { useDispatch, useSelector } from "react-redux";
import "./filtros.css";
import { getCards } from "../../redux/services/requests";
import { useState } from "react";
import { CLEAR_FILTER, CLEAR_FILTER_NAME, FILTER_NAME } from "../../redux/actions-types";

const Filtros = () => {

  const dispatch = useDispatch()
  const {name} = useSelector((store)=>store.name)
  const [inputName, setInputName] = useState("")
  const [stateError, setStateError] = useState(true)

  function limparFiltro(){
    dispatch({type:CLEAR_FILTER_NAME})
    dispatch({type:CLEAR_FILTER})
    setStateError(!stateError)
    setInputName("")
  }

  function filtrar(){
    if(name){
      setStateError(!stateError)
      
    }else{
      dispatch({type:FILTER_NAME, payload:inputName})

    }
  }

  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <div className="flex gap-10">
        <div className="flex flex-col w-full">
          <input
            className={!stateError?"rounded-[3px] py-[15px] px-[20px] flex-grow-1 border-[1px] border-red-500":"rounded-[3px] py-[15px] px-[20px] flex-grow-1 border-[1px] border-[#d0d0d0]"}
            value={inputName}
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            name="nome"
            onChange={(event)=>setInputName(event.target.value)}
          />
          <span hidden={stateError} className="text-sm mt-2 text-red-500">Limpe o filtro antes de filtrar novamente.</span>

        </div>
        <button onClick={filtrar} disabled={inputName===""} className="primary min-w-[130px]">Filtrar</button>
        <button onClick={limparFiltro} disabled={inputName===""} className="danger min-w-[130px]">Limpar filtro</button>
        
      </div>
    </div>
  );
};

export default Filtros;
