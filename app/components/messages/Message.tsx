type Params = {
    userPublicID: string;
    readerUserID: string;
    author: string;
    message: string;
}

export default function Message ({userPublicID = 'h', readerUserID = 'h', author, message}:Params) {
    return(
        <div className="message-space">
            <div className={userPublicID === readerUserID ? 'direction-right' : 'direction-left'}>
                {
                    userPublicID === readerUserID
                        ? <h6>{author}</h6>
                        : null
                }
                <div className="message-container">
                    <p className="message">{message}</p>
                </div>
            </div>
        </div>
    )
}