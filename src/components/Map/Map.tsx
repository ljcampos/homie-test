import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Location } from '../../Interfaces/location';
import './Map.css';
import markerImage from '../../assets/images/rectangle-purple.svg';
import { Home } from '../../Interfaces/home';

export class CustomMap extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    showMarkers = () => {
        let _homes = this.props.children as Home[];

        return _homes.map((m:Home, index: number ) => {
            let price = String(m.price);
            let locations = m.location as Location;
            return <Marker
                        key={index}
                        id={index}
                        icon={markerImage}
                        label={'$'+price}
                        position={{lat: locations.lat, lng: locations.lng}}
                    />
        })
    }

    render() {
        return (
            <div className="map-wrapper">
                <div className="map">
                    <Map
                        google={this.props.google}
                        zoom={13}
                        initialCenter = {{ lat: 19.4173753, lng: -99.08997399999998}}
                    >
                        {this.showMarkers()}
                    </Map>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: '', // set a valid apikey
})(CustomMap);