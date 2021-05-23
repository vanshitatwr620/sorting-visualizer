import React from 'react';
import './Header.css';

export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <p id="animateText">Sorting Visualizer</p>
            </div>
        );
    }
}