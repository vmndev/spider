import React, { Component } from 'react';

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

    render(){
        const { isMenuOpen } = this.state;
        return(
            <header className={`${!!isMenuOpen && 'menu-open'}`}>   
                <img alt="spidermesh logo" src="https://via.placeholder.com/150x50" />
                <Navigation />
                <Hamburger onClick={this.handleHamburgerClick} />
            </header>
        )
    }
}

export default Header;