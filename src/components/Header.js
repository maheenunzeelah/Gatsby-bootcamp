import React from 'react';
import {Link,graphql,useStaticQuery} from 'gatsby';

const Header=()=>{
    const data=useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title,
            author
          }
        }
      }
    `)
    return(
        <header>
            <Link><h1>{data.site.siteMetadata.title}</h1></Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>

        </header>
    )
}
export default Header;