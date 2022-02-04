import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Link } from 'remix';

export default function LeftBar () {
    const navigate = useNavigate()

    return(
        <div className='left-toolbar'>
            <Link to='/friends' className='left-icon'>
                <FontAwesomeIcon onClick={() => navigate('/friends')} icon={faUserFriends}/>
            </Link> 
            <Link to='/messages' className='left-icon'>
                <FontAwesomeIcon onClick={() => navigate('/messages')} icon={faCommentAlt}/>
            </Link>
      </div>
    )
}