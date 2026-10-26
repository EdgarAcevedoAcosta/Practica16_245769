import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./componentes/Layout";
import PaginaClases from "./paginas/PaginaClases";
import { NoEncontrado } from "./componentes/NoEncontrado";
import PaginaClase from "./paginas/PaginaClase";
import PaginaEntrar from "./paginas/PaginasEntrar";
import PaginaRegistro from "./paginas/PaginaRegistro";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/clases" replace />}></Route>
          <Route path="/clases">
            <Route index element={<PaginaClases />}></Route>
            <Route path=":id" element={<PaginaClase />}></Route>
          </Route>
          <Route path="entrar" element={<PaginaEntrar />}></Route>
          <Route path="registro" element={<PaginaRegistro />}></Route>
        </Route>
        <Route path="*" element={<NoEncontrado />}></Route>
      </Routes>
    </>
  );
}

export default App;
