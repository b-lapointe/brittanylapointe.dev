import React from 'react';
import ACMEHeader from './acmeHeader';
import ACMEApp from './acmeApp';

import './acmeHome.scss'

function ACMEHome() {
    return (
        <div className='acme'>
            <ACMEHeader/>
            <ACMEApp />
        </div>
    )
}

export default ACMEHome