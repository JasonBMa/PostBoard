import { Outlet } from "react-router-dom";
import Header from "../Components/Header"

function RootLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default RootLayout;