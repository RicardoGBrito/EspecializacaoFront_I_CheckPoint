import "./card-episodio.css";


/**
 * Card para cada episódio na visualização do personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos episódios
 *
 *
 * @returns Elemento JSX
 */
const CardEpisodio = (props) => {


  return (
    <div className="flex flex-col bg-slate-900 rounded-xl p-5">
      <h4 className="text-2xl mb-2">{props.values.name}</h4>
      <div className="flex gap-4 text-zinc-300 text-lg">
        <span>{props.values.episode}</span>
        <span>Lançado em: {props.values.air_date}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
