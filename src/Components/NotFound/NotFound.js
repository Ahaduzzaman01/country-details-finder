import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
    return (
        <div>
            <h2 class="text-danger text-center mt-5"><FontAwesomeIcon icon={faExclamationTriangle} /> 404 Page Not Found <FontAwesomeIcon icon={faExclamationTriangle} /></h2>
        </div>
    );
};

export default NotFound;