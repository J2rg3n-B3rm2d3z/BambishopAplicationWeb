import { Columnas } from ".";

export const columnasClientes:Columnas[] =  
[{ header: 'Id', accessor: 'idCliente'},
{ header: 'Nombres', accessor: 'nombres'},
{ header: 'Apellidos', accessor: 'apellidos'},
{ header: 'Telefono', accessor: 'telefono' },]

export const columnasProveedor:Columnas[] =  
[{ header: 'Id', accessor: 'IdProveedor' },
{ header: 'Nombre', accessor: 'NombreProveedor' },
{ header: 'Direccion', accessor: 'Direccion' },
{ header: 'Telefono', accessor: 'Telefono' },
{ header: 'Correo', accessor: 'Correo' }]

export const columnasProducto:Columnas[] =  
[{ header: 'Id', accessor: 'IdProducto' },
{ header: 'Nombre', accessor: 'NombreProducto' },
{ header: 'Tipo', accessor: 'Tipo' },
{ header: 'PrecioActual', accessor: 'PrecioActual' },
{ header: 'Cantidad', accessor: 'CantidadProducto' }]

export const columnasAdquisicion:Columnas[] =  
[{ header: 'Producto', accessor: 'NombreProducto' },
{ header: 'Proveedor', accessor: 'NombreProveedor' },
{ header: 'FechaObtencion', accessor: 'FechaObtencion' },
{ header: 'Costo', accessor: 'CostoTotal' },
{ header: 'CantidadObtenida', accessor: 'CantidadObtenida' }]

export const columnasFactura:Columnas[] =  
[{ header: '#Fac', accessor: 'IdFactura'},
{ header: 'Cliente', accessor: 'Nombres'},
{ header: 'Fecha', accessor: 'FechaEmision'},
{ header: 'Costo', accessor: 'CostoTotal'},
{ header: 'Subtotal', accessor: 'Subtotal'},
{ header: 'Desc', accessor: 'Descuento'},
{ header: 'IVA', accessor: 'Impuestos'},
{ header: 'Total', accessor: 'Total'}]

export const columnasClientesFactura:Columnas[] =  
[{ header: 'Id', accessor: 'IdCliente'},
{ header: 'Cliente', accessor: 'Cliente'},
{ header: 'Telefono', accessor: 'Telefono' },]

export const columnasDetalleFactura:Columnas[] =  
[{ header: '#Fac', accessor: 'IdFactura'},
{ header: 'Producto', accessor: 'NombreProducto'},
{ header: 'Cantidad', accessor: 'CantidadVendida' },
{ header: 'PrecioVenta', accessor: 'PrecioVenta' }]