//*importaciones de CSS
import "./App.css";

//*impotaciones de modulos
import { Routes, Route } from "react-router-dom";

//*importaciones de componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

//*importaciones de Paginas de navegacion
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NotaPage } from "./pages/NotaPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
import { ModifyPage } from "./pages/ModifyPage";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/modify/notes/:id" element={<ModifyPage />} />
        <Route path="/notes/:id" element={<NotaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
