
import React, { Component } from 'react';
import Jumbojs from '../Components/Jumbotron.js';
import Jumbocss from '../Components/Jumbotron.css';
import Cards from './Cards';
import './CardProduit.css';
import Slider from './Slider';
import './Slider.css';
import Temoignages from './Temoignages';
class Accueil extends Component {
    render() {
        return (
            <div className="TestAccueil">
                <Jumbojs/>
                <Cards/>
                <Temoignages/>
                <Slider/>
            </div>
        );
    }
}

export default Accueil;
