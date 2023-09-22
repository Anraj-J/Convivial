import './App.css';
import Header from './header';
import Layout from './layout';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import Post from "./post";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
