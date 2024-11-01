import { Route, Routes } from "react-router-dom";

import PaginaInicial from "./paginasEstaticas/PaginaInicial/PaginaInicial";
import SobreMim from "./paginasEstaticas/SobreMim/SobreMim";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicial/>}/>
            <Route path='/sobre-mim' element={<SobreMim/>}/>
        </Routes>
    )
}