import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/mainpage' />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
