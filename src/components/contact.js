import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
import {Link} from "gatsby"




const Contact = () =>{
    const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


    return (
        <div className="contact" id="contact-jump">
            <div className="container">
                <div className="inner-contact">
                    <div className="content">
                        <p>Connect with me at</p>
                       <div className="btn-row">
                           <Link to="/#top">Go To Top</Link>
                       </div>
                    </div>
                    <div className="images">
                        <div className="left-image">
                            <a href="http://www.github.com/raiutkarsh09"><Img fluid={data.logo1.childImageSharp.fluid} /></a>
                        </div>
                        <div className="right-image">
                            <a href="https://www.linkedin.com/in/utkarsh-rai-50738b61"><Img fluid={data.logo2.childImageSharp.fluid} /></a>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="grey-box"></div>
            
        </div>
    )
}
export default Contact