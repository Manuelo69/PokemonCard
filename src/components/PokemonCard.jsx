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
    <div className="pokemon-card flex justify-center items-center flex-col">
      <img src={sprite} alt={name} />
      <p>
        {name} {hp}hp
      </p>
      <p>Exp: {exp}</p>
      <p className="line">
        {attack} Ataque | {specialAttack} Ataque especial | {defense} Defensa
      </p>
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
