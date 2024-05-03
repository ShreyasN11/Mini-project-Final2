import React from 'react'
import Navbar2 from './components/Navbar2/Navbar2';
import Footer from './components/Footer/Footer';


function User() {
  return (
    <div>
            <Navbar2/>
            <main>
            <div id="home"className='Log' >
                <div className='wrapper'>
                     
                </div>
            </div>
            </main>
            <div className='contact' id='contact'>
                <Footer />
            </div>
        </div>
  )
}

export default User