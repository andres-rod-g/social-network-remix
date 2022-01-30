import LeftBar from "~/components/LeftBar";
import TopBar from "~/components/TopBar";

import { LinksFunction, Outlet } from "remix";

import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
    return [
      {
        rel: 'stylesheet',
        href: stylesUrl
      }
    ]
}

export default function Perfil () {
    return(
        <div className="profile-page">
            <TopBar/>
            <LeftBar/>
            <Outlet/>
        </div>
    )
}