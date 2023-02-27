import { cliente } from '../../interfaces/GetCliente';
import { DinamicTable } from '../DinamicTable';
import { Selector } from '../Selector';
import { SingleValue } from 'react-select/dist/declarations/src';

interface ClienteScreenProps {
    id?: number;
}

const clientes = cliente

const objetoprueba = [{ label: 'Id', value: 'IdCliente' },
{ label: 'Nombres', value: 'Nombres' },
{ label: 'Apellidos', value: 'Apellidos' },
{ label: 'Telefono', value: 'Telefono' },]


export const ClienteScreen = (prompt: ClienteScreenProps): JSX.Element => {
    return (
        <div className="container border bg-light">

            <div className="row text-center">
                <h1>Cliente</h1>
            </div>
            <hr />

            <div className="row text-start">
                <h4>Lista de clientes</h4>
            </div>
            <br />

            <div className="row text-start">
                <div className='col-4'>
                    <Selector
                        opciones={objetoprueba}
                        esBuscador={true} />
                </div>
                <div className='col-4'>
                </div>
                <div className='col-4'>
                    <Selector
                        opciones={objetoprueba}
                        esBuscador={false} />
                </div>

            </div>
            <br />

            {/* TODO */}

            <div className="row text-start">
                react-table
                {/* <div className='col-1'>
                </div>
                <div className='col-10 text-center '>
                    <DinamicTable Cabecera={
                        objetoprueba.map(
                            ({ label, value }) => ({ Header: label, accessor: value })
                        )
                    } Cuerpo={clientes} />
                </div>
                <div className='col-1'>
                </div> */}
                material-teble
                TODO
            </div>

        </div>
    )
}