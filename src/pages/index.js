import React from "react"
import {Link} from 'gatsby';
import Layout from '../components/Layout';


const IndexPage=()=>{
    return(
     <Layout>
        <h1>Hello. I am a MERN stack developer</h1>
        <p>Need a New developer?<Link to="/contact">Contact me</Link></p>
      </Layout>
    )
}
export default IndexPage;