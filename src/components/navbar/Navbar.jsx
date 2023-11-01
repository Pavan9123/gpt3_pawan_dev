import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'





const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const [closeMenu, setCloseMenu] = useState(true)
  


  const Menu = () => (
    <>
      <p><a href='#home' onClick={() => {setCloseMenu(true); setToggleMenu(false);}}>Home</a></p>
      <p><a href='#whgtp3' onClick={() => {setCloseMenu(true); setToggleMenu(false);}}>What is GPT?</a></p>
      <p><a href='#possibility' onClick={() => {setCloseMenu(true); setToggleMenu(false);}}>Open AI</a></p>
      <p><a href='#blog' onClick={() => {setCloseMenu(true); setToggleMenu(false);}}>Library</a></p>
      <p><a href='#footer' onClick={() => {setCloseMenu(true); setToggleMenu(false);}}>About</a></p>
    </>
  )

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gtp3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <p><button type='button'>Sign up</button></p>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size = {27} onClick={() => setToggleMenu(false)}/>
          : closeMenu ? <RiMenu3Line color='#fff' size = {27} onClick={() => setToggleMenu(true)}/> : <RiCloseLine color='#fff' size = {27} onClick={() => {setCloseMenu(true)}}/>
        }
        {toggleMenu && closeMenu && (
          <div className='gpt3__navbar-menu_container scale-up-ver-top'>
            <div gpt3__navbar-menu_container-header>
              <h3>Menu</h3>
              <hr></hr>
            </div>

            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <p><button type='button'>Sign up</button></p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar