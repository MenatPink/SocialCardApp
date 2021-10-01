import React from 'react';
import './App.css';


function CardHeader(){
    return(
        <div className = "card-header">
            <div className = "profile-picture">
                <img src="/assets/1-intro-photo-final.jpg" alt="Profile" />
            </div>
            <div>
                <h1>John Doe</h1>
                <p>Lorem Ipsum</p>
            </div>
            <div>
                <img src=".menu-icon" alt="Menu Icon" />
            </div>
        </div>
    )
}

export default CardHeader;