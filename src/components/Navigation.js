import React from 'react';
import { Link } from 'components/Router';

const Navigation = (props) => {
    const { closeMenu } = props;
    return(
        <ul className={`navigation-links`}>
          <Link onClick={closeMenu} to="/"><li>Home</li></Link>
          <Link onClick={closeMenu} to="/about"><li>About</li></Link>
          <Link onClick={closeMenu} to="/blog"><li>Blog</li></Link>
          <Link onClick={closeMenu} to="/dynamic"><li>Dynamic</li></Link>
        </ul>
    )
}

export default Navigation;