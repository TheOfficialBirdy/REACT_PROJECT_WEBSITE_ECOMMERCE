import { useState } from 'react';

class USER_SERVER {

};

const INITIALIZATION_ADMIN_PASSCODE = '116900@@Wsu';

interface SensitiveINFO_INT { Email: string, Password: string };
interface WebSettings_INT {};
interface USER_MAP_INT { SensitiveINFO: SensitiveINFO_INT, WebSettings: WebSettings_INT };
class USER_MAP extends USER_SERVER implements USER_MAP_INT {
    SensitiveINFO: SensitiveINFO_INT;
    WebSettings: WebSettings_INT;
    constructor(SensitiveINFO: SensitiveINFO_INT, WebSettings: WebSettings_INT){
        super();
        this.SensitiveINFO = SensitiveINFO;
        this.WebSettings = WebSettings;
    };
    // USER CLASS METHODS
    LOGIN( DATA: SensitiveINFO_INT ) {
        // MATCH TO MYSQL DATABASE COLUMN - WORKBENCH -
        
    };
    REGISTER( DATA: SensitiveINFO_INT ) {
        // ERROR MESSAGE MAP
        const POSSIBLE_REGISTER_ERRORS = new Map<any, any>([
            ['EMAIL', { 'TMC': '', 'NEC': '', 'SCER': '' }], // Too many characters, Not enought characters, Special character erreur
            ['PASSWORD', { 'TMC': '', 'NEC': '', 'SCER': '' }], // Too many characters, Not enought characters, Special character erreur
        ]);
        // UseState __REGEX__ SATES
        const [isERROR, setIsERROR] = useState('');
        const [emailERROR, setEmailERROR] = useState(false);
        const [passwordERROR, setPasswordERROR] = useState(false);
        // Restriction Variables
        const _MAX_CHARS_: number = 15;
        const _MIN_CHARS_: number = 5;
        const _EMAIL_REGEX_: RegExp = /ab+c/i;
        const _PASSWORD_REGEX_: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        // Loosely Declared Variables
        let CURRENT_EMAIL = DATA.Email;
        let CURRENT_PASSWORD = DATA.Password;
        // Verification & Authentication FUNCS (Test Cases) - EMAIL
        if ( CURRENT_EMAIL.length > _MAX_CHARS_ ) {
            console.error(POSSIBLE_REGISTER_ERRORS.get('EMAIL')[1].TMC); // Shoot Error Message To Console
            setIsERROR('email_max_length'); // Sets (ISERROR) State to true
        } else if ( CURRENT_EMAIL.length < _MIN_CHARS_ ) {
            console.error(POSSIBLE_REGISTER_ERRORS.get('EMAIL')[1].NEC); // Shoot Error Message To Console 
            setIsERROR('email_min_length'); // Sets (ISERROR) State to true
        } else if ( _EMAIL_REGEX_.test(CURRENT_EMAIL) === false) {
            console.error(POSSIBLE_REGISTER_ERRORS.get('EMAIL')[1].SCER); // Shoot Error Message To Console
            setIsERROR('email_special_chars'); // Sets (ISERROR) State to true
        };
        // Verification & Authentication FUNCS (Test Cases) - PASSWORD
        if ( CURRENT_PASSWORD.length > _MAX_CHARS_ ) {
            console.error(POSSIBLE_REGISTER_ERRORS.get('PASSWORD')[1].TMC); // Shoot Error Message To Console
            setIsERROR('password_max_length'); // Sets (ISERROR) State to true
        } else if ( CURRENT_PASSWORD.length < _MIN_CHARS_ ) {
            console.error(POSSIBLE_REGISTER_ERRORS.get('PASSWORD')[1].NEC); // Shoot Error Message To Console
            setIsERROR('password_min_length'); // Sets (ISERROR) State to true
        } else if ( _PASSWORD_REGEX_.test(CURRENT_PASSWORD) === false) {
            console.error(POSSIBLE_REGISTER_ERRORS.get('PASSWORD')[1].SCER); // Shoot Error Message To Console
            setIsERROR('password_special_chars'); // Sets (ISERROR) State to true
        };
        // Authentication FUNCS (Test Cases) - ALL
        if (isERROR !== '') {
            console.log('ERROR LOGGING CURRENT USER IN? REFER TO JSX!');
        } else {
            setIsERROR(''); // User-Login-State Refresh
            const AUTHENTICATE = ( CURRENT_AUTH: string ) => {};
            const SEND_DATA_DB = () => { }; //DB API IN THE WORKS
        };
    };
    // DATA RETREIVE METHODS
    GET_SENSITIVE( ADMIN_PASSCODE: string ) {
        if (ADMIN_PASSCODE !== INITIALIZATION_ADMIN_PASSCODE) {
            console.error('ADMIN _ PASSCODE _ REJECT ... !@! HACKER !@!');
            const WAIT_IP4_HACKER = setTimeout(() => { console.log("I HAVE YOU'RE IPV4 ADDRESS PAL. END OF THE ROAD!") }, 2000);
            WAIT_IP4_HACKER.toLocaleString();
        } else {
            var CURRENT_REJECT_CODE = { Email: this.SensitiveINFO.Email, Password: this.SensitiveINFO.Password };
            return CURRENT_REJECT_CODE;
        };
        console.log('Accessing user data...');
    };
};

export default USER_MAP;