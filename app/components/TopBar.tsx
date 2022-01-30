import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug, faBell, faUserFriends, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export default function TopBar () {
    return (
        <div className='top-toolbar'>
            <FontAwesomeIcon style={{transform: 'rotate(90deg)', fontSize: '30px', padding: '0px 20px'}} icon={faPlug}/>
            <input className='search-bar' placeholder='Search'/>
            <div className='right-utilities'>
                <div className='notification-container'>
                    <FontAwesomeIcon icon={faBell} style={{fontSize: '25px'}}/>
                    <div className='notification'><a>1</a></div>
                </div>
                <div className='user-image'>
                    
                </div>
            </div>
        </div>
    )
}