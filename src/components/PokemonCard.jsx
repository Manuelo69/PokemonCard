import PropTypes from "prop-types";
const PokemonCard = ({
  sprite,
  name,
  hp,
  exp,
  attack,
  specialAttack,
  defense,
}) => {
  return (
    <div className="pokemon-card flex items-center flex-col bg-white shadow-xl rounded-2xl h-80 w-72 justify-around relative overflow-hidden">
      <img
        className="block w-full h-full"
        src={"src/assets/bg-pattern-card.svg"}
        alt=""
      />
      <div className="card-body flex flex-col">
        <img
          className="w-52 h-52 mb-11 rounded-full  bg-slate-50"
          src={sprite}
          alt={name}
        />
        <p className="relative z-10">
          {name} {hp}hp
        </p>
        <p className="relative z-10">Exp: {exp}</p>
      </div>
      <div className="w-40 text-sm flex flex-row relative z-10">
        <p>{attack} Ataque</p>
        <p>{specialAttack} Ataque especial</p>
        <p>{defense} Defensa</p>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  sprite: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  exp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  specialAttack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
};

export default PokemonCard;
