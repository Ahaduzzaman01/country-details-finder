import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, capital, flag, area, region, population} = props.country;

    return (
        <div className="country-div">
            <div class="row-cols-1 row-cols-md-3 g-4">
                <div class="">
                    <div class="card shadow custom-card h-100">
                        <img src={flag} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-text">Country Name: {name}</h5>
                                <h6 class="card-text">Country Capital: {capital}</h6>
                                <h6 class="card-text">Show details of <Link to={`/details/${name}`}>{name}</Link></h6>  
                            </div>
                        <div class="card-footer text-center">
                            <Link to={`/details/${name}`}><button className="btn btn-primary">Show Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;