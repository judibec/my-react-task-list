import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import App from "./App";
import { SobreNosotros } from "./pages/SobreNosotros";

function Index(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index;