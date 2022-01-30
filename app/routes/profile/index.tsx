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
            <div className="card profile-container">
                <div className="profile-info">
                    <img/>
                    <h1>Josefino</h1>
                </div>
                <button className="option-button">
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </button>
            </div>
            <div className="bio-container card">
                <div className="bio-header">
                    <h2>Bio</h2>
                    <button className="default-icon option-button">
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </button>
                </div>
                <div className='bio-body'>
                    <p>This from here is a bio.</p>
                </div>
            </div>
        </div>
    )
}