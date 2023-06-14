import { Homepage } from "./Components/Page/Homepage";
// import {Store }from './Components/Page/Store';
// import {About }from './Components/Page/About';
import './App.css';
import { Container } from "react-bootstrap";
import { Routes,Route,Navigate} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Product } from "./Components/Page/Product";
// import ProductDetails from "./Components/Page/ProductDetails";
// import AuthForm from "./Components/Auth/AuthForm";
import Layout from "./Components/Form/Layout";
import Login from "./Components/Form/Login";
import Signup from "./Components/Form/Signup";
// import Profile from "./Components/Form/Profile";
// import ExpenseData from "./Components/ExpenseTraker/ExpenseData";
import  Logout  from "./Components/Form/Logout";
function App() {
  


  return (
    <>
      <Navbar />
      <Container>
        <Layout>
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/expense" element={<ExpenseData/>} /> */}
            <Route path="/logout" element={<Logout/>} />
            {/* <Route path="/light-mode" element={ <Light/>} /> */}

             <Route path="*" element={<Navigate to="expense"/>}/>
            
            </Routes>
        </Layout>
      </Container>
    </>
  )
};

export default App;