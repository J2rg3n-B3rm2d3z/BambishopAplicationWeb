export interface Cliente {
    idCliente:number,
    nombres:string,
    apellidos:string,
    telefono:string
}

export interface Producto {
    IdProducto:number,
    IdTipo:number,
    NombreProducto:string,
    PrecioActual:number,
    CantidadProducto:number
}

export interface Tipo {
    IdTipo:number,
    Tipo:string
}

export interface Factura {
    IdFactura:number,
    IdCliente:number,
    FechaEmision:Date,
    Impuestos:number,
    Descuento:number
}

export interface Proveedor {
    IdProveedor:number,
    NombreProveedor:string,
    Direccion:string,
    Telefono:(string | null),
    Correo:(string | null),
}

export interface DetalleFactura {
    IdProducto:number,
    IdFactura:number,
    PrecioVenta:number,
    CantidadVendida:number
}

export interface Proveedor_Producto {
    IdProducto:number,
    IdProveedor:number,
    FechaObtencion:Date,
    CostoTotal:number,
    CantidadObtenida:number
}