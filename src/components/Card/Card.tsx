import React, {Component} from 'react';
import { Home } from '../../Interfaces/home';
import './Card.css';
import bedroom from '../../assets/images/icons/bedroom.png';
import bathrooms from '../../assets/images/icons/bathrooms.png';
import parking from '../../assets/images/icons/parking.png';
import pet from '../../assets/images/icons/pet.png';
import Slider from '../Slider/Slider';

class Card extends Component<Home, any> {
    constructor(props: Home) {
        super(props);
    }

    render() {
        const home = this.props;
        return (
          <div className="mt-card">
            <div className="mt-card-header">
              <Slider children={home.photos}/>
              <span>
                <strong>${home.price || 'N/A'}</strong>
                <i className="far fa-heart"></i>
              </span>
            </div>
            <div className="mt-card-body">
              <div className="text-truncate">{home.abbr_address}</div>
              <div className="footer">
                <span>{home.bedrooms || 'N/A'} <img src={bedroom} alt="bedroom"/></span>
                <span>{home.bathrooms || 'N/A'} <img src={bathrooms} alt="bathrooms"/></span>
                <span>{home.parkings || 'N/A'} <img src={parking} alt="parking"/></span>
                <span>{home.pet_friendly || 'N/A'} <img src={pet} alt="pet"/></span>
                <span>{home.sqare_mts || 'N/A'} m<sup>2</sup></span>
              </div>
            </div>
          </div>
        );
    }
}

export default Card;