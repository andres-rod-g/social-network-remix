import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { LinksFunction } from 'remix';

import stylesUrl from '~/styles/index.css'

import NavBar from '~/components/NavBar';
import Post from '~/components/Post';
import TopBar from '~/components/TopBar';
import LeftBar from '~/components/LeftBar';

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
    <div className='main-page'>
      <LeftBar/>
      <TopBar/>
      <div className='page-content'>
        <Post/>
      </div>
    </div>
  );
}
