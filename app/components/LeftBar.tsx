import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'remix';

export default function LeftBar () {
    const navigate = useNavigate()

    return(
        <div className='left-toolbar'>
            <div className='left-icon'>
                <FontAwesomeIcon onClick={() => navigate('/friends')} icon={faUserFriends}/>
                </div> 
                <div className='left-icon'>
                <FontAwesomeIcon icon={faCommentAlt}/>
            </div>
      </div>
    )
}