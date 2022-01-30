import { LinksFunction } from "remix";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import stylesUrl from "~/styles/profile/index.css";

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl
        }
    ]
}

export default function MainProfile() {
    return (
        <div className="profile-page-container">
            <div className="profile-container">
                <div className="profile-info">
                    <img/>
                    <h1>Josefino</h1>
                </div>
                <button>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </button>
            </div>
            <div className="bio-container">
                BIOGRAFIA
                EDITAR BIOGRAFIA
            </div>
        </div>
    )
}