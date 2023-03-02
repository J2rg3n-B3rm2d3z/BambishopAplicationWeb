import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ClienteScreen, FacturaScreen, InicioScreen,
     ProductoScreen, ProproScreen, ProveedorScreen, 
     TipoScreen } from "../components/screen"
import { Navbar } from "../components/ui"



export const AppRouter= (): JSX.Element => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<InicioScreen/>}/>
                <Route path="/producto" element={<ProductoScreen/>}/>
                <Route path="/proveedor" element={<ProveedorScreen key={"Proveedor"} />}/>
                <Route path="/adquisicion" element={<ProproScreen/>}/>
                <Route path="/factura" element={<FacturaScreen/>}/>
                <Route path="/cliente" element={<ClienteScreen key={"Cliente"}/>}/>
                <Route path="/tipo" element={<TipoScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}