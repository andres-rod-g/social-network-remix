type Params = {
    selected: number,
    id: number
}

export default function Contact ({selected, id = 0}: Params) {


    return (
        <>
            {
                selected === id
                    ?   <div className="contact active-contact">
                            <img src="https://s.yimg.com/uu/api/res/1.2/Dypsw7laAdg9Qo59HWxxYg--~B/aD02MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/892f467ab02d5c4e85fc521a8d625097"/>
                        </div>
                    :   <div className="contact">
                            <img src="https://s.yimg.com/uu/api/res/1.2/Dypsw7laAdg9Qo59HWxxYg--~B/aD02MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/892f467ab02d5c4e85fc521a8d625097"/>
                        </div>
            }
        </>
    )
}