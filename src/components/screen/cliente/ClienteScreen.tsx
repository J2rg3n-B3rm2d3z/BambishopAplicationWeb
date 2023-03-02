import { useMemo, useState } from 'react';
import { Cliente, cliente, Columnas } from '../../../interfaces';
import { DinamicTable, Input } from '../../ui';

interface clienteScreenProps {
    Id?: number;
}

export const ClienteScreen = ({ Id = 4 }: clienteScreenProps): JSX.Element => {

    const clientes = useMemo(() => cliente, []);

    const columnasClientes: Columnas[] =  useMemo(() => 
    [{ header: 'Id', accessor: 'IdCliente' },
    { header: 'Nombres', accessor: 'Nombres' },
    { header: 'Apellidos', accessor: 'Apellidos' },
    { header: 'Telefono', accessor: 'Telefono' },], []);
        

    const [clientetemp, setClienteTemp] = useState<Cliente>({
        IdCliente: 0,
        Nombres: '',
        Apellidos: '',
        Telefono: ''
    })

    if ((clientes.find((cliente) => { cliente.IdCliente === Id }) !== undefined)) {
        setClienteTemp(clientes[Id])
        console.log(clientetemp);
    }

    const {Apellidos,Nombres,IdCliente,Telefono} = clientetemp

    return (

        <div className="container border bg-light">

            <div className="row text-center">
                <h1>Cliente</h1>
            </div>

            <hr />

            <div className="row text-start">
                <h4 className='ms-5'>Lista de clientes</h4>
            </div>

            <br />

            <div className="row text-start">
                <div className='col-1' />
                <div className='col-10 text-center '>
                    <DinamicTable Cabecera={columnasClientes} Cuerpo={clientes} Direccion={'Formulario'} />
                </div>
                <div className='col-1' />
            </div>

            <br />
            <hr />
            <br />

            <div className="row text-start" id="Formulario">
                <h4 className='ms-5'>Cliente</h4>
            </div>

            <br />
            <br />

            <div className="row">
                <div className='col-1' />
                <div className="col-6" >
                    <Input labe={'Nombres:*'}
                        inputText={Nombres}/>
                </div>
                <div className='col-1' />
                <div className="col-3" >
                    <Input labe={'Id:'}
                        disable={true}
                        inputText={IdCliente}/>
                </div>
                <div className='col-1' />
            </div>

            <br />
            <br />
            <br />

            <div className="row">
                <div className='col-1' />
                <div className="col-6" >
                    <Input labe={'Apellidos:*'}
                        inputText={Apellidos} />
                </div>
                <div className='col-1' />
                <div className="col-3" >
                    <Input labe={'Telefono:*'}
                        inputText={Telefono}/>
                </div>
                <div className='col-1' />
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="row">
                <div className='col-3' />
                <button
                    type="button"
                    className="btn btn-outline-dark col-2">
                    Guardar
                </button>
                <div className='col-2' />
                <button
                    type="button"
                    className="btn btn-outline-dark col-2">
                    Eliminar
                </button>
                <div className='col-3' />
            </div>

            <br />
            <br />
            <br />



        </div >
    )
}