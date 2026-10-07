import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/index.jsx";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon.jsx";
import { ExpertisesPage } from "./pages/Expertises/ExpertisesPage.jsx";
import { HomePage } from "./pages/Home/HomePage.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<ComingSoon title="Sobre" />} />
          <Route path="/atuacao" element={<ExpertisesPage />} />
          <Route path="/artigos" element={<ComingSoon title="Artigos" />} />
          <Route path="/contato" element={<ComingSoon title="Contato" />} />
          <Route
            path="*"
            element={
              <ComingSoon
                title="Página não encontrada"
                description="O endereço acessado não corresponde a uma página do site."
              />
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
