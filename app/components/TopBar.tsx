import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug, faBell, faUserFriends, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'remix';

export default function TopBar () {
    const navigate = useNavigate()

    return (
        <div className='default-icon top-toolbar'>
            <FontAwesomeIcon onClick={() => navigate('/')} style={{transform: 'rotate(90deg)', fontSize: '30px', padding: '0px 20px', cursor: 'pointer'}} icon={faPlug}/>
            <input className='search-bar' placeholder='Search'/>
            <div className='right-utilities'>
                <div className='default-icon notification-container'>
                    <FontAwesomeIcon icon={faBell} style={{fontSize: '25px'}}/>
                    <div className='notification'><a>1</a></div>
                </div>
                <div className='user-image' onClick={() => navigate('/profile')} style={{cursor:'pointer' , display:'flex', alignItems:'center', justifyContent: 'center'}}>
                    <h1 style={{color: 'black'}}>H</h1>
                </div>
            </div>
        </div>
    )
}