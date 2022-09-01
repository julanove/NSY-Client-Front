import React, { Component, Helmet } from 'react';
import { Fragment } from 'react';
import ScrollReveal from 'scrollreveal';

class Dragon extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

        ScrollReveal({reset: true});
        ScrollReveal().reveal('.animate', {});
        ScrollReveal().reveal('.animateLeft', {origin: "left"});
        ScrollReveal().reveal('.animateRight', {origin: "right"});
    }

    render() {
        return( 
            <Fragment>
                <div className="text-center page-title p-d-40">
                            <h3 className="txt-upper">NÚI TRÚC SAKURA YOSAKOI</h3>
                </div>
                <div className="drg-bg"></div>
                <div className="nav-title"> 2019 © NÚI TRÚC SAKURA YOSAKOI </div>
            </Fragment>
        )
    }

}

export default Dragon;