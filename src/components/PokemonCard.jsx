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
    <div className="pokemon-card flex items-center flex-col bg-white shadow-xl rounded-2xl h-80 w-72 justify-around">
      <div>
        <img src={sprite} alt={name} />
      </div>
      <p>
        {name} {hp}hp
      </p>
      <p>Exp: {exp}</p>
      <div className="w-40 text-sm flex flex-row">
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
