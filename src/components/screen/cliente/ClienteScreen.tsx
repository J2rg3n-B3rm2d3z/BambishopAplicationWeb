import { useEffect, useMemo, useState } from 'react';
import { Cliente, Columnas, columnasClientes } from '../../../interfaces';
import {
    useGetClientesQuery, useCreateClienteMutation,
    useDeleteClienteMutation, useUpdateClienteMutation
} from '../../../store/slices/apis';
import { DinamicTable, Input } from '../../ui';
import Swal from 'sweetalert2'
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

export const ClienteScreen = ({ Id = 0 }: clienteScreenProps): JSX.Element => {

    const { data, isLoading: isLoadingGet, isSuccess: isSuccessGet } = useGetClientesQuery();
    const [createCliente] = useCreateClienteMutation();
    const [deleteCliente] = useDeleteClienteMutation();
    const [updateCliente] = useUpdateClienteMutation();

    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [clientetemp, setClienteTemp] = useState<Cliente>(clientedefault);
    const { apellidos, nombres, idCliente, telefono } = clientetemp

    const [primeraVez, setPrimeraVez] = useState(true);
    const columnasCliente: Columnas[] = useMemo(() => columnasClientes, []);
    const [selectedCUD, setSelectedCUD] = useState({ checked: 'Actualizar' });

    useEffect(() => {

        if (!isSuccessGet && !isLoadingGet) {
            Swal.fire(
                'Error de conexion',
                'Hubo un error al establecer conexion',
                'error'
            );
        }

    }, [isLoadingGet])

    useEffect(() => {

        if (isSuccessGet && (data !== undefined))
            setClientes(data);

    }, [isSuccessGet, data]);

    useEffect(() => {

        if (clientes.length > 0 && primeraVez) {
            (clientes.find((cliente) => cliente.idCliente === Id)) ?
                setClienteTemp(clientes.find((cliente) => { return cliente.idCliente === Id })!) :
                setClienteTemp(clientedefault)
            setPrimeraVez(false)
        }
        else {

            setClienteTemp(clientedefault)

        }

    }, [clientes]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCUD({ checked: e.target.value })
    }

    const handleSubmit = async (ClienteCreado: Cliente) => {
        try {
            await createCliente(ClienteCreado);
            Swal.fire(
                'Cliente agregado',
                'El cliente ha sido agregado correctamente',
                'success'
            );
        }
        catch (e) {
            Swal.fire(
                'No se ha podido agregar el cliente',
                'Hubo un error al momento de agregar al cliente',
                'error'
            )
        }
    }

    const handleUpdate = async (ClienteCreado: Cliente) => {
        try {
            await updateCliente(ClienteCreado);
            Swal.fire(
                'Cliente Actualizado',
                'El cliente ha sido actualizado correctamente',
                'success'
            );
        }
        catch (e) {
            Swal.fire(
                'No se ha podido actualizar el cliente',
                'Hubo un error al momento de actualizar al cliente',
                'error'
            );
        }
    }

    const handleDelete = async (idCliente: number) => {
        try {
            await deleteCliente(idCliente);
            Swal.fire(
                'Cliente Eliminado',
                'El cliente ha sido eliminado con exito',
                'success'
            );
        }
        catch (e) {
            Swal.fire(
                'No se ha podido Eliminar el cliente',
                'Hubo un error al momento de eliminado al cliente',
                'error'
            )
        }
    }

    return (

        <div className="container border bg-light">
            {isLoadingGet ? (
                <>
                    <div className="row text-center">
                        <div className="col-5" />
                        <div className="lds-ring col-1" ><div></div><div></div><div></div><div></div></div>
                    </div>
                </>) :
                (<>
                    {!isSuccessGet ?
                        (<>
                            <div className="text-center">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <h1>Error de conexion</h1>
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
                                    onClick={() => {
                                        if ((selectedCUD.checked === 'Agregar')) {
                                            if(clientetemp.nombres.length>2 && clientetemp.apellidos.length>2 && clientetemp.telefono.length === 8)
                                            {
                                                handleSubmit(clientetemp);
                                            }
                                            else{
                                                Swal.fire(
                                                    'Datos invalidos',
                                                    'Los datos proporcionados no son validos para crear un cliente',
                                                    'error'
                                                )
                                            }
                                        
                                        }
                                        else if ((selectedCUD.checked === 'Actualizar')) {
                                            if (clientetemp.idCliente != 0) {
                                                handleUpdate(clientetemp);
                                            } else {
                                                Swal.fire(
                                                    'Seleccione un cliente',
                                                    'No se ha selecionado ningun cliente',
                                                    'warning'
                                                )
                                            }
                                        }
                                    }}
                                    disabled={(selectedCUD.checked === 'Eliminar')}>
                                    Guardar
                                </button>
                                <div className='col-2' />
                                <button
                                    type="button"
                                    className="btn btn-outline-dark col-2"
                                    onClick={() => {
                                        if (clientetemp.idCliente != 0) {
                                            const swalWithBootstrapButtons = Swal.mixin({
                                                customClass: {
                                                    confirmButton: 'btn btn-success',
                                                    cancelButton: 'btn btn-danger'
                                                },
                                                buttonsStyling: true
                                            })

                                            swalWithBootstrapButtons.fire({
                                                title: 'Estas seguro?',
                                                text: "Una vez que elimines a este cliente no se podra recuperar su informacion, recuerde que no se podra eliminar este cliente si tiene alguna factura a su nombre",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonText: 'Si, deseo eliminarlo',
                                                cancelButtonText: 'No, prefiero modificarlo',
                                                reverseButtons: true
                                            }).then((result) => {
                                                if (result.isConfirmed) {

                                                    if (/* Revisar en la base de datos que no tenga ninguna factura  ===*/ true) {

                                                        handleDelete(clientetemp.idCliente);

                                                    }

                                                } else if (
                                                    /* Read more about handling dismissals below */
                                                    result.dismiss === Swal.DismissReason.cancel
                                                ) {
                                                    swalWithBootstrapButtons.fire(
                                                        'Cancelado',
                                                        'Se ha cancelado la eliminacion del cliente seleccionado',
                                                        'success'
                                                    )
                                                }
                                            })
                                        } else {
                                            Swal.fire(
                                                'Seleccione un cliente',
                                                'No se ha selecionado ningun cliente',
                                                'warning'
                                            )
                                        }
                                    }}
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