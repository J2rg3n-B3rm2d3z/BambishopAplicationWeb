import Select from "react-select";
import { SingleValue } from "react-select/dist/declarations/src";

interface Supliers { //=> Asi tiene que ser la sintaxis para que el Select de react-select funcione bien
    label: string,
    value: string,
}

interface SelectorProps {
    opciones: Supliers[],
    esBuscador: boolean;
    valorPordefecto?: number;
}

export const Selector =({opciones,esBuscador,valorPordefecto = 0}: SelectorProps): JSX.Element => {

    if(esBuscador){

        return (
            <div className="row">
                <p className="col-4">Buscar por:</p> 
                <Select className="col-8"
                    defaultValue={opciones[valorPordefecto]}
                    isSearchable={false}
                    options={opciones}/>
            </div>
        )

    }
    else{

        return (
            <div className="row">
                <Select className="col-12"
                    options={opciones}/>
            </div>
        )

    }

    
}