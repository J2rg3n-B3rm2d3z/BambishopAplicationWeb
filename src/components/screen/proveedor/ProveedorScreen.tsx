import { DinamicTable } from "../../ui/DinamicTable";
import { proveedor } from "../../../interfaces"

const proveedores = proveedor

const objetoprueba = [{ header: 'Id', accessor: 'IdProveedor' },
{ header: 'Nombre', accessor: 'NombreProveedor' },
{ header: 'Direccion', accessor: 'Direccion' },
{ header: 'Telefono', accessor: 'Telefono' },
{ header: 'Correo', accessor: 'Correo' }]


export const ProveedorScreen= (): JSX.Element => {
    return (

        <div className="container border bg-light">

            <div className="row text-center">
                <h1>Proveedor</h1>
            </div>

            <hr />

            <div className="row text-start">
                <h4 className='ms-5'>Lista de proveedores</h4>
            </div>

            <br />

            <div className="row text-start">
                <div className='col-1' />
                <div className='col-10 text-center '>
                    <DinamicTable Cabecera={objetoprueba} Cuerpo={proveedores}  Direccion={"Formulario"}/>

                </div>
                <div className='col-1' />
            </div>
            
            <br />
            <hr />
            <br />

            <div className="row text-start" id="Formulario">
                <h4 className='ms-5'>Proveedor</h4>
            </div>

        </div>
    )
}