import { useEffect, useMemo, useState } from 'react';
import { Cliente, cliente, Columnas, columnasClientes } from '../../../interfaces';
import { useGetClientesQuery } from '../../../store/slices/apis';
import { DinamicTable, Input } from '../../ui';
import '../loading.scss';

interface clienteScreenProps {
    Id?: number;
}

const clientedefault: Cliente = {
    idCliente: 0,
    nombres: '',
    apellidos: '',
    telefono: ''
}

export const ClienteScreen = ({ Id = 4 }: clienteScreenProps): JSX.Element => {

    const { data, isLoading, isSuccess } = useGetClientesQuery('');

    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [clientetemp, setClienteTemp] = useState<Cliente>(clientedefault)

    useEffect(() => { 

        if (isSuccess && (data!==undefined)) {
          setClientes(data);
          (clientes.find((cliente) => cliente.idCliente === Id)) ?
          setClienteTemp(clientes.find((cliente) => { return cliente.idCliente === Id })!):
          setClienteTemp(clientedefault)
          console.log(clientes)
          console.log(clientetemp)
        }

      }, [isSuccess, data]);
    

   

    // const [clientetemp, setClienteTemp] = useState<(Cliente)>(
    //     (clientes.find((cliente: { idCliente: number; }) => cliente.idCliente === Id)) ?
    //         clientes.find((cliente: { idCliente: number; }) => { return cliente.idCliente === Id })! :
    //         clientedefault
    // )

    const { apellidos, nombres, idCliente, telefono } = clientetemp


    // const clientes = useMemo(() => cliente, []);
    // const columnasCliente: Columnas[] = useMemo(() => columnasClientes, []);

    // const [clientetemp, setClienteTemp] = useState<(Cliente)>(
    //     (clientes.find((cliente: { idCliente: number; }) => cliente.idCliente === Id)) ?
    //         clientes.find((cliente: { idCliente: number; }) => { return cliente.idCliente === Id })! :
    //         clientedefault
    // )

    // const { apellidos, nombres, idCliente, telefono } = clientetemp


    const columnasCliente: Columnas[] = useMemo(() => columnasClientes, []);

    const [selectedCUD, setSelectedCUD] = useState({ checked: 'Actualizar' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCUD({ checked: e.target.value })
        console.log(selectedCUD);
    }



    return (

        <div className="container border bg-light">
            {isLoading ? (
                <>
                    <div className="row text-center">
                        <div className="col-5" />
                        <div className="lds-ring col-1" ><div></div><div></div><div></div><div></div></div>
                    </div>
                </>) :
                (<>
                    {!isSuccess ? (<>
                        <div className="text-center">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1>Error al cargar los datos</h1>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </>) :
                        (<>
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
                                    <DinamicTable Cabecera={columnasCliente}
                                        Cuerpo={clientes}
                                        Direccion={'Formulario'}
                                        setvalue={setClienteTemp} selectedCUD={selectedCUD.checked} />

                                </div>
                                <div className='col-1' />
                            </div>

                            <br />
                            <hr />
                            <br />

                            <div className="row text-start" id="Formulario">
                                <h4 className='ms-5'>Cliente - {selectedCUD.checked}</h4>
                            </div>

                            <br />
                            <br />

                            <div className="row">
                                <div className='col-1' />
                                <div className="col-6" >
                                    <Input labe={'Nombres:*'}
                                        inputText={nombres}
                                        setvalue={setClienteTemp}
                                        objecto={clientetemp}
                                        disable={(selectedCUD.checked === 'Eliminar')}
                                        campo='nombres'
                                        maxlength={35} />
                                </div>
                                <div className='col-1' />
                                <div className="col-3" >
                                    <Input labe={'Id:'}
                                        disable={true}
                                        inputText={idCliente}
                                        setvalue={setClienteTemp}
                                        objecto={clientetemp}
                                        campo='idCliente'
                                        maxlength={32000} />
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
                                        inputText={apellidos}
                                        disable={(selectedCUD.checked === 'Eliminar')}
                                        setvalue={setClienteTemp} objecto={clientetemp} campo='apellidos'
                                        maxlength={35} />
                                </div>
                                <div className='col-1' />
                                <div className="col-3" >
                                    <Input labe={'Telefono:*'}
                                        inputText={telefono}
                                        disable={(selectedCUD.checked === 'Eliminar')}
                                        setvalue={setClienteTemp} objecto={clientetemp} campo='telefono'
                                        maxlength={8} />
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
                                    className="btn btn-outline-dark col-2"
                                    onClick={() => console.log(clientes)}
                                    disabled={(selectedCUD.checked === 'Eliminar')}
                                >
                                    Guardar
                                </button>
                                <div className='col-2' />
                                <button
                                    type="button"
                                    className="btn btn-outline-dark col-2"
                                    disabled={!(selectedCUD.checked === 'Eliminar')}>
                                    Eliminar
                                </button>
                                <div className='col-3' />
                            </div>

                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="row text-center">

                                <label className='col-4'>
                                    <input
                                        className="form-check-input"
                                        type={'radio'}
                                        value="Agregar"
                                        name="flexRadioDefault"
                                        checked={selectedCUD.checked === 'Agregar'}
                                        onChange={(e) => {
                                            setClienteTemp(clientedefault)
                                            handleChange(e)
                                        }}
                                    />
                                    Agregar
                                </label>

                                <label className='col-4'>
                                    <input
                                        className="form-check-input"
                                        type={'radio'}
                                        value="Actualizar"
                                        name="flexRadioDefault"
                                        checked={selectedCUD.checked === 'Actualizar'}
                                        onChange={(e) => handleChange(e)} />
                                    Actualizar
                                </label>

                                <label className='col-4'>
                                    <input
                                        className="form-check-input"
                                        type={'radio'}
                                        value="Eliminar"
                                        name="flexRadioDefault"
                                        checked={selectedCUD.checked === 'Eliminar'}
                                        onChange={(e) => handleChange(e)} />
                                    Eliminar
                                </label>

                            </div>
                            <br />
                            <br />


                        </>)}
                </>)}
        </div >
    )
}