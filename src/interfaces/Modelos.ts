export interface Cliente {
    IdCliente:number,
    Nombres:string,
    Apellidos:string,
    Telefono:string
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
    Telefono:string,
    Correo:string
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