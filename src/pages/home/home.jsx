
import React from 'react';
import Usersidebar from './usersidebar';
import Massage from './massagecontainer';

export default function Home() {

    return(
        <div className='flex'>
            <Usersidebar/>
            <Massage/>
        </div>
    )
    
}