import { useEffect } from "react";
import { Outlet, useNavigate } from "remix";
import NavBar from "~/components/NavBar";


export default function Sections () {
    const navigate = useNavigate()
    

    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}