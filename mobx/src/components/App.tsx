import { Route, Routes } from "react-router-dom";
import { Login } from "./Login.tsx";
import { Register } from './Register.tsx';
import { Main } from "./Mains.tsx"
import Header from "./Header.tsx";
import { About } from "./About.tsx";
import { PrivateRoutes } from "../utils/privateRoutes/PrivateRoutes.tsx";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route element={<PrivateRoutes/>}>

                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />

                </Route>
                
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<Register />} />
            </Routes>
        </div>
    )
};
export default App;