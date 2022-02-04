import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function FriendCard () {
    return (
        <div className="friend-card">
            <div className="profile-information">
                <img src='https://i.insider.com/5899ffcf6e09a897008b5c04?width=600&format=jpeg&auto=webp'/>
                <h2>Andrew</h2>
            </div>
            <div className="friend-card-options">

                <div className="icon" style={{cursor: 'pointer'}}>
                    <FontAwesomeIcon  icon={faEllipsisV}/>
                </div>
            </div>
        </div>
    )
}