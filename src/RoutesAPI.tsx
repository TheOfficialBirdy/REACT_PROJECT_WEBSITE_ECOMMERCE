export const ROUTES = new Map([
    ['Home', { Path: '', Element: '' }]
])

interface ROUTE_INT { Name: string, Path: string, Element: JSX.Element};

class _ROUTINGSYS_ {
    construtor(){

    }
}

class _ROUTE_ extends _ROUTINGSYS_ {
    Name: string;
    Path: string;
    Element: JSX.Element;
    constructor(Name: string, Path: string, Element: JSX.Element){
        super();
        this.Name = Name;
        this.Path = Path;
        this.Element = Element;
    };
    // Route Methods
    CREATE_NEW_ROUTE() {
        
    };
};

class _ROUTELIST_ extends _ROUTINGSYS_ {
    ID: string;
    DATA_ARRAY: string[];
    constructor(ID: string, DATA_ARRAY: string[]){
        super();
        this.ID = ID;
        this.DATA_ARRAY = DATA_ARRAY;
    };
    // Route Lists
    CREATE_NEW_LIST() {
        let CURRENT_ARRAY = new Map([
            ['', this.DATA_ARRAY]
        ]);
    };
};

export default _ROUTE_;

