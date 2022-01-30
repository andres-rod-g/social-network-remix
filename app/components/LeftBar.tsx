import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export default function LeftBar () {
    return(
        <div className='left-toolbar'>
            <div className='left-icon'>
                <FontAwesomeIcon icon={faUserFriends}/>
                </div>
                <div className='left-icon'>
                <FontAwesomeIcon icon={faCommentAlt}/>
            </div>
      </div>
    )
}