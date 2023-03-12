import React, { FC, useState } from 'react';
import USER_MAP from '../../../FUNCTION/USER';
import jwt from 'jsonwebtoken';

const LOGFORM_COMPONENT_JSX: FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailFUNC = (e: any) => { setEmail(e.target.value); };
    const handlePasswordFUNC = (e : any) => { setPassword(e.target.value); };
    const USER_CREATIOM_PROCESS = (e: any) => {
        e.preventDefault();
        let CURRENT_USER_MAP = new Map<any, any>([
            ["EMAIL", email],
            ["PASSWORD", password],
        ]);
        console.log(CURRENT_USER_MAP);
    };
    return (
        <React.Fragment>
            <section className="FORM_SECTION_WRAPPER">
                <div className="CENTER_FORM_INPUT">
                    <form className="LOG_MAIN_FORM" method="get" action="">
                        <div className="LOG_BLOCK_WRAPPER">
                            <label className="LOG_EMAIL_INPUT_LABEL INPUT_FIELD_LABEL" htmlFor='LOG_EMAIL_INPUT'>Email (required)</label>
                            <input onChange={ handleEmailFUNC } type="email" className="LOG_EMAIL_INPUT INPUT_FIELD" placeholder="" aria-placeholder="" name="Email Inputfield" required aria-required/>
                            <label className="LOG_PASSWORD_INPUT_LABEL INPUT_FIELD_LABEL" htmlFor='LOG_PASSWORD_INPUT'>Password (required)</label>
                            <input onChange={ handlePasswordFUNC } type="password" className="LOG_PASSWORD_INPUT INPUT_FIELD" placeholder="" aria-placeholder="" name="Password Inputfield" required aria-required/>
                            <input onClick={ USER_CREATIOM_PROCESS } type="submit" className="LOG_SUBMIT_INPUT INPUT_FIELD" placeholder="" aria-placeholder="" name="Submit Inputfield" required aria-required/>
                        </div>
                    </form>
                </div>
            </section>
        </React.Fragment>
    );
};

export default LOGFORM_COMPONENT_JSX;