import React, { FC } from 'react';

import './Css/Log_Form.css';

import LOGFORM_COMPONENT_JSX from './Components/Log_Form';

const LOGIN_PAGE_JSX: FC = (): JSX.Element => {
    return (
        <React.StrictMode>
            {/* NAVBAR ELEMENT NESS */}
            <LOGFORM_COMPONENT_JSX></LOGFORM_COMPONENT_JSX>
        </React.StrictMode>
    );
};

export default LOGIN_PAGE_JSX;