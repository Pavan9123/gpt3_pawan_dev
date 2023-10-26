import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whgtp3'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMneu] = useState(false)

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
          ? <RiCloseLine color='#fff' size = {27} onClick={() => setToggleMneu(false)}/>
          : <RiMenu3Line color='#fff' size = {27} onClick={() => setToggleMneu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-ver-top'>
            <div gpt3__navbar-menu_container-header>
              <h3>Menu</h3>
              <hr></hr>
            </div>

            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
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