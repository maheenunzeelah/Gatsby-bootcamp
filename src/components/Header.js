import React from 'react';
import {Link} from 'gatsby';

const Header=()=>{
    return(
        <header>
            <h1>Gatsby</h1>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>

        </header>
    )
}
export default Header;