import { Routes, Route, Navigate } from "react-router-dom";
import RotaPrivada from './componentes/RotaPrivada.jsx'

import Login from "./paginas/Login.jsx";
import Feed from "./paginas/Feed.jsx";
import Perfil from "./paginas/Perfil.jsx";
import Configuracoes from "./paginas/Configuracoes.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

    <Route element={<RotaPrivada />}>
      <Route path="/feed" element={<Feed />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
    </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
