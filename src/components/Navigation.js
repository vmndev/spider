import React from 'react';
import { Link } from 'components/Router';

const Navigation = () => {
    return(
        <ul className={`navigation-links`}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/dynamic"><li>Dynamic</li></Link>
        </ul>
    )
}

export default Navigation;