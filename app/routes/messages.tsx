import { LinksFunction } from "remix";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import stylesUrl from "~/styles/messages.css";

import LeftBar from "~/components/nav/LeftBar";
import TopBar from "~/components/nav/TopBar";
import Contact from "~/components/contacts/contact";
import Message from "~/components/messages/Message";

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl
        }
    ]
  }

const AddConversation = () => {
    return (
        <div className="add-conversation">
            <button>+</button>
        </div>
    )
}

export default function Friends() {
    return (
        <div className="page-container">
            <LeftBar/>
            <TopBar/>
            <div className="contacts">
                <Contact selected={0} id={0}/>
                <Contact selected={0} id={1}/>
                <AddConversation/>
            </div>
            <div className="content">
                <div className="message-history">
                    <Message userPublicID="1" readerUserID="1" author="Pepe" message="This from here is a test"/>
                    <Message userPublicID="1" readerUserID="1" author="Pepe" message="This from here is a test"/>
                    <Message userPublicID="1" readerUserID="0" author="Pepe" message="This from here is a test"/>
                    <Message userPublicID="1" readerUserID="0" author="Pepe" message="This from here is a test"/>
                    <Message userPublicID="1" readerUserID="1" author="Pepe" message="This from here is a test"/>
                    <Message userPublicID="1" readerUserID="1" author="Pepe" message="This from here is a test"/>
                    <Message userPublicID="1" readerUserID="1" author="Pepe" message="This from here is a test"/>
                    <Message userPublicID="1" readerUserID="0" author="Pepe" message="This from here is a test"/>
                </div>
                <div className="message-bar">
                    <div className="write-zone">
                        <input/>
                    </div>
                    <button>
                        <FontAwesomeIcon style={{color: 'dodgerblue'}} icon={faPaperPlane}/>
                    </button>
                </div>
            </div>
        </div>
    )
}