import { LinksFunction } from "remix";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import stylesUrlIndex from "~/styles/profile/index.css";
import stylesUrl from "~/styles/friends.css";

import LeftBar from "~/components/nav/LeftBar";
import TopBar from "~/components/nav/TopBar";
import FriendCard from "~/components/friends/FriendCard";

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl
        },
        {
            rel: 'stylesheet',
            href: stylesUrlIndex
        }
    ]
}

export default function Friends() {
    return (
        <div className="page-container">
            <LeftBar/>
            <TopBar/>
            <div className="card">
                <h1>Friends</h1>
            </div>
            <div className="card">
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
            </div>
        </div>
    )
}