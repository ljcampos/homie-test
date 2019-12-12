import React, { Component } from 'react';
import './Content.css';
import Card from '../Card/Card';
import CustomMap from '../Map/Map';

class Content extends Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      homes: []
    }
  }

  render() {
    const homes = this.state.homes as any[];
    return (
      <>
      <div className="content-wrapper">
        <div className="mt-card-wrapper">
        {
          // CARD COMPONENT
          homes.map((x: any) => (
            <Card
              key={x.id}
              id={x.id}
              abbr_address = {x.abbr_address}
              bathrooms = {x.bathrooms}
              bedrooms = {x.bedrooms}
              parkings = {x.parkings}
              sqare_mts = {x.sqare_mts}
              location = {x.location}
              name = {x.name}
              pet_friendly = {x.pet_friendly}
              photos = {x.photos}
              price = {x.price}
              is_homie_exclusive = {x.is_homie_exclusive}
            />
          ))
        }
        </div>
        {/* MAP COMPONENT */}
        <CustomMap children={homes.map(m => {return m})}/>
      </div>
      </>
    );
  }

  componentDidMount() {
    fetch('https://us-central1-homie-front-test.cloudfunctions.net/homes')
    .then(response => { return response.json() })
    .then(data => {
      this.setState({ homes: data.homes})
    });
  }
}

export default Content;