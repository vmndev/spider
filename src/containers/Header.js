import React, { Component } from 'react';
import { Link } from 'components/Router';
import Navigation from 'components/Navigation';
import Hamburger from 'components/Hamburger';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isMenuOpen: false
        }
    }

    handleHamburgerClick = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        })
    }

    closeMenu = () => {
        this.setState({
            isMenuOpen: false,
        })
    }

    render(){
        const { isMenuOpen } = this.state;
        return(
            <header className={`${!!isMenuOpen && 'menu-open'}`}>   
                <img className="logo" alt="spidermesh logo" src="https://via.placeholder.com/150x50" />
                <Navigation closeMenu={this.closeMenu} />
                <Hamburger onClick={this.handleHamburgerClick} />
            </header>
        )
    }
}

export default Header;