import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from './Register';
import { Main } from "./Mains"
import Header from "./Header.tsx";
import { About } from "./About.tsx";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<Register />} />
            </Routes>
        </div>
    )
};
export default App;