import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LayoutRoot = () => {

    return(
        <>
            <Navbar />
            <Outlet />
            <footer>
                Pie de Pagina
            </footer>
        </>
    );
};

export default LayoutRoot;