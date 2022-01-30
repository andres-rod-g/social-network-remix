import { useEffect } from "react";
import { Outlet, useNavigate } from "remix";

export default function Sections () {
    const navigate = useNavigate()
    

    return (
        <>
            <Outlet/>
        </>
    )
}