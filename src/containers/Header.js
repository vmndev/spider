import React, { Component } from 'react';
import { Link } from 'components/Router';
import Navigation from 'components/Navigation';
import Hamburger from 'components/Hamburger';
import Icon from 'components/Icon';

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
        const { language } = this.props;

        return(
            <header className={`${!!isMenuOpen && 'menu-open'}`}>   
                <Link onClick={this.closeMenu} to="/">
                    {/* <Icon name={'cube'} /> */}
                    <img className="logo" alt="spidermesh logo" src="/img/logo-white.svg" />
                </Link>
                <Navigation language={language} closeMenu={this.closeMenu} />
                <Hamburger onClick={this.handleHamburgerClick} />
            </header>
        )
    }
}

export default Header;