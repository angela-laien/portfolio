import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShowHamburgerDropDown: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu 
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='hotpink'
                borderRadius={0}
                animationDuration={0.5}
            />
        )
    }

    displayNavBar = () => {
        return (
            <div className='nav'>
                <NavLink className='navSub' to='/' style={{ textDecoration:'none', color:'grey', margin: '0% 5%'}}
                onClick={() => {
                    document.querySelector('.App').classList.toggle('newBackground');
                }}
                >Home</NavLink>
                <NavLink className='navSub' to='/About' style={{ textDecoration:'none', color:'grey', margin: '0% 5%'}}>About</NavLink>
                <NavLink className='navSub' to='/Work' style={{ textDecoration:'none', color:'grey', margin: '0% 5%'}}>Work</NavLink>
                <NavLink className='navSub' to='/Skills' style={{ textDecoration:'none', color:'grey', margin: '0% 5%'}}>Skills</NavLink>
                <NavLink className='navSub' to='/Contact' style={{ textDecoration:'none', color:'grey', margin: '0% 5%'}}>Contact</NavLink>
            </div>
        )
    }

    displayMobileMenu = () => {
        return (
            <ul className='hamburgerDropDown' style={{listStyleType:'none'}}>
                <li className='nav-link'><NavLink to='/' style={{ textDecoration:'none', color:'black'}}
                onClick={() => {
                    document.querySelector('.App').classList.toggle('newBackground');
                }}
                >Home</NavLink></li>
                <li className='nav-link'><NavLink to='/About' style={{ textDecoration:'none', color:'black'}}>About</NavLink></li>
                <li className='nav-link'><NavLink to='/Work' style={{ textDecoration:'none', color:'black'}}>Work</NavLink></li>
                <li className='nav-link'><NavLink to='/Skills' style={{ textDecoration:'none', color:'black'}}>Skills</NavLink></li>
                <li className='nav-link'><NavLink to='/Contact' style={{ textDecoration:'none', color:'black'}}>Contact</NavLink></li>
            </ul>
        )
    }

    render() {
        return (
            <div className='navbar'>
                { this.state.open ? this.displayMobileMenu() : null }
                {window.innerWidth > 30 ? this.displayNavBar() : this.displayHamburgerMenu()}
            </div>
        )
    }
}

export default Nav;