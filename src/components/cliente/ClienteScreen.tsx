import { cliente } from '../../interfaces/GetCliente';
import { DinamicTable } from '../DinamicTable';
import { ColumnFilter } from '../ColumnFilter';
import { Selector } from '../Selector';

interface ClienteScreenProps {
    id?: number;
}

const clientes = cliente

const objetoprueba = [{ label: 'Id', value: 'IdCliente' },
{ label: 'Nombres', value: 'Nombres' },
{ label: 'Apellidos', value: 'Apellidos' },
{ label: 'Telefono', value: 'Telefono' },]


export const ClienteScreen = ({id=0}: ClienteScreenProps): JSX.Element => {
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
                
                <div className='col-1'>
                </div>
                <div className='col-10 text-center '>
                    <DinamicTable Cabecera={
                        objetoprueba.map(
                            ({ label, value }) => ({ Header: label, accessor: value, Filter:ColumnFilter })
                        )
                    } Cuerpo={clientes} />
                </div>
                <div className='col-1'>
                </div>
                
            </div>

            <div className="row text-start">
                
            </div>

        </div>
    )
}