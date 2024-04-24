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
        className="block w-full h-28 -mt-4"
        src={"src/assets/bg-pattern-card.svg"}
      />
      <div className="card-body flex flex-col">
        <img
          className="w-40 h-40 rounded-full -mt-24  bg-white border-black border"
          src={sprite}
          alt={name}
        />
        <p className="">
          <span className="font-bold">{name}</span> {hp}hp
        </p>
        <p className="">Exp: {exp}</p>
      </div>
      <div className=" text-sm flex flex-row justify-around w-full">
        <div className="flex flex-col">
          <h3 className="font-bold">{attack}K</h3>
          <p> Ataque</p>
        </div>
        <div>
          <h3 className="font-bold">{specialAttack}K</h3>
          <p> Ataque especial</p>
        </div>
        <div>
          <h3 className="font-bold">{defense}K</h3>
          <p> Defensa</p>
        </div>
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
