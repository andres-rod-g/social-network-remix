import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { LinksFunction } from 'remix';

import stylesUrl from '~/styles/login.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl
    }
  ]
}

export default function Index() {
    const [sectionIndex, setSctionIndex] = useState(0)
    const [cookies, setCookies] = useCookies([''])

    useEffect(() => {
    console.log(cookies)
    });

    return (
        <div className='login-page'>
        <div className='left-panel'>
            <div className='login-content'>
                <h1>Connekt</h1>
                    <form>
                        <label htmlFor='email'>Email</label>
                        <input name='email' placeholder='andrew@gmail.com'></input>
                        <label htmlFor='password'>Password</label>
                        <input name='password' placeholder='Password'></input>
                        <div className='button-container'>
                            <button className='sign-in'>Sign In</button>
                            <button className='login'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        <div className='right-panel'>

            </div>
        </div>
    );
}
