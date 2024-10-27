import { Route, Routes } from "react-router-dom";

import PaginaInicial from "./paginasEstaticas/PaginaInicial/PaginaInicial";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicial/>}/>
        </Routes>
    )
}