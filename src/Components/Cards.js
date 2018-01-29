import React, { Component } from 'react';
import CardProduit from './CardProduit';
import Produits from './DataProduit';

console.log(Produits);
class Cards extends Component {
  state={
    dataProduit: Produits,
  }
  component

  render() {
    console.log(this.state.dataProduit);
    return (
      <div>
        <h2 style={{textAlign:"center", marginTop:"50px"}} className="ProductTitle"> Produits</h2>
      <div className="div-cards">
        {this.state.dataProduit.map((card, i)=> {
        return(<CardProduit src={card.src} nomProduit={card.nom} descriProduit={card.descr} />)
        })}
      </div>
      </div>

    );
  }
}

export default Cards;
