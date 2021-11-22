import React, { Component } from "react";
import "./PokeCard.css";

const POKE_API = " https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class PokeCard extends Component {
  render() {
    let { id, name, imgSrc, type, exp } = this.props;
    imgSrc = `${POKE_API}${padToThree(id)}.png`;
    return (
      <div className="PokeCard">
        <h3 className="PokeCard-title">{name}</h3>
        <div className="PokeCard-image">
          {" "}
          <img src={imgSrc} alt={name} />
        </div>

        <div className="PokeCard-data">Type: {type}</div>
        <div className="PokeCard-data">Exp: {exp}</div>
      </div>
    );
  }
}

export default PokeCard;
