import LeftBar from "~/components/nav/LeftBar";
import TopBar from "~/components/nav/TopBar";

import { LinksFunction, Outlet } from "remix";

export default function Perfil () {
    return(
        <div className="page-container">
            <TopBar/>
            <LeftBar/>
            <Outlet/>
        </div>
    )
}