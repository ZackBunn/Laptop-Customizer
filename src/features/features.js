import React, { Component } from 'react';
import './features.css'

export class Features extends Component {

    featureItems(features, selected) {
        return Object.keys(features)
            .map(key => {
                const options = features[key].map((item, index) => {
                const selectedClass = item.name === selected[key].name ? 'feature__selected' : '';
                const featureClass = 'feature__option ' + selectedClass;
                return <li key={index} className="feature__item">
                    <div className={featureClass}                    
                    onClick={e => this.props.onClick(key, item)}>
                        { item.name }
                        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(item.cost) })
                    </div>
                </li>
                });
                return <div className="feature" key={key}>
                <div className="feature__name">{key}</div>
                <ul className="feature__list">
                  { options }
                </ul>
              </div>
            });      
    }
      
    render () {   
        
        return (
            <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { this.featureItems(this.props.features, this.props.selected) }
            </section>
        )
    }
}