import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import Details from "./pages/Details";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<MainPage />} />
        <Route path='/details' element={<Details />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
