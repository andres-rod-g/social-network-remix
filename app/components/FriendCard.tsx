import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function FriendCard () {
    return (
        <div className="friend-card">
            <div className="profile-information">
                <img/>
                <h2>Andrew</h2>
            </div>
            <div className="icon" style={{cursor: 'pointer'}}>
                <FontAwesomeIcon  icon={faEllipsisV}/>
            </div>
        </div>
    )
}