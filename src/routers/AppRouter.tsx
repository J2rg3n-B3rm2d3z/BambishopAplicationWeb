import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ClienteScreen } from "../components/cliente/ClienteScreen"
import { FacturaScreen } from "../components/factura/FacturaScreen"
import { ProductoScreen } from "../components/producto/ProductoScreen"
import { ProproScreen } from "../components/propro/ProproScreen"
import { ProveedorScreen } from "../components/proveedor/ProveedorScreen"
import { InicioScreen } from "../components/inicio/InicioScreen"
import { Navbar } from "../components/ui/Navbar"



export const AppRouter= (): JSX.Element => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<InicioScreen/>}/>
                <Route path="/producto" element={<ProductoScreen/>}/>
                <Route path="/proveedor" element={<ProveedorScreen/>}/>
                <Route path="/adquisicion" element={<ProproScreen/>}/>
                <Route path="/factura" element={<FacturaScreen/>}/>
                <Route path="/cliente" element={<ClienteScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}