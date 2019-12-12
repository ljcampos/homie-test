import React, { Component } from "react";
import placeholder from '../../assets/images/card-placeholder.png';
import './Slider.css';

class Slider extends Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        const photos = this.props.children as String[];

        if (photos !== undefined) {
            return(
                <>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {
                            photos.map((m, i) => (
                            <div className={(i === 0) ? 'carousel-item active' : 'carousel-item'}>
                                <img key={i} className="d-block w-100" src={ m.toString() || placeholder} alt='.......................Sim imagen.....' />
                            </div>
                            ))
                        }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                </>
            )
        }
    }
}

export default Slider;